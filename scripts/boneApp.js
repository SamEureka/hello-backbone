
// *** Model *** //

var HelloStatement = Backbone.Model.extend({
	defaults: {
		statement: 'Hello World'
	}
});
var helloStatement = new HelloStatement();
helloStatement.get('statement');
// *** View *** //

var HelloView = Backbone.View.extend({
  tagName: 'div',
  className: 'big-words',
  template: _.template('<h1> <%= statement %></h1>'),

  render: function(){
    this.$el.html(this.template(statement));
  }
});

var helloView = new HelloView({model: helloStatement });
console.log(helloView.el);