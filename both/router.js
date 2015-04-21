Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('groups', {
    path: '/'
  });
/*
  this.route('contacts.show', {
    path: '/contacts/:_id'
  });
*/
});
