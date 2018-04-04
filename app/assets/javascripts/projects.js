$(document).ready(function(){
  newProject();
  projectList();
  createProject();
  showProject()
});
  

  let projectContractorList = {projects: [], comments: [], contractors: []}
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

  projectStatus() {
    return "Non-executed Project"
  }

  contractors() {
    return projectContractorList.contractors.filter(function(c) {
      return c.projectId === this.id
    }.bind(this))
  }
}

 


  function projectList() {
  $("a.project_list").on("click", function(e) {
  
     $("div.projects ol").empty()
     $.get("/projects", function(resp) {
          $("div.projects ol").append(resp).val()
          $("div.project").empty()
          $("div.project-contractors ol").empty()
          $("div.project-comments ol").empty()
           $("div.contractor").empty()
           $("div.contractors ol").empty()
           $("div.new-ajax-contractor").empty()
           $("div.new-ajax-project").empty()
       })
     
        e.preventDefault()
      })
    }

  function newProject(){
  $("a.ajax_new_project").on("click", function(e){
    $("div.new-ajax-project").empty()
    $.get("/projects/new", function(resp){
      $("div.new-ajax-project").append(resp).val()
      $("div.new-ajax-contractor").empty()
      $("div.projects ol").empty()
      $("div.contractors ol").empty()
     })    
    e.preventDefault()
    })
  }


function createProject() {
  $(document).on("submit", "#new_project", function(e){
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        var project = new Project(response)
        var projectHeading = project.projectStatus()
        var contractorsList = response.contractors;
        $("div.project-contractors ol").prepend(`<h2>Contractors</h2>`);
        //debugger
        contractorsList.forEach(function(data) {
          
          $("div.project-contractors ol").append( `<h4>Name: ${data.name}</h4> <h4>Adrress: ${data.address}</h4> <h4>Email: ${data.email}</h4> <h4>Group: ${data.group}</h4><br></br>`)
        }); 
        $("div.projects ol").prepend(`<h4 class="projectHeading">${projectHeading}</h4>`);
        //debugger
        $("div.projects ol").append(`<h4>Title: ${project.title}</h4> <h4>Contract Number: ${project.contract_number}</h4> <h4>Solicitation Number: ${project.solicitation_number}</h4> <h4>Start Date: ${project.project_start_date}</h4> <h4>End Date: ${project.project_end_date}</h4> <h4>Substantial Completion Date: ${project.substantial_completion_date}</h4> <h4>Project Officer: ${project.project_officer}</h4> <h4>Category: ${project.category}</h4> <h4>Contract Amount: ${project.contract_amount}</h4> <h4>Location: ${project.location}</h4>`)
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
      var project = new Project(resp);
      var contractorsList = resp.contractors;
      $("div.project-contractors ol").prepend(`<h2>Contractors</h2>`);
      contractorsList.forEach(function(data) {
      $("div.project-contractors ol").append( `<h4>Name: ${data.name}</h4> <h4>Adrress: ${data.address}</h4> <h4>Email: ${data.email}</h4> <h4>Group: ${data.group}</h4><br></br>`)
      });
      var commentsList = resp.comments;
      $("div.project-comments ol").prepend(`<h2>Comments</h2>`);
      commentsList.forEach(function(data) {
      $("div.project-comments ol").append( `<h4>Content: ${data.content}</h4><br></br>`)
      });
      $("div.project").append(`<h4>Title: ${project.title}</h4> <h4>Contract Number: ${project.contract_number}</h4> <h4>Solicitation Number: ${project.solicitation_number}</h4> <h4>Start Date: ${project.project_start_date}</h4> <h4>End Date: ${project.project_end_date}</h4> <h4>Substantial Completion Date: ${project.substantial_completion_date}</h4> <h4>Project Officer: ${project.project_officer}</h4> <h4>Category: ${project.category}</h4> <h4>Contract Amount: ${project.contract_amount}</h4> <h4>Location: ${project.location}</h4>`)
      $("div.projects ol").empty()  
      $("a.ajax_new_project").hide()
      })
      e.preventDefault();
    })

  }
  