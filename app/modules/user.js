define([
  'app',
  'backbone',
  'plugins/jquery.tablesorter'
],

function (app, Backbone) {

  var User = app.module();

  User.Model = Backbone.Model.extend({
    idAttribute: 'username'
  });

  User.Collection = Backbone.Collection.extend({
    model: User.Model,

    url: function () {
      return "https://api.github.com/legacy/user/search/"+this.search;
    },

    parse: function (response) {
      return response.users;
    },

    initialize: function (options) {
      if (options) {
        this.search = options.search;
      }
    }
  });

  User.Views.User = Backbone.View.extend({
    template: 'users/user',

    tagName: 'tr',

    serialize: function () {
      return { model: this.model.attributes };
    }
  });

  User.Views.List = Backbone.View.extend({
    template: "users/list",

    serialize: function() {
      return { collection: this.collection };
    },

    beforeRender: function() {
      this.collection.each(function(user) {
        this.insertView("tbody", new User.Views.User({
          model: user
        }));
      }, this);
    },

    afterRender: function () {
      this.$('#results').tablesorter({});
      this.$('th').click(function (e) {
        if ($(this).hasClass('headerSortUp')) {
          $(this).html($(this).data('text')+' &nbsp;<i class="icon-chevron-down"></i>');
        } else if ($(this).hasClass('headerSortDown')) {
          $(this).html($(this).data('text')+' &nbsp;<i class="icon-chevron-up"></i>');
        }
      });
    },

    initialize: function(options) {
      this.collection.on("reset", this.render, this);

      // app.useLayout("main").render();
      this.collection.on("fetch", function() {
        // this.$el.html("<img src='/assets/img/spinner.gif'>");
      }, this);
    }
  });

  return User;

});
