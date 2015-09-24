var appView = Backbone.View.extend({
  el: '.hello',
  
  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.html("<div class='big-words'>Hello World</div>");
  }
});

var appView = new appView();