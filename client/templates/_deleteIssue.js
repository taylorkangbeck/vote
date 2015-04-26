Template._deleteIssue.events({
  "click .item": function () {
    Meteor.call("deleteIssue", this.id);
    IonPopover.hide();
    history.back();

    //will throw harmless error when loading issue list, not a priority to fix
  }
});
