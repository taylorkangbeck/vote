Meteor.publish("groups", function () {
  return Groups.find(
      { members: this.userId }
  );
});

Meteor.publish("issues", function () {
	return Issues.find(
		//{ group: groupId }
	);

});
