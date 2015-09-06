RBOA.Views.SignUp = Backbone.View.extend({
  className: "modal-container",

  template: JST["root/sign_up"],

  render: function () {
    var content = this.template({ errors: this.errors });
    this.$el.html(content);

    return this;
  }
});
