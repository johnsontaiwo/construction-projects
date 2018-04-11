$(document).ready(function(){
newContractor();
createContractor();
showContractor();
indexContractors();
});



let contractorProjectList = {contractors: [], projects: []}
let contractorId = 0


class Contractor {
  constructor(attributes) {
  this.id = ++contractorId
  this.name = attributes.name
  this.email = attributes.email
  this.address = attributes.address
  this.group = attributes.group
  
  contractorProjectList.contractors.push(this)
}

  contractorStatus() {
    return "New Contractor"
  }
}

  

function newContractor() {
  $("a.ajax_new_contractor").on("click", function(e) {
    $("div.new-ajax-contractor").empty()
    $("div.contractors ol").empty()
    $.get('/contractors/new', function(resp) {
       $("div.new-ajax-contractor").append(resp).val()
       $("div.projects ol").empty()
       $("div.new-ajax-project").empty()
    })
    
    e.preventDefault()
  })
  }


function createContractor(){
 $(document).on("submit", "#new_contractor", function(e) {
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {        
        var contractor = new Contractor(response)
        var status = contractor.contractorStatus()
        $("div.projects ol").prepend(`<h4 class="projectHeading">${status}</h4>`);
        $("div.contractor-new").append(`<h4>Name: ${contractor.name}</h4> 
          <h4>Email: ${contractor.email}</h4> 
          <h4>Address: ${contractor.address}</h4> 
          <h4>Group: ${contractor.group}</h4>`)
        $("div.new-ajax-contractor").empty()
        $("header").empty()
      }
    })

    e.preventDefault()
  })
}

function indexContractors(){
  $(document).on("click", "a.contractor_list", function(e) {
    $("div.contractors ol").empty()
    $.get("/contractors", function(resp){
        //var new_Contractor = new Contractor(contractor) 
          $("div.contractor-new").empty()
          $("div.contractor").empty()
          $("div.contractors ol").append(resp).val()
          emptyAllDivs()
        })
    e.preventDefault();
  })

}

function emptyAllDivs() {
  $("div.new-ajax-contractor").empty()
  $("div.projects ol").empty()
  $("div.project").empty()
  $("div.project-contractors ol").empty()
  $("div.project-contractors ol").empty()
  $("div.project-comments ol").prepend()
  $("div.project-comments ol").empty()
  $("div.new-ajax-project").empty()
  $(".edit-profile").hide()
}
 
  
  function showContractor() {
  $(document).on("click", "a.contractor_show_list", function(e) {
    
  $.get( $(e.target).attr('href'), function(resp) {
    var contractor = new Contractor(resp)
    var projectsList = resp.projects;
      $("div.project-contractors ol").prepend(`<h2>Projects</h2>`);
      projectsList.forEach(function(data) {
      $("div.project-contractors ol").append(`<li><h4>Title: ${data.title}</h4> 
        <h4>Contract Number: ${data.contract_number}</h4> 
        <h4>Solicitation Number: ${data.solicitation_number}</h4> 
        <h4>Start Date: ${data.project_start_date}</h4> 
        <h4>End Date: ${data.project_end_date}</h4> 
        <h4>Substantial Completion Date: ${data.substantial_completion_date}</h4> 
        <h4>Project Officer: ${data.project_officer}</h4> 
        <h4>Category: ${data.category}</h4> 
        <h4>Contract Amount: ${data.contract_amount}</h4> 
        <h4>Location: ${data.location}</h4></li>`)
      });
   $("div.contractor").append(`<h4>Name: ${contractor.name}</h4> <h4>Email: ${contractor.email}</h4> <h4>Address: ${contractor.address}</h4> <h4>Group: ${contractor.group}</h4>`)

   $("div.contractors ol").empty()
   $("header").empty()
  })
    e.preventDefault();
  })
}

  
   
  


  

  
  