Template._addIssue.events({
  submit: function (event) {

    var title_text = event.target.title.value;
    var desc_text = event.target.desc.value;

    Meteor.call("addIssue", title_text, desc_text, this.id);

    // Clear form
    event.target.title.value = "";
    event.target.desc.value = "";

    IonModal.close();

    // Prevent default form submit
    return false;
  }
});
