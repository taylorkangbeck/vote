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

	/*
	var issueArr;
	
	Groups.find(groupId).issues.forEach(function(element, index, array) {
		issueArr.push(Issues.find(element));
	});

	return issueArr;
	*/
})
