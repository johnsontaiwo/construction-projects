// let contractorList = {contractors: []}

// let contractorId = 0

// class Contractor {
//   constructor(name, email, address){
//   this.id = ++contractorId
//   this.name = name
//   this.email = email
//   this.address = address}
// }


$(function() {
  
 $(document).on("submit", "#new_contractor", function(e) {
   //alert("Hey")
    $.ajax({
      type: 'POST',
      url: this.action,
      data: $(this).serialize(),
      success: function(response) {
        //debugger
        $("div.contractors").append(response).val()
        $("div.new-ajax-contractor").empty()
        $("header").empty()
      }
    })

    e.preventDefault()
  })


  $("a.contractor_list").on("click", function(e) {
    $("div.contractors ol").empty()
    $.get("/contractors", function(resp) {
      $("div.contractors ol").append(resp).val()
        //resp.data.forEach(function(data))
      })
    e.preventDefault();
  })


 
  
  
  $(document).on("click", "a.contractor_show_list", function(e) {
    
    //let contractor = new Contractor('id', 'name', 'email', 'address')
  $.get( $(e.target).attr('href'), function(resp) {
   $("div.contractor").append(resp).val()
   $("div.contractors ol").empty()
   $("header").empty()
    //debugger
  })
    e.preventDefault();
  })

  
  $("a.ajax_new_contractor").on("click", function(e) {
    $("div.new-ajax-contractor").empty()
   $("div.contractors ol").empty()
    $.get('/contractors/new', function(resp) {
      $("div.new-ajax-contractor").append(resp).val()
    })
   
    e.preventDefault()
  })
  

  $(document).on("click", "a.edit_contractor", function(e) {
    alert("Edit")
    e.preventDefault()
  })
})
  
  
