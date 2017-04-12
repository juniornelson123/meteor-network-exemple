Template.profileForm.helpers({
	user: function () {
		return Meteor.user().profile
	}
});