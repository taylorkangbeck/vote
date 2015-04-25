Deps.autorun(function(){
    Meteor.subscribe("issues", Session.get("groupId"));
});

Template.groupView.helpers({

    issues: function (groupId) {
	    Session.set("groupId", groupId);
	    var iss = Issues.find();
	    console.log("found issues " + iss.count())
    	    return iss;
  	}
});
