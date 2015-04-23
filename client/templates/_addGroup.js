
Template._addGroup.events({
  submit: function (event) {

    var text = event.target.name.value;

    Meteor.call("addGroup", text);

    // Clear form
    event.target.name.value = "";

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

/*
AutoForm.hooks({
  'edit-form': {
    onSuccess: function (operation, result, template) {
      alert('Post saved successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});
*/