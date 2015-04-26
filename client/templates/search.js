Meteor.subscribe('users');
Tracker.autorun(function() {
    if (Session.get('searchQuery')) {
	Meteor.subscribe('userSearch', Session.get('searchQuery'));
    }
});

Template.search.events({
    'keyup input': function (event, template) {
	Session.set('searchQuery', event.target.value);
    },

    'click a': function (event, template) {
	IonModal.close();
    }
});

Template.search.helpers({
    users: function() {
	console.log(Meteor.users.find({}))
	return Meteor.users.find();
    },
    searchQuery: function() {
	console.log( Session.get('searchQuery'))
	return Session.get('searchQuery');
    }
});
