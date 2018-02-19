



$(function() {
  
 $(document).on("submit", "#new_contractor", function(e) {
   //alert("Hey")
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        //debugger
        $("div.projects_contractors").append(response).val()
        $("div.new-ajax-contractor").empty()
        $("header").empty()
      }
    })

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
    //e.preventDefault();
  })

  
  $("a.ajax_new_contractor").on("click", function(e) {
    $("div.new-ajax-contractor").empty()
    $.get('/contractors/new', function(resp) {
      $("div.new-ajax-contractor").append(resp).val()
    })
    e.preventDefault()
  })
  
})
  
  
