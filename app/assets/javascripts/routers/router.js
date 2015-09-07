RBOA.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$rootContent = this.$rootEl.find("#content");
    this.$navBar = this.$rootEl.find("#navbar");
    this.$modalContent = this.$rootEl.find("#modal");

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
    var user = new RBOA.Models.User();
    var signUpView = new RBOA.Views.SignUp({ model: user });
    this.openModal(signUpView);
  },

  openModal: function (newModal) {
    if (this.currentModal) {
      this.currentModal.remove();
    } else {
      // save previous path for modal close
      this.path = document.referrer;
    }

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
    this.currentView && this.currentView.remove();
    this.currentView = newView;
    this.$rootContent.html(newView.$el);
    newView.render();

    return newView;
  }
});
