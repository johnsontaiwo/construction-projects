$(document).ready(function(){
  newProject();
  projectList();
  createProject();
  showProject()
});
  

  let projectContractorList = {projects: [], comments: [], contractors: []}
  let commentId = 0
  let projectId = 0

class Project {
  constructor(attributes){
    this.id = ++projectId
    this.title = attributes.title
    this.contract_number = attributes.contract_number
    this.solicitation_number = attributes.solicitation_number
    this.project_start_date = attributes.project_start_date
    this.project_end_date = attributes.project_end_date
    this.substantial_completion_date = attributes.substantial_completion_date
    this.project_officer = attributes.project_officer
    this.category = attributes.category
    this.contract_amount = attributes.contract_amount
    this.location = attributes.location

    projectContractorList.projects.push(this)
  }
}




  function projectList() {
  $("a.project_list").on("click", function(e) {
  
     $("div.projects ol").empty()
     $.get("/projects", function(resp) {
          $("div.projects ol").append(resp).val()
          $("div.project").empty()
       })
     
        e.preventDefault()
      })
    }

  function newProject(){
  $("a.ajax_new_project").on("click", function(e){
    $("div.new-ajax-project").empty()
    $.get("/projects/new", function(resp){
      //debugger
      $("div.new-ajax-project").append(resp).val()
      
    })
    
    e.preventDefault()
    })
  }


function createProject() {
  $(document).on("submit", "#new_project", function(e){
    //alert("Hey")
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        var project = new Project(response)
        $("div.projects ol").append(`<h4>Title: ${project.title}</h4> <h4>Contract Number: ${project.contract_number}</h4> <h4>Solicitation Number: ${project.solicitation_number}</h4> <h4>Start Date: ${project.project_start_date}</h4> <h4>End Date: ${project.project_end_date}</h4> <h4>Substantial Completion Date: ${project.substantial_completion_date}</h4> <h4>Project Officer: ${project.project_officer}</h4> <h4>Category: ${project.category}</h4> <h4>Contract Amount: ${project.contract_amount}</h4> <h4>Location: ${project.location}</h4>`)
        //debugger
        $("div.new-ajax-project").empty()
        $("header").empty()
        $("a.new_ajax_comment").hide()
      }
    })
    e.preventDefault()
  })
 }  
   
  function showProject(){
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
  }
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

// // 