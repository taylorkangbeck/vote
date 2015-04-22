/*
Template._addGroup.events({
  "submit .new-group": function (event) {

    var text = event.target.text.value;

    Groups.insert({
      name: text
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
  }
});
*/
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