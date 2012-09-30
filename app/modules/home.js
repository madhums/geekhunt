define([
  "app",
  "backbone",
  "modules/user"
],
function (app, backbone, User) {

  var Home = app.module();

  Home.Views.Landing = Backbone.View.extend({
    template: 'home/landing',

    events: {
      'submit form': 'search'
    },

    search: function (e) {
      e.preventDefault();

      // Set up the users.
      var users = new User.Collection({ search: this.$(':text').val() });
      var results = new User.Views.List({ collection: users });

      app.layout.setViews({
        '.results': results
      });

      users.fetch();
      app.layout.render();
    },

    afterRender: function () {
      this.$(':text').focus();
    }
  });

  return Home;

});
