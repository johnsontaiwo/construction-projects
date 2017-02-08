class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def new
    @project = Project.new
  end

  def index
    @projects = Project.all
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      redirect_to @project
    else
      render "new"
    end
  end

  def edit

  end
  
  def update

  end

  def destroy

  end
  
  private


def set_project
  @project = Project.find(params[:id])
end

def project_params
  params.require(:project).permit(:title, :contract_number, :solicitation_number, :project_officer, :finish_date, :substatntial_completion_date, :contract_amount, :location, contractor_ids: [], contractors_attributes: [:name])
end

end
