(function(window){
  "use strict"

  var App = window.App;
//selectors for the modules
  var EVENT_INFO_SELECTOR = "[data-event-list = \"eventList\"]";
  var BAND_INFO_SELECTOR = "[data-band-descript = \"bandDescript\"]";
  var BAND_NAME_SELECTOR = "[data-band-info = \"bandInfo\"]";



  var EVENT_FORM_SELECTOR = "[band-event = \"event\"]";

  var SERVER_URL = "http://localhost:2403/band";

  var USER_URL = "http://localhost:2403/user";



//creates and adds modules to page
  var BandDataStore = App.BandDataStore;

  var EventList = App.EventList;

  var BandInfor = App.BandInfor;

  var FormAppear = App.FormAppear;



//creation of objects to be used
  var ds = new BandDataStore(SERVER_URL);

  var eList = new EventList(EVENT_INFO_SELECTOR);

  var bandDescript = new BandInfor(BAND_INFO_SELECTOR);

  var bandName = new BandInfor(BAND_NAME_SELECTOR);

  var newEvent = new FormAppear(EVENT_FORM_SELECTOR);


  var params = window.location.search.split("?")[1];
  var bandNameNew = decodeURIComponent(params.split("=")[1]);

  //var handle = new BandFormHandler(BAND_REVIEW_BUTTON_SELECTOR);
/*  var bandNameNew = (function(){
    var requestParam = window.location.search.split("?")[1];
    return decodeURIComponent(requestParam.split("=")[1]);
  })();*/

  //set name of band (set // needs to be changed
  ds.get(bandNameNew, function(data){
    bandName.setName(data[0]);
  });

  //add descript of set band
  ds.get(bandNameNew, function(data){
    bandDescript.getInfo(data[0]);
  });

//gets the current list of the current band's event
  ds.get(bandNameNew, function(data){
    data.forEach(function(event){
      eList.addEvent(event);

        var BAND_REVIEW_BUTTON_SELECTOR = "[class=\"review\"]";

        var BandFormHandler = App.BandFormHandler;

        var buttonReview = new BandFormHandler(BAND_REVIEW_BUTTON_SELECTOR);

      buttonReview.addClickHandler(function(data){

      });

  });
});

//on neweventbutton click, bring up modal to add a new event for this band
$("#eventadd").on("click", function(){
    //call modal for form
    newEvent.addForm.call(newEvent, bandNameNew);

    $("#affirmMessage").modal();
  });




})(window);
