RBOA.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$rootContent = this.$rootEl.find("#content");
    this.$modalContent = this.$rootEl.find("#modal");

    this.checkCurrentUser();
    this.setupNavbar();
  },

  routes: {
    "sign-up": "signUp",
    "log-in": "logIn"
  },

  checkCurrentUser: function () {
    var currentUserId = this.$rootEl.data("current-user");
    if (currentUserId == "") {
      RBOA.currentUser = null;
    } else {
      RBOA.currentUser = new RBOA.Models.User({
        id: this.$rootEl.data("current-user")
      });
      RBOA.currentUser.fetch();
    }
  },

  setupNavbar: function () {
    this.navBar = new RBOA.Views.NavBar();
    this.$rootEl.find("#navbar").html(this.navBar.$el);
    this.navBar.render();
  },

  signUp: function () {
    var signUpView = new RBOA.Views.SignUp();
    this.openModal(signUpView);
  },

  logIn: function () {
    var logInView = new RBOA.Views.LogIn();
    this.openModal(logInView);
  },

  setCurrentUser: function () {
    this.navBar.render();
  },

  openModal: function (newModal) {
    this.currentModal && this.currentModal.remove();

    newModal.router = this;
    this.currentModal = newModal;
    this.$modalContent.html(newModal.$el);
    this.currentModal.render();
  },

  closeModal: function () {
    this.currentModal.remove();
    this.currentModal = null;
    Backbone.history.navigate(this.path);
  },

  swap: function (newView) {
    this.path = window.location.pathname;
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootContent.html(newView.$el);
    newView.render();

    return newView;
  }
});
