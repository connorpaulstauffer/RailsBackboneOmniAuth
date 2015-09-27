RBOA.Views.NavBar = Backbone.View.extend({
  template: JST["root/navbar"],

  events: {
    "click #sign-out": "signOut"
  },

  signOut: function (event) {
    event.preventDefault();

    $.ajax({
      url: "/users/sign_out",
      method: "DELETE",
      dataType: "json",

      success: function () {
        RBOA.currentUser = null;
        this.render();
        Backbone.history.navigate(this.path);
      }.bind(this),

      error: function () {
        debugger;
      }
    });
  },

  render: function () {
    var content = this.template({
      user: RBOA.currentUser
    });
    this.$el.html(content);

    return this;
  }
})
