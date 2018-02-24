

$(function() {
  
  $(document).on("submit", "#new_comment", function (e) {
  
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
         // debugger
        $("div.project").empty()
        $("div.comment").html(response)
        $("header").empty()
        $("div.comment_form").empty()
           
      }
    })
    
       e.preventDefault()
    })

    $(document).on("click", "a.new_ajax_comment", function(e) {
    $.get($(e.target).attr('href'), function(resp){
        //debugger
        $("div.comment_form").empty()
        
      $("div.comment_form").append(resp)
      $("header").empty()
    })
     // alert("New")
    e.preventDefault()
  })
   }  
)
  

  