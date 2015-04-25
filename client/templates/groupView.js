Deps.autorun(function(){
    Meteor.subscribe("issues", Session.get("groupId"));
});
Template.groupView.helpers({

    issues: function (groupId) {
	Session.set("groupId", groupId);
    	    return Issues.find({});
    }

});

Template.issue.events({
	"click .aye": function (event, template) {
		Meteor.call("aye", this._id, Meteor.userId(), function (error, result) {
			if (error) {
				alert(error);
			} else {
				if (result) {
					
				}
				else {
					//else
				}
			}
		});
	},

	"click .abs": function (event, template) {
		Meteor.call("abs", this._id, Meteor.userId());
	},

	"click .nay": function (event, template) {
		Meteor.call("nay", this._id, Meteor.userId());
	}
});

function press(tabname) {
	document.getElementById(tabname).classList.add("pressed");
}
