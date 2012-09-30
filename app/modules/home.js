define([
  "app",
  "backbone",
  "modules/user"
],
function (app, backbone, User) {

  var Home = app.module();

  Home.Views.Filter = Backbone.View.extend({
    template: 'users/filter',

    events: {
      'click input': 'filter'
    },

    filter: function (e) {
      var filtered = this.collection.filter(function (model) {
        var attr = model.get($(e.target).data('filter'));
        var value = $(e.target).val();
        return  attr > value;
      });
      this.collection.reset(filtered);
    },

    tagName: 'span'
  });

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
        '.results': results,
        '.filter': new Home.Views.Filter({ collection: users })
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
