Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('groups', {
    path: '/'
  });

  this.route('login', {
  	path: '/login'
  });

  this.route('groupView', {
  	path: '/groups/:_id',
  	data: function () {
  		return {
  			group: Groups.findOne({_id: this.params._id })
  		};
  	}
  });
});
