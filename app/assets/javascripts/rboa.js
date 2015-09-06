window.RBOA = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    router = new RBOA.Routers.Router({ $rootEl: $('#root')})
    Backbone.history.start();
  }
};

$(RBOA.initialize);
