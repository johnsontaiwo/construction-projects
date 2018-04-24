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
    this.id = attributes.id
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

    //projectContractorList.projects.push(this)
  }

  projectStatus() {
    return "Non-executed Project"
  }

   contractors() {
     return projectContractorList.contractors.filter(function(c) {
      return c.projectId === this.id
    }.bind(this))
  }

  renderHTML() {
    return `<a href="/projects/${this.id}" class="showList">  ${this.title}</a>`
  }

  projectAttributes() {
    return `<h4>Title: ${this.title}</h4> 
        <h4>Contract Number: ${this.contract_number}</h4> 
        <h4>Solicitation Number: ${this.solicitation_number}</h4> 
        <h4>Start Date: ${this.project_start_date}</h4> 
        <h4>End Date: ${this.project_end_date}</h4> 
        <h4>Substantial Completion Date: ${this.substantial_completion_date}</h4> 
        <h4>Project Officer: ${this.project_officer}</h4> 
        <h4>Category: ${this.category}</h4> 
        <h4>Contract Amount: ${this.contract_amount}</h4> 
        <h4>Location: ${this.location}</h4>`
  }

} 


  function projectList() {
  $(document).on("click", "a.project_list", function(e) {
  $("div.projects ol").empty()
     $.get("/projects", function(resp) {
      resp.forEach(function(r){
        const newProject = new Project(r)
        const newHtml = newProject.renderHTML()
          $("div.projects ol").append(newHtml)
          })
          $("div.project").empty()
          $("div.project-contractors ol").empty()
          $("div.project-comments ol").empty()
          $("div.contractor").empty()
          $("div.contractors ol").empty()
          $("div.new-ajax-contractor").empty()
          $("div.new-ajax-project").empty()
          $("#projects").hide()
       })
      e.preventDefault()
      })
    }
 
 function showProject(){
    $(document).on("click", "a.showList", function(e){
      $.get( $(e.target).attr('href'), function(resp) {
      var project = new Project(resp);
      const allAtributes = project. projectAttributes()
      var contractorsList = resp.contractors;
      $("div.project-contractors ol").prepend(`<h2>Contractors</h2>`);
      contractorsList.forEach(function(data) {
      $("div.project-contractors ol").append( `<h4>Name: ${data.name}</h4> 
        <h4>Adrress: ${data.address}</h4> 
        <h4>Email: ${data.email}</h4> 
        <h4>Group: ${data.group}</h4><br></br>`)
      });
      var commentsList = resp.comments;
      $("div.project-comments ol").prepend(`<h2>Comments</h2>`);
      commentsList.forEach(function(data) {
      $("div.project-comments ol").append( `<h4>Content: ${data.content}</h4><br></br>`)
      });
      $("div.project").append(allAtributes)
      $("div.projects ol").empty()  
      $("a.ajax_new_project").hide()
      
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
        const Atributes = project. projectAttributes()
        var projectHeading = project.projectStatus()
        var contractorsList = response.contractors;
        $("div.project-contractors ol").prepend(`<h2>Contractors</h2>`);
        contractorsList.forEach(function(data) {
          
          $("div.project-contractors ol").append( `<h4>Name: ${data.name}</h4> 
            <h4>Adrress: ${data.address}</h4> 
            <h4>Email: ${data.email}</h4> 
            <h4>Group: ${data.group}</h4><br></br>`);
        }); 
        $("div.projects ol").prepend(`<h4 class="projectHeading">${projectHeading}</h4>`);
        $("div.projects ol").append(Atributes);
        $("div.new-ajax-project").empty();
        $("header").empty();
        $("a.new_ajax_comment").hide()
      }
    })
    e.preventDefault()
  })
 }  
   
  
  