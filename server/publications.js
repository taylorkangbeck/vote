Meteor.publish("groups", function () {
  return Groups.find(
      { members: this.userId }
  );
});


Meteor.publish("issues", function (groupId) {
	return Issues.find(
		{ group: groupId }
	);
});

Meteor.publish("allUserData", function () {
    return Meteor.users.find({}, {fields: {'_id': 1, 'username': 1}});
});