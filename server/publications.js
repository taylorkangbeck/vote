Meteor.publish("groups", function () {
  return Groups.find(
      { members: this.userId }
  );
});

Meteor.publish("issues", function (groupId) {
	
	return Issues.find(
		{ group: groupId }
	);

	/*
	var issueArr;
	
	Groups.find(groupId).issues.forEach(function(element, index, array) {
		issueArr.push(Issues.find(element));
	});

	return issueArr;
	*/
})