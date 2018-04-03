(function(window) {
  "use strict";
  var App = window.App || {};

  function Band(db) {
    this.db = db;
  }



  Band.prototype.getBandInfo = function(bandName,cb){
    this.db.getByKey(bandName,function(serverResponse){
      if(serverResponse.length != 0){
        cb(serverResponse[0]);
      }
    });
  }


  Band.prototype.displayComments = function(bandName,cb) {

    this.db.getByKey(bandName,function(serverResponse){
      if(serverResponse.length != 0){
        console.log("The list of comments is :" + serverResponse);
        cb(serverResponse);
      }
    });
  };

  App.Band = Band;
  window.App = App;

})(window);
