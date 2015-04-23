Meteor.subscribe("groups");


Template.groups.created = function () {
 /* 
  this.autorun(function () {
    this.subscription = Meteor.subscribe('subscription_here');
  }.bind(this));
  */
};

Template.groups.rendered = function () {
  /*
  this.autorun(function () {
    if (!this.subscription.ready()) {
      IonLoading.show();
    } else {
      IonLoading.hide();
    }
  }.bind(this));
*/
};

Template.groups.helpers({

  groups: function () {
    return Groups.find();
  }
});

Template.group.helpers({
  isMember: function () {
    return this.members.indexOf(Meteor.userId()) > -1; //not necessary bs of backend security?
  },

  isAdmin: function () {
    return this.admin === Meteor.userId();
  }
});

Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
