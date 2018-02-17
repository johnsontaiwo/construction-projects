// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// $ (function () {
//  commentsList()
//  //projectShow()
// })

$(function() {
  $(document).on("submit", "#new_comment", function (e) {
    // alert("e")

    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        //$("div.projects_comments ol").empty()
        //debugger
        //$("div.comments li").append(response)
         
        $("header").empty()
      }
    })
    
       e.preventDefault()
    })

    $("a.new_ajax_comment").on("click", function(e) {
    //$("div.comment_form").empty()
    //$("a.contractor_list").empty()
     //e.preventDefault()
    $.get("/comments/new", function(resp){
      //debugger
        $("div.comment_form").empty()
        
      $("div.comment_form").append(resp)
      $("header").empty()
    })
     // alert("New")
    e.preventDefault()
  })

  // $("a.new-comment").on("click", function(e) {
  //   //$("div.comment_form").empty()
  //   $("a.contractor_list").empty()
  //   $.get("/comments/new", function(resp){
  //     //debugger
  //       $("div.comment_form").empty()
        
  //     $("div.comment_form").append(resp)
    
  //   })
  //    // alert("New")
  //   e.preventDefault()
  // })

  // $("a.project_list").on("click", function(e) {
  //   //var output = ''
  //    $("div.projects_contractors ol").empty()
  //    $.get("/projects", function(resp) {
  //         $("div.projects_contractors ol").append(resp).val()
  //     // resp.forEach(function(project) {
  //     //    $("div.projects_contractors ol").append( "<li>" + project.title + "</li>" ).val()
  //     //    //$("div.projects_contractors ol").append(resp).val()
  //     //  })
       
        
  //    // }) 
     
        
  //    //$("div.projects_contractors ol").html(output)
  //    //var data = resp.data.forEach(function(p) {$("div.projects_contractors ol").append(resp).val()})
  //     // resp.forEach(function(project) {
  //     //   $("div.projects_contractors ol").append("<li>" + project.title + "</li>").val()
  //      })
  //    //$("div.projects_contractors ol").append(output)
  //        //$("div.projects_contractors ol").append("<li>" + project.title + "</li>").val()
  //       e.preventDefault()
  //     }) 
  //    //projectshow()
  }  
)
  
//   function commentsList() {
//   $("a.new-comment").on("click", function(e) {
//     //$("div.comment_form").empty()
    
//     $.get("/comments/new", function(resp){
//       //debugger
//         $("div.comment_form").empty()
        
//       $("div.comment_form").append(resp)
    
//     })
//      // alert("New")
//     e.preventDefault()
//   })
// }



// $(function (){
// $("a.new_ajax_comment").on("click", function(e) {
//     //$("div.comment_form").empty()
//     //$("a.contractor_list").empty()
//     $.get("/comments/new", function(resp){
//       //debugger
//         $("div.comment_form").empty()
        
//       $("div.comment_form").append(resp)
    
//     })
//      // alert("New")
//     e.preventDefault()
//   })
// })