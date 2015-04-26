Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('groups', {
    path: '/'
  });

  this.route('groupView', {
  	path: '/groups/:_id',
  	data: function () {
  		return {
  			group: Groups.findOne({_id: this.params._id })
  		};
  	}
  });

    this.route('groupViewReturn', {
  	path: '/groupView/:_id',
  	data: function () {
  		return {
  			group: Groups.findOne({_id: this.params.group })
  		};
  	}
  });
    this.route('issueView'
    , {
  	path: '/issueView/:_id',
  	data: function () {
  		return {
  			issue: Issues.findOne({_id: this.params._id })
  		};
  	}
  });
});
