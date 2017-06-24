class WelcomeController < ApplicationController
  def home
    @contractor = Contractor.find_by(params[:contractor_id])
    @projects = Project.where("project_end_date > ?", Date.today)
    @contractors = Contractor.all
  end
  
  def users
  end
end
