class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]

    def new
      @project = Project.new
      respond_to do |f|
        f.html {render 'projects/new', :layout => false}
        f.json {render json: @project}
      end
    end

    def index
      @projects = Project.all
      respond_to do |f|
        f.html {render 'projects/index', :layout => false}
        f.json {render json: @projects}
    end

    end

    def create
    @project = Project.create(project_params)
    if @project.save
      render json: @project
      else
      render "new"
    end
    end
      

    def show
      @comment = @project.comments
      render json: @project
    end

    def edit
      respond_to do |f|
        f.html {render 'projects/edit', :layout => false}
        f.json {render json: @project}
      end
    end

    def update
      if @project.update_attributes(project_params)
            respond_to do |f|
          f.html {redirect_to @project, notice: "Project updated"}
          f.json {render json: @project}
        end
      else
        render "edit", notice: "Project can not be updated"
      end
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
      params.require(:project).permit(:title, :contract_number, :solicitation_number, :project_start_date, :project_end_date, :substantial_completion_date, :project_officer, :category, :contract_amount, :location, :contractor_ids => [], :contractors_attributes => [:name, :address, :email, :group]) 
    end

end
