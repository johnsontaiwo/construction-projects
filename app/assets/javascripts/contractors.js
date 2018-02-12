



$(function() {
  
 $(document).on("submit", "#new_contractor", function(e) {
   console.log(e)
    e.preventDefault()
  })


  $("a.contractor_list").on("click", function(e) {
    $("div.projects_contractors ol").empty()
    $.get("/contractors", function(resp) {
      $("div.projects_contractors ol").append(resp).val()
        //resp.data.forEach(function(data))
      })
    e.preventDefault();
  })


 
  $(document).on("click", "a.contractor_show_list", function(e) {
    console.log(e)
    e.preventDefault();
  })

  
  $("a.ajax_new_contractor").on("click", function(e) {
    $("body").empty()
    $.get('/contractors/new', function(resp) {
      $("body").append(resp).val()
    })
    e.preventDefault()
  })
  
})
  
  
