Meteor.subscribe("issues");

Template.groupView.helpers({
	issues: function (groupId) {
		console.log(groupId);
    	return Issues.find({group: groupId});
  	}
});