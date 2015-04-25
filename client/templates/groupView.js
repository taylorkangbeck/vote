Meteor.subscribe("issues");

Template.groupView.helpers({
	issues: function () {
    	return Issues.find({group: this._id});
  	}
});x