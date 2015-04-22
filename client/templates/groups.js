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
/*
  groups: [
  	{ name: "Group 1" },
  	{ name: "Group 2" },
  	{ name: "Group 3" },
  	{ name: "Group 4" },
  	{ name: "Group 5" }
  ]
*/
  groups: function () {
    return Groups.find();
  }
});
