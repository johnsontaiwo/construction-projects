// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(function() {
  $("a.contractor_list").on("click", function(e) {
    //e.preventDafault();
    //console.log(e).html();
    alert("Ready")
    e.preventDafault();
  })
})