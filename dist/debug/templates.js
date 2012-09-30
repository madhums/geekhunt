this['JST'] = this['JST'] || {};

this['JST']['app/templates/home/landing.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="search">\n  <form class="form-search">\n    <div class="input-append">\n      <input type="text" class="input-xlarge search-query" placeholder="Location or Language or username">\n      <button type="submit" class="btn">Search</button>\n    </div>\n  </form>\n</div>\n\n<div class="results">\n  Just type in the name of the location or language or the username.\n</div>\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/layouts/main.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="home"></div>\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/users/list.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<table class="table">\n  <thead>\n    <th>Username</th>\n    <th>Name</th>\n    <th>Repositories</th>\n    <th>Followers</th>\n    <th>Language</th>\n    <th>Location</th>\n  </thead>\n  <tbody></tbody>\n</table>\n');}return __p.join('');
}(data, _)};

this['JST']['app/templates/users/user.html'] = function(data) { return function (obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<td>\n  <a href="http://github.com/', _.escape(model.username) ,'" target="_blank">\n    ', _.escape(model.username) ,'\n  </a>\n</td>\n<td>', _.escape(model.name) ,'</td>\n<td>', _.escape(model.repos) ,'</td>\n<td>', _.escape(model.followers) ,'</td>\n<td>', _.escape(model.language) ,'</td>\n<td>', _.escape(model.location) ,'</td>\n');}return __p.join('');
}(data, _)};