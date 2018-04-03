(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    this.serverUrl = url;
  }

 RemoteDataStore.prototype.add = function(key, val) {
    // Code will go here
    $.post(this.serverUrl, val, function(serverResponse) {
      console.log(serverResponse);
    });
  };
  RemoteDataStore.prototype.getAll = function() {
    // Code will go here
    $.get(this.serverUrl, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  RemoteDataStore.prototype.get = function(key, cb) {
    $.get(this.serverUrl + '/' + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
  };
  RemoteDataStore.prototype.getByKey = function(key, cb) {
    $.get(this.serverUrl + "?bandName=" + key, function(serverResponse) {
      console.log(serverResponse);
      cb(serverResponse);
    });
};
  App.RemoteDataStore = RemoteDataStore;
window.App = App;
})(window);
