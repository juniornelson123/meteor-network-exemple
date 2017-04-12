import { Session } from 'meteor/session'

Template.post.events({
	"submit	form":	function(e,	template) {
		e.preventDefault();
		var	textarea	=	template.find("textarea");
		Posts.publishing(textarea.value);
		textarea.value	=	"";
	}
});