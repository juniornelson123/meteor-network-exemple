Posts = new Mongo.Collection("posts");

Posts.publishing = function(message, name){
	this.insert({
		message: message,
		date: new Date,
		userId: Meteor.userId(),
		name: name
	})
};

Posts.list = function(userIds){
	return this.find(	
		{userId:	{"$in":	userIds}},
		{sort:	{time:	-1,	name:	1}}
	)
}