Deps.autorun(function(){
    Meteor.subscribe("issues", Session.get("groupId"));
});
Template.groupView.helpers({
    issues: function (groupId) {
	Session.set("groupId", groupId);
    	    return Issues.find({});
  	}
});
