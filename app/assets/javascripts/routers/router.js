RBOA.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$rootContent = this.$rootEl.find("#content");
    this.$navBar = this.$rootEl.find("#navbar");
    
    this.checkCurrentUser();
    this.setupNavbar();
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
  }
});
