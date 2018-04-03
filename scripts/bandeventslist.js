(function(window){
  "use strict"

  var App = window.App || {};
  var $ = window.jQuery;

  function EventList(selector){
      if(!selector){
        throw new Error("No Selector Provided");
      }

      this.$element = $(selector);
      if(this.$element.length === 0){
        throw new Error("Could not find element with selector: " + selector);
      }
  }

//add event to table
EventList.prototype.addEvent = function(nEvent) {
  //remove any existing rows that match the email address

  //create a  new instance  of a row, using the coffee order information
  var rowElement = new Event(nEvent);

  //Add the new row instance's $element property to the checklist
  this.$element.append(rowElement.$element);
};

//remove rowElement
// CheckList.prototype.removeRow = function(date) {
//   this.$element
//     .find("[value=\"" + email + "\"]")
//     .closest("[data-coffee-order=\"checkbox\"]")
//     .remove();
// };

//comsatructor for new event for the particular band
function Event(eventInfo) {
  var $tableRow = $("<tr></tr>");

  var eDate = "<td>" + eventInfo.EventDate + "</td>";

  var eLocation = "<td>" + eventInfo.EventLocation + "</td>";

  //var eDetails = "<td><button type=\"button\">More Info</button><td>";

  var eReview = "<td><button class=\"review\" type=\"button\">Review</button><td>";


  $tableRow.append(eLocation);
  $tableRow.append(eDate);
  //$tableRow.append(eDetails);
  $tableRow.append(eReview);

  this.$element = $tableRow;
}

App.EventList = EventList;
window.App = App;


})(window);
