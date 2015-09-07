RBOA.Views.SignUp = Backbone.View.extend({
  initialize: function () {
    $( document ).on("keydown.modal", this.handleKeyPress.bind(this))
  },

  className: "modal-container",

  template: JST["root/sign_up"],

  events: {
    "click #sign-up-button": "signUp"
  },

  handleKeyPress: function (event) {
    if (event.which == 27) {
      this.router.closeModal();
    }
  },

  signUp: function () {
    var userData = this.$("#sign-up-form").serializeJSON();
    this.model.save(userData, {
      success: function () {
        debugger;
      },

      error: function () {
        debugger;
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
