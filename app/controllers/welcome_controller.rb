class WelcomeController < ApplicationController
  def home
  @projects = Project.where("project_end_date > ?", Date.today)
  #binding.pry
  end

  def users
  end
end
