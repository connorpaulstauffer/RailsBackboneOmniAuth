RBOA.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$rootContent = this.$rootEl.find("#content");
    this.$navBar = this.$rootEl.find("#navbar");

    this.checkCurrentUser();
    this.setupNavbar();
  },

  routes: {
    "sign-up": "signUp"
  },

  checkCurrentUser: function () {
    var currentUserId = this.$rootEl.data("current-user");
    if (currentUserId == "") {
      RBOA.currentUser = null;
    } else {
      // RBOA.currentUser = new RBOA.Models.User({
      //   id: this.$rootEl.data("current-user")
      // });
      // RBOA.currentUser.fetch();
    }
  },

  setupNavbar: function () {
    var navBar = new RBOA.Views.NavBar();
    this.$navBar.html(navBar.$el);
    navBar.render();
  },

  signUp: function () {
    var signUpView = new RBOA.Views.SignUp();
    this.openModal(signUpView);
  },

  openModal: function (newModal) {
    this.currentModal && this.currentModal.remove();
    this.currentModal = newModal;
    this.$rootEl.append(newModal.$el);
    this.currentModal.render();
  },

  swap: function (newView) {
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootContent.html(newView.$el);
    newView.render();

    return newView;
  }
});
