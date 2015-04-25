Meteor.publish("groups", function () {
  return Groups.find(
      { members: this.userId }
  );
});

Meteor.publish("issues", function () {
	return Issues.find(
		//{ group: groupId }
	);

	/*
	var issueArr;sx`
	
	Groups.find(groupId).issues.forEach(function(element, index, array) {
		issueArr.push(Issues.find(element));
	});

	return issueArr;
	*/
})