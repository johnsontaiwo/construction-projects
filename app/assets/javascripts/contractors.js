$(document).ready(function(){
//compileNewContractorTemplate();
newContractor();
createContractor();
showContractor();
indexContractors();
});



let contractorProjectList = {contractors: [], projects: []}
let contractorId = 0
let projectId = 0


class Contractor {
  constructor(attributes) {
  this.id = ++contractorId
  this.name = attributes.name
  this.email = attributes.email
  this.address = attributes.address
  this.group = attributes.group
  
  contractorProjectList.contractors.push(this)
}

  projects() {
    return contractorProjectList.projects.filter(function(project){
      return project.contractorId === this.id
    }.bind(this))
  }
}

  // projects() {
  //   return contractorProjectList.projects.filter(function(project) {
  //     return project.contractorId = this.id
  //   }.bind(this))
  // }

    




// function compileNewContractorTemplate(){
//     //debugger
//    var newContractorSource = $("a.ajax_new_contractor").html();
//      //debugger
//      if (newContractorSource !== undefined) {
//     var template = Handlebars.compile($("#newContractorTemplate").html()); 
//    }
// }

function newContractor() {
  $("a.ajax_new_contractor").on("click", function(e) {
    $("div.new-ajax-contractor").empty()
    $("div.contractors ol").empty()
    $.get('/contractors/new', function(resp) {
      //debugger
       var contractor = new Contractor(resp)
       $("div.new-ajax-contractor").append(resp).val()
      //debugger
    })
    
    e.preventDefault()
  })
  }


function createContractor(){
 $(document).on("submit", "#new_contractor", function(e) {
   //alert("Hey")
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        
        var contractor = new Contractor(response)
         //var renderContractor = HandlebarsTemplates['/contractor/new_contractor'](contractor)

     $("div.contractors").append(`<h4>Name: ${contractor.name}</h4> <h4>Email: ${contractor.email}</h4> <h4>Address: ${contractor.address}</h4> <h4>Group: ${contractor.group}</h4>`)
         //debugger
        $("div.new-ajax-contractor").empty()
        //$("header").empty()
      }
    })

    e.preventDefault()
  })
}

function indexContractors(){
  $("a.contractor_list").on("click", function(e) {
    $("div.contractors ol").empty()
    $.get("/contractors", function(resp){
       
         var new_Contractor = new Contractor(contractor) 
         $("div.contractors ol").append(resp).val()
      
         debugger
      
      })
    e.preventDefault();
  })

}
 
  
  function showContractor() {
  $(document).on("click", "a.contractor_show_list", function(e) {
    
  $.get( $(e.target).attr('href'), function(resp) {
    var contractor = new Contractor(resp)
   $("div.contractor").append(`<h4>Name: ${contractor.name}</h4> <h4>Email: ${contractor.email}</h4> <h4>Address: ${contractor.address}</h4> <h4>Group: ${contractor.group}</h4>`)
   //$("div.contractor").append(resp).val()
   //debugger
   $("div.contractors ol").empty()
   $("header").empty()
    //debugger
  })
    e.preventDefault();
  })

 }

  $(document).on("click", "a.edit_contractor", function(e) {
    alert("Edit")
    e.preventDefault()
  })
   
  


  

  
  