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

Meteor.publish("users", function () {
    return Users.find({});
});

Meteor.publish('userSearch', function(query) {
    check(query, String);

    if (_.isEmpty(query)) {
	return this.ready();
    }

    return Products.search(query);
});
