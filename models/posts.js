Posts = new Mongo.Collection("posts");

Posts.publishing = function(message, name){
	this.insert({
		message: message,
		date: new Date,
		userId: Meteor.userId(),
		name: name
	})
};

Posts.list = function(userId){
	return this.find({userId: userId})
}