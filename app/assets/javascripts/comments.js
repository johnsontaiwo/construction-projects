

$(function() {
  
  $(document).on("submit", "#new_comment", function (e) {
  e.preventDefault()
  e.stopImmediatePropagation()
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
          //debugger
        $("div.project").empty()
        $("div.comment").html(response)
        $("header").empty()
        $("div.comment_form").empty()
           
      }
    })
    
    })

    $(document).on("click", "a.new_ajax_comment", function(e) {
    e.preventDefault()
    e.stopImmediatePropagation()
    $.get($(e.target).attr('href'), function(resp){
        
        $("div.comment_form").empty()
        
      $("div.comment_form").append(resp).val()
      $("header").empty()
    })
     
  })
   }  
)
  

  