(function(window) {
  "use strict";

  var FORM_SELECTOR = "[data-review=\"event-form\"]";
  var EVENT_INFO_SELECTOR = "[data-event-list = \"eventList\"]";

  var SERVER_URL = "http://localhost:2403/band";

  var App = window.App || {};
  var $ = window.jQuery;

  var BandFormHandler = App.BandFormHandler;
  var infoTruck = App.infoTruck;
  var EventList = App.EventList;
  var BandDataStore = App.BandDataStore;

  //constructor
  function FormAppear(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);
    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  //function to add form to the modal box
  FormAppear.prototype.addForm = function(Info) {
    var form = new eForm(Info);

    this.$element.append(form.$element);

    var ds = new BandDataStore(SERVER_URL);

    var handle = new BandFormHandler(FORM_SELECTOR);
    var eList = new EventList(EVENT_INFO_SELECTOR);

    var truck = new infoTruck("ncc-1701", ds);

    window.truck = truck;
  //add submit handler
    handle.addSubmitHandler(function(data){
      truck.addEvent.call(truck, data);
      eList.addEvent.call(eList, data);


    });

  };

  function eForm(Info) {
    //wrap in the div to put the modal form together
    var $div = $("<div></div>", {
      "id": "affirmMessage",
      "class": "modal"
    });

    var $head = $("<header></header>", {
      "id" : "classHead"
    });

    //close line for modal box
    var $a = $("<a></a>", {
      "href": "#",
      "rel": "modal:close"
    });

    var $form = $("<form></form>",{
      "data-review" : "event-form"
    });

    var $bandInput = $("<input></input>",{
      "type" : "hidden",
      "id" : "event-band",
      "name" : "BandName",
      "value" : Info
    });

    var $locationlbl = $("<label></label>", {
      "for" : "event-location"
    });

    var $locationInput = $("<input></input>",{
      "type" : "text",
      "id" : "event-location",
      "name" : "EventLocation"
    });

    var $datelbl = $("<label></label>", {
      "for" : "event-date"
    });

    var $dateInput = $("<input></input>",{
      "type" : "date",
      "id" : "event-date",
      "name" : "EventDate"
    });

    var $submitButton = $("<button></button>",{
      "type" : "submit",
      "id": "eventsubmit",
      "class" : "btn btn-default"
    });

    var $br = $("<br>");

    var sub = "submit";
    var eLo = "Event Location";
    var eD = "Event Date";
    var he = "New Event";

//put tree form together
    $submitButton.append(sub);
    $head.append(he);
    $locationlbl.append(eLo);
    $datelbl.append(eD);

    $form.append($bandInput);

    $form.append($locationlbl);
    $form.append($br);
    $form.append($locationInput);
    $form.append($br);
    $form.append($datelbl);
    $form.append($br);
    $form.append($dateInput);
    $form.append($br);
    $form.append($submitButton);

    $div.append($head);
    $div.append($form);
    $div.append($a);


    this.$element = $div;
  }


  App.FormAppear = FormAppear;
  window.App = App;
})(window);
