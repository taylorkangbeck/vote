Issues = new Mongo.Collection('issues');

Meteor.methods({
  addIssue: function (title_text, desc_text, groupId) {
    // Make sure the user is logged in before adding a group
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Issues.insert({
      title: title_text,
      description: desc_text,
      createdAt: new Date(),
      admin: Meteor.userId(),
      group: groupId
    });
  },

  deleteIssue: function (issueId) {
  	var thisIssue = Issues.findOne(issueId);
  	if (thisIssue.admin !== Meteor.userId()) {
  		throw new Meteor.Error("not-authorized");
  	}
  	else {
  		Groups.remove(issueId);
  	}
  },

  poop: function () {
    console.log("poop");
  }   
});