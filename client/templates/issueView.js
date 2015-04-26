//	var curIssue = Issues.findOne(_id);
Template.issueView.helpers({
    getAye: function() { 
    	var ish = Issues.findOne(Template.instance().data.issue._id);
    	return ish.aye.length;
    },

    getAbs: function() { 
    	var ish = Issues.findOne(Template.instance().data.issue._id);
    	return ish.abs.length;
    },

    getNay: function() { 
    	var ish = Issues.findOne(Template.instance().data.issue._id);
    	return ish.nay.length;
    },

    getTotalVotes: function () {
    	var ish = Issues.findOne(Template.instance().data.issue._id);
    	return (ish.aye.length + ish.abs.length + ish.nay.length);
    },

    getTotalMembers: function () {
    	var grp = Groups.findOne(Template.instance().data.issue.group);
    	return grp.members.length;
    }
});

