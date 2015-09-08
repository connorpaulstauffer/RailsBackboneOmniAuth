RBOA.Views.SignUp = RBOA.Modal.extend({
  template: JST["root/sign_up"],

  events: {
    "click #sign-up-button": "signUp"
  },

  signUp: function (event) {
    event.preventDefault();

    var userData = this.$("#sign-up-form").serializeJSON();
    $.ajax({
      url: "/users",
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
  }
});
