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
