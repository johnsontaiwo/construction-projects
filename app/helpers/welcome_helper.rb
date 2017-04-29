module WelcomeHelper

  def signed_up_as_contractor
    @contractor = Contractor.find_by(:email => params[:email])
     #if @contractor.email == current_user.email
      #raise @contractor.inspect
     #@project = @contractor.contractor_projects.find(params[:id])
     #binding.pry
    #end
  end

end
