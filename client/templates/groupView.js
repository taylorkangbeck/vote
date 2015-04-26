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
		Meteor.call("aye", this._id, Meteor.userId());
	},

	"click .abs": function (event, template) {
		Meteor.call("abs", this._id, Meteor.userId());
	},

	"click .nay": function (event, template) {
		Meteor.call("nay", this._id, Meteor.userId());
	}
});
/*
Template.issue.onRendered({
	//if (voteIs("aye") press("aye")
});

Template.issue.helpers({
	"aye-p": function() { return voteIs("aye") },
	"abs-p": function() { return voteIs("abs") },
	"nay-p": function() { return voteIs("nay") }
});

function press(tabname) {
	document.getElementById(tabname).classList.add("pressed");
}

function voteIs(type) {
	var cb = function (error, result) {
		if (error) {
			alert(error);
			return false;
		}
		else {
			return result == type;
		}
	};

	Meteor.call("getMyVote", this._id, Meteor.userId(), cb);
}
*/