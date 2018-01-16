// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {
  $("a.project_list").on("click", function(e) {
     
     $.get("/projects", function(resp) {
      $("body").append(resp).val()
        //resp.data.forEach(function(data))
      })
     e.preventDefault()
    })
    
})