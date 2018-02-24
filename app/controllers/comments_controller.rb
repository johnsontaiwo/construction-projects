 class CommentsController < ApplicationController
  before_action :find_project
  
  def index
    @projects = Project.all
    if params[:project_id]
      @comments = @project.comments.all
      redirect_to @comments
    end
  end

  def new
    @comment = Comment.new
    #if params[:project_id]
    #@comment = @project.comments.build
    respond_to do |f|
      f.html {render 'comments/new', :layout => false}
      f.json {render json: @comment}
      end
      #render json: @comment
    #end
  end

  def create
    if params[:project_id]
      @comment = @project.comments.create(comment_params)
      if @comment.save
      #redirect_to @project
      respond_to do |f|
      f.html {redirect_to @project, :layout => false}
      f.json {render json: @comment}
      end
      else
      render "new"
      end
    end
  end

  def show
    if params[:project_id]
      @comment = @project.comments.find_by(:id => params[:id])
    end
  end
  
  def edit
    @comment = @project.comments.find_by(:id => params[:id])
  end

  def update
    if params[:project_id]
      @comment = @project.comments.find(params[:id])
      if @comment.update_attributes(comment_params)
        redirect_to @project, notice: "Comment updated"
      else
        render "edit", notice: "You cannot update the comment"
      end
    end
  end

  def destroy
    @comment = @project.comments.find_by(:id => params[:id])
    @comment.destroy
    flash[:notice] = "Comment has been successfully deleted"
    redirect_to @project
  end

  private
  
  def find_project
    @project = Project.find_by(:id => params[:project_id])
  end
  
  def comment_params
    params.require(:comment).permit(:content)
  end

end
