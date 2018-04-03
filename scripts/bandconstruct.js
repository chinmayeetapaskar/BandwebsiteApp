(function(window){
  "use strict"

  var App = window.App || {};
  var $ = window.jQuery;

  function BandInfor(selector){
      if(!selector){
        throw new Error("No Selector Provided");
      }

      this.$element = $(selector);
      if(this.$element.length === 0){
        throw new Error("Could not find element with selector: " + selector);
      }
  }

//get and add band info to page
  BandInfor.prototype.getInfo = function(nEvent) {

  //create a new instance of a row, using the coffee order information
  var bInfo = new Descript(nEvent);

  //Add the new row instance's $element property to the checklist
  this.$element.append(bInfo.$element);
};
//sets the name of the band for header
BandInfor.prototype.setName = function(nEvent){

  this.$element.append(nEvent.BandName);

};

//constructor for descripttion for the particular band
function Descript(Info) {

  var $para = $("<p></p>");

  var About = Info.BandInfo;

  $para.append(About);

  this.$element = $para;
}

App.BandInfor = BandInfor;
window.App = App;


})(window);
