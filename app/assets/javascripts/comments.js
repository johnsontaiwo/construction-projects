
class Comments {
  constructor(project){
    this.id = ++commentId
    this.content = attributes.content
    if (project){
      this.projectId = project.id
    }
  }
}  


$(function() {
  
  $(document).on("submit", "#new_comment", function (e) {
  e.preventDefault()
  e.stopImmediatePropagation()
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
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
  

