import { Session } from 'meteor/session'

Template.post.events({
	"submit	form":	function(e,	template) {
		e.preventDefault();
		var	textarea	=	template.find("textarea");
		var name = Meteor.user().profile.name
		Posts.publishing(textarea.value, name);
		textarea.value	=	"";
	}
});