RBOA.Views.LogIn = RBOA.Modal.extend({
  template: JST["root/log_in"],

  events: {
    "click #log-in-button": "logIn"
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
});
