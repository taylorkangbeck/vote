Meteor.subscribe("allUserData");

Deps.autorun(function(){
    Meteor.subscribe("issues", Session.get("groupId"));
});

Template.groupView.helpers({

    issues: function (groupId) {
		Session.set("groupId", groupId);
    	return Issues.find({});
    },

    members: function () {
    	var names = [];
    	Template.instance().data.group.members.forEach(function (element, index, array) {
    		var curUser = Meteor.users.findOne({ _id: element});
    		names.push(curUser);
    	});
    	return names;
    }
});

Template.groupView.events({
	"click .leave-group": function () {
		Meteor.call("leaveGroup", Template.instance().data.group._id, Meteor.userId());
		history.back();
	}
});

Template.groupView.rendered = function () {
    IonSideMenu.snapper.settings({disable: 'left'});
};

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

//search
Tracker.autorun(function() {
  if (Session.get('searchQuery')) {
    Meteor.subscribe('usersSearch', Session.get('searchQuery'));
  }
});

Template.search.events({
  'keyup input': function (event, template) {
    Session.set('searchQuery', event.target.value);
  }
});

Template.search.helpers({
  searchQuery: function() {
    return Session.get('searchQuery');
  },
  searchResults: function () {
    var re = "^" + Session.get('searchQuery');
    var query = new RegExp(re, 'i');
    var results = Meteor.users.find({'username': query}, {});
    return {results: results}; 
  },
  isSearchInput: function () {
  	var input = Session.get('searchQuery');
    return input != null && input != '';
  }
});

Template.user.events({
	'click .user_result': function (event, template) {
		var user_id = Template.instance().data._id;
		console.log(user_id);
		Meteor.call("addUser", Session.get("groupId"), user_id);
		Session.set('searchQuery', "");
		document.getElementById("search-bar").value = "";
	}
});