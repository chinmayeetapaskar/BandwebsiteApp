(function(window) {
  "use strict";

  var App = window.App || {};
  var $ = window.jQuery;



  function Comments(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$element = $(selector);

    if (this.$element.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  Comments.prototype.addRow = function(bandComment) {
    console.log("Calling CheckList.addRow()");
    //this.removeRow(coffeeOrder.emailAddress);
    var rowElement = new Row(bandComment);
    this.$element.append(rowElement.$element);
  };



  function Row(bandComment) {
    var $div = $("<div></div>", {
      "data-band-review": "name",
      "class": "checkbox"
    });

    var $label = $("<label></label>");
  //  var rating = bandComment.Rating + "&#9734";


    var description = "<p><b>" + bandComment.Name + ":<br/><b>";
    description += "<label>Rating :<span>" + bandComment.Rating +"&#9734" + "</span></label>";
    description += "<b>Description : </b> <span>" +bandComment.Description +"</span>";


    $label.append(description);
    $div.append($label);

    this.$element = $div;
  }

  App.Comments = Comments;
  window.App = App;
})(window);
