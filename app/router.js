define([
  // Application.
  "app",

  // modules
  "modules/user",
  "modules/home"
],

function(app, User, Home, Search) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "search/:term": "search"
    },

    index: function() {
      this.reset();

      // Use the main layout.
      app.useLayout("main").render();
    },

    // Shortcut for building a url.
    go: function() {
      return this.navigate(_.toArray(arguments).join("/"), true);
    },

    reset: function() {
      // Reset collections to initial state.
      if (this.users && this.users.length) {
        this.users.reset();
      }
    },

    initialize: function() {
      // Use main layout and set Views.
      app.useLayout("main");

      app.layout.setViews({
        '.home': new Home.Views.Landing()
      });
    }
  });

  return Router;

});
