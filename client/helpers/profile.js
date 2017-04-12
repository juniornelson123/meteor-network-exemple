import { Session } from 'meteor/session'

Template.profile.helpers({
	editProfile: function () {
		return Session.get("editProfile");
	}
});