Template.issueView.helpers({

    title: this.title,
    aye: this.aye(),
    nay: this.nay.count(),
    obs: this.obs.count()
});

