class WelcomeController < ApplicationController
  def home
    @projects = Project.where("project_end_date > ?", Date.today)
    @contractors = Contractor.all
  end

  def users
    
  end
end
