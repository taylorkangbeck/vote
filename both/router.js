Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('groups', {
    path: '/'
  });

  this.route('login', {
  	path:'/login'
  });
/*
  this.route('contacts.show', {
    path: '/contacts/:_id'
  });
*/
});
