$ (function() {
  
  $("a.project_list").on("click", function(e) {
  
     $("div.projects ol").empty()
     $.get("/projects", function(resp) {
          $("div.projects ol").append(resp).val()
          $("div.project").empty()
       })
     
        e.preventDefault()
      })
    


  $("a.ajax_new_project").on("click", function(e){
    $("div.new-ajax-project").empty()
    $.get("/projects/new", function(resp){
      $("div.new-ajax-project").append(resp).val()
      
    })
    
    e.preventDefault()
  })




  $(document).on("submit", "#new_project", function(e){
    //alert("Hey")
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        //debugger
        $("div.projects ol").append(response).val()
        $("div.new-ajax-project").empty()
        $("header").empty()
        $("a.new_ajax_comment").hide()
      }
    })
    e.preventDefault()
  })
   
   
  $(document).on("click", "a.project_show_list", function(e){
   $.get( $(e.target).attr('href'), function(resp) {
    //console.log(resp)
   $("div.project").append(resp).val()
   $("div.projects ol").empty()
   $("header").empty()
   $("a.ajax_new_project").hide()
  })
    e.preventDefault();
  })

  // $(document).on("click", "a.project_edit", function(e) {
   
  //  $.get( $(e.target).attr('href'), function(resp) {
  
      
  //    $("body").append(resp).val()
      
  // //  $("header").empty()
  // //  $("a.ajax_new_project").hide()
  //   })
  //   e.preventDefault();
  //  })



  // $(document).on("submit", ".edit_project", function(e){
  //   //alert("Hey")
  //   $.ajax({
  //     type: 'PATCH',
  //     url: this.action,
  //     data: $(this).serialize(),
  //     success: function(response) {
        
  //       $("div.projects ol").append(response).val()
  //       $("div.new-ajax-project").empty()
  //       $("header").empty()
  //     }
  //   })
  //   e.preventDefault()
  // })


})





//         resp.forEach(function(project) {
      //    $("div.projects_contractors ol").append( "<li>" + project.title + "</li>" ).val()
      //    //$("div.projects_contractors ol").append(resp).val()
      //  })
       
        
     // }) 
     
        
     //$("div.projects_contractors ol").html(output)
     //var data = resp.data.forEach(function(p) {$("div.projects_contractors ol").append(resp).val()})
      // resp.forEach(function(project) {
      //   $("div.projects_contractors ol").append("<li>" + project.title + "</li>").val()
       
     //$("div.projects_contractors ol").append(output)
         //$("div.projects_contractors ol").append("<li>" + project.title + "</li>").val()
// 
//     function projectShow() {
//     $("a.project_show").on("click", function(e) {
//         alert("Sure");
//         e.preventDefault();
//       })
//      // $.get(`/projects/${projectId}`, function(resp) {
//      //  $("body").append(resp).val()}
//      // ) 
//       //var respArray = resp.toArray()
//      //$("body").append(resp).val()
//        //alert("Sure")
        

// }

// // $(function() {
// // function showProject(id) {
// //   projectId = id
// //   $("a.project_show").on("click", function(e) {
// //     alert("sure")
// //     e.preventDefault()
// //   })
// // }
// // }) 
// // $("body").append(project).val()