
Template._addGroup.events({
  submit: function (event) {

    var text = event.target.name.value;

    Meteor.call("addGroup", text);

    // Clear form
    event.target.name.value = "";

    IonModal.close();

    // Prevent default form submit
    return false;
  }
});

Template._addGroup.helpers({
  defaultValues: function() {
    return {
      createdAt: new Date(),
      admin: Meteor.userId(),
      members: [Meteor.userId()]
    }
  }
});
