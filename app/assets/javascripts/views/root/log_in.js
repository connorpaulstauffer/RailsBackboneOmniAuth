RBOA.Views.LogIn = Backbone.View.extend({
  initialize: function () {
    $( document ).on("keydown.modal", this.handleKeyPress.bind(this))
  },

  className: "modal-container",

  template: JST["root/log_in"],

  events: {
    "click #log-in-button": "logIn"
  },

  handleKeyPress: function (event) {
    if (event.which == 27) {
      this.router.closeModal();
    }
  },

  logIn: function (event) {
    event.preventDefault();

    var userData = this.$("#log-in-form").serializeJSON();
    $.ajax({
      url: "/users/sign_in",
      type: "POST",
      data: userData,
      dataType: "json",
      success: function (model, response) {
        RBOA.currentUser = new RBOA.Models.User(model)
        this.router.setCurrentUser();
        this.router.closeModal();
      }.bind(this),

      error: function () {
        debugger
      }
    })
  },

  render: function () {
    var content = this.template({ errors: this.errors });
    this.$el.html(content);

    return this;
  },

  remove: function () {
    $( document ).off("keydown.modal");
    Backbone.View.prototype.remove.call(this);
  }
});
