(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  var bandNameNew = (function(){
    var requestParam = window.location.search.split("?")[1];
    return decodeURIComponent(requestParam.split("=")[1]);
  })();

  /*eslint-disable no-console*/
  function BandFormHandler(selector) {
    //code will go here
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector: " + selector);
    }
  }

  BandFormHandler.prototype.addSubmitHandler = function(fn) {
    /*ESLint error: unexpected console statment*/
    console.log("Setting submit handler for Event form");

    this.$formElement.on("submit", function(event) {
      event.preventDefault();

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value); /*ESLint error: unexpected console statment*/
      });
      console.log(data); /*ESLint error: unexpected console statment*/
      fn(data);
      this.reset();
      this.elements[0].focus();
    });

  };

  BandFormHandler.prototype.addClickHandler = function(fn){
    console.log("setting click handler for redirect to review page");

    this.$formElement.on("click", function(event){
      //redirects to the review page for the band
      window.location.href="review.html?bandName=" + bandNameNew;
    });

  };

  // BandFormHandler.prototype.addInputHandler = function(fn) {
  //   console.log("Setting input handler for form");
  //   this.$formElement.on("input", "[name=\"emailAddress\"]", function(event) {
  //     //event handler code will go here
  //     var emailAddress = event.target.value;
  //     //console.log(fn(emailAddress));
  //     //triggering the validation check
  //     var message = "";
  //
  //     if (fn(emailAddress)) { //if email is valid
  //       event.target.setCustomValidity(""); //setCustomValidity("") sets field as valid
  //     } else { //if email is not valid, then return invalid error message
  //       message = emailAddress + " is not an authorized email address!";
  //       event.target.setCustomValidity(message);
  //     }
  //   });
  // };

  App.BandFormHandler = BandFormHandler;
  window.App = App;


})(window);
