import { Session } from 'meteor/session'

Template.timeline.helpers({
	posts: function(){
		return Posts.list(Meteor.userId())
	}
})

