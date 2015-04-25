Meteor.publish("groups", function () {
  return Groups.find(
      { members: this.userId }
  );
});

Meteor.publish("issues", function (id) {
    console.log(id)
    return Issues.find(
	{ group: id }
	);
})
