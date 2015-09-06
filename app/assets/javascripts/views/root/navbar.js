RBOA.Views.NavBar = Backbone.View.extend({
  template: JST["root/navbar"],

  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
})
