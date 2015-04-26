Groups = new Mongo.Collection('groups');

Meteor.methods({
  addGroup: function (text) {
    // Make sure the user is logged in before adding a group
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Groups.insert({
      name: text,
      createdAt: new Date(),
      admin: Meteor.userId(),
      members: [Meteor.userId()]
    });
  },

  deleteGroup: function (groupId) {
  	var thisGroup = Groups.findOne(groupId);
  	if (thisGroup.admin !== Meteor.userId()) {
  		throw new Meteor.Error("not-authorized");
  	}
  	else {
  		Groups.remove(groupId);
  	}
  },

  addUser: function (groupId, userId) {
  	var thisGroup = Groups.findOne(groupId);
  	if (!(thisGroup.members.indexOf(userId) > -1)) {
  		Groups.update(
	      { _id : groupId },
	      { $push: { members : userId } }
	    );
  	}
  },

  leaveGroup: function (groupId, userId) {
  	Groups.update(
      { _id : groupId },
      { $pull: { members : userId } }
    );
  }
});