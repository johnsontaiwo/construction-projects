  #require 'pry'
class CommentsController < ApplicationController
  #before_action :find_project, only: [:new, :index, :edit, :show, :update, :destroy]
  
  def index
    if params[:project_id]
    @project = Project.find_by(:id => params[:project_id])
    @comments = project.comments.all
    redirect_to @comments
    #raise @comments.inspect
  end
 end


  def new
    if params[:project_id]
    @project = Project.find(params[:project_id])
    @comment = @project.comments.build
    #Comment.new(project_id: params[:project_id])
     #raise @project.inspect
     #binding.pry
    #redirect_to @comment
  end
  end

  def create
  if params[:project_id]
   @project = Project.find(params[:project_id])
   #raise @project.inspect
   @comment = @project.comments.create(comment_params)
    #if @comment.save
      redirect_to @project
    #else
      #render "new"
    #end
   end
  end

  def show
    #if params[:project_id]
    project = Project.find_by(:id => params[:id])
    #raise project.inspect
    @comment = project.comments.find_by(:id => params[:id])
    #raise @comment.inspect
  #end
  end
  
  def edit
    @comment = project.comments.find_by(:id => params[:id])
  end

  def update
    @comment = project.comments.find_by(:id => params[:id])
    @comment.update(comment_params)
    if @comment.save
      redirect_to @comment 
    else
      render "edit"
    end
  end

  def destroy
    @comment = project.comments.find_by(:id => params[:id])
    @comment.destroy
    flash[:notice] = "Comment has been successfully deleted"
    redirect_to @comment
  end







  private
  
  def find_project
    #project =  Project.find(params[:id])
  end
  
  def comment_params
    params.require(:comment).permit(:content, :project_id)
  end

end
