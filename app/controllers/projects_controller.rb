class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

  def new
   @project = Project.new
   @contractor = @project.contractors.build
  end

  def index
    @projects = Project.all
  end

  def create
    #raise project_params.inspect
    #@contractor = Contractor.find(params[:contractor_id])
    @project = Project.create(project_params)
    #@project.contractors = @contractor
    if @project.save
      redirect_to @project
    else
      render "new"
     end
  end

  def show
    @comment = @project.comments
  end

  def edit

  end
  
  def update

  end

  def destroy
   @project.destroy
   redirect_to '/'
  end
  
  private


def set_project
  @project = Project.find_by(:id => params[:id])
end

def project_params
  params.require(:project).permit(:title, :contract_number, :solicitation_number, :project_officer, :category, :contract_amount, :location, :contractor_ids => [], :contractors_attributes => [:name, :address, :telephone])
end

end
