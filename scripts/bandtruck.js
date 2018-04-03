(function(window){
  "use strict"
  var App = window.App || "";

  function infoTruck(truckId, db){
    this.truckId = truckId;
    this.db = db;
  }

  //add event to database
  infoTruck.prototype.addEvent = function(event){

    console.log("Adding new event to db");

    this.db.add(event.Band, event);
  }
//prints for check of data
  infoTruck.prototype.printOrders = function() {
    var eventIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + "has these events: "); /*ESLint error: unexpected console statment*/
    eventIdArray.forEach(function(id) {
      console.log(this.db.get(id)); /*ESLint error: unexpected console statment*/
    }.bind(this));
  };

  App.infoTruck = infoTruck;
  window.App = App;

})(window);
