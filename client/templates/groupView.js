Deps.autorun(function(){
    Meteor.subscribe("issues", Session.get("groupId"));
});

Template.groupView.helpers({

    issues: function (groupId) {
		Session.set("groupId", groupId);
    	return Issues.find({});
    }

});

Template.issue.helpers({
	myAye: function () { return this.aye.indexOf(Meteor.userId()) > -1 },
	myAbs: function () { return this.abs.indexOf(Meteor.userId()) > -1 },
	myNay: function () { return this.nay.indexOf(Meteor.userId()) > -1 }
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

Template.issue.onRendered(function () {
	/*
	if (voteIs("aye", this._id)) {
		var param = "aye-" + this._id;
		press(id);
	}
	*/
});
/*
Template.issue.helpers({
	"aye-p": function() { return voteIs("aye") },
	"abs-p": function() { return voteIs("abs") },
	"nay-p": function() { return voteIs("nay") }
});

function press(tabname) {
	document.getElementById(tabname).classList.add("pressed");
}

function voteIs(type, issueId) {
	var cb = function (error, result) {
		if (error) {
			alert(error);
			return false;
		}
		else {
			return result == type;
		}
	};

	Meteor.call("getMyVote", issueId, Meteor.userId(), cb);
}
*/