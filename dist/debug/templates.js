this['JST'] = this['JST'] || {};

this['JST']['app/templates/home/landing.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="search">\n  <form class="form-search form-inline">\n    <div class="input-append">\n      <input type="text" class="input-xlarge search-query" placeholder="Location or Language or username">\n      <button type="submit" class="btn">Search</button>\n    </div>\n    <span class="filter"></span>\n  </form>\n</div>\n\n<div class="results">\n  Just type in the name of the location or language or the username.\n</div>\n';
}
return __p;
};

this['JST']['app/templates/layouts/main.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="home"></div>\n';
}
return __p;
};

this['JST']['app/templates/users/filter.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='&nbsp;&nbsp;&nbsp;\n<label class="checkbox inline">\n  <input type="checkbox" data-filter="repos" value="10"> more than 10 repos\n</label>\n\n&nbsp;&nbsp;&nbsp;\n<label class="checkbox inline">\n  <input type="checkbox" data-filter="followers" value="20"> more than 20 followers\n</label>\n';
}
return __p;
};

this['JST']['app/templates/users/list.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<table class="table tablesorter" id="results">\n  <thead>\n    <tr>\n      <th data-text="Username">Username</th>\n      <th data-text="Name">Name</th>\n      <th data-text="Repositories">Repositories</th>\n      <th data-text="Followers">Followers</th>\n      <th data-text="Language">Language</th>\n      <th data-text="Location">Location</th>\n    </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n';
}
return __p;
};

this['JST']['app/templates/users/user.html'] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<td>\n  <a href="http://github.com/'+
( _.escape(model.username) )+
'" target="_blank">\n    '+
( _.escape(model.username) )+
'\n  </a>\n</td>\n<td>'+
( _.escape(model.name) )+
'</td>\n<td>'+
( _.escape(model.repos) )+
'</td>\n<td>'+
( _.escape(model.followers) )+
'</td>\n<td>'+
( _.escape(model.language) )+
'</td>\n<td>'+
( _.escape(model.location) )+
'</td>\n';
}
return __p;
};