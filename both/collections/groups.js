Groups = new Mongo.Collection('groups');

//Groups.before.insert(function (groupId))


/*
groupSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  }
});

Groups.attachSchema(groupSchema);
*/

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
  }
/*
  setChecked: function (taskId, setChecked) {
    Tasks.update(taskId, { $set: { checked: setChecked} });
  }
  */
});