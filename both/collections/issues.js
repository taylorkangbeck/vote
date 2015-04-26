Issues = new Mongo.Collection('issues');

Meteor.methods({
  addIssue: function (title_text, desc_text, groupId) {
    // Make sure the user is logged in before adding a group
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    Issues.insert({
      title: title_text,
      description: desc_text,
      createdAt: new Date(),
      admin: Meteor.userId(),
      group: groupId,
      aye: [],
      abs: [],
      nay: []
    });
  },

  deleteIssue: function (issueId) {
  	var thisIssue = Issues.findOne(issueId);
  	if (thisIssue.admin !== Meteor.userId()) {
  		throw new Meteor.Error("not-authorized");
  	}
  	else {
  		Issues.remove(issueId);
  	}
  },

  aye: function (issueId, userId) {
      console.log("aye pressed")
      var ish = Issues.findOne(
      { _id : issueId }
    );
    
    if (ish.aye && ish.aye.indexOf(userId) > -1) {
      return false;
    }
    else {
      var vote = getUserVote(issueId, userId);
      if (vote != "aye") {
        if (vote == "nay") {
          Issues.update(
            { _id : issueId },
            { $pull: { nay : userId } }
          );
        }
        else if (vote == "abs") {
          Issues.update(
            { _id : issueId },
            { $pull: { abs : userId } }
          );
        }

        Issues.update(
          { _id : issueId },
          { $push: { aye : userId } }
        );
        return true;
      }
    }
    
  },

  abs: function (issueId, userId) {
    var ish = Issues.findOne(
      { _id : issueId }
    );
    
    if (ish.abs && ish.abs.indexOf(userId) > -1) {
      return false;
    }
    else {
      var vote = getUserVote(issueId, userId);
      if (vote != "abs") {
        if (vote == "nay") {
          Issues.update(
            { _id : issueId },
            { $pull: { nay : userId } }
          );
        }
        else if (vote == "aye") {
          Issues.update(
            { _id : issueId },
            { $pull: { aye : userId } }
          );
        }

        Issues.update(
          { _id : issueId },
          { $push: { abs : userId } }
        );
        return true;
      }
    }
    
  },

  nay: function (issueId, userId) {

  var ish = Issues.findOne(
      { _id : issueId }
    );
    
    if (ish.nay && ish.nay.indexOf(userId) > -1) {
      return false;
    }
    else {
      var vote = getUserVote(issueId, userId);
      if (vote != "nay") {
        if (vote == "aye") {
          Issues.update(
            { _id : issueId },
            { $pull: { aye : userId } }
          );
        }
        else if (vote == "abs") {
          Issues.update(
            { _id : issueId },
            { $pull: { abs : userId } }
          );
        }

        Issues.update(
          { _id : issueId },
          { $push: { nay : userId } }
        );
        return true;
      }
    }
    
  },

  getMyVote: function(iId, uId) { return getUserVote(iId, uId) }
  
});

function getUserVote(issueId, userId) {
  var ish = Issues.findOne(
    { _id : issueId }
  );

  if(ish.aye && ish.aye.indexOf(userId) > -1) {
    return "aye";
  }
  else if(ish.abs && ish.abs.indexOf(userId) > -1) {
    return "abs";
  }
  else if(ish.nay && ish.nay.indexOf(userId) > -1) {
    return "nay";
  }
  return "";
}
