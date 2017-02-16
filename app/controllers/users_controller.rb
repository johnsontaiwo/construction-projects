class UsersController < ApplicationController

   def new
    @user = User.new
    #authorize @user
  end

  def index 
    @users = User.all
    authorize User
  end

  def show
    @user = User.find(params[:id])
    if !current_user.admin? || current_user != @user
      end
    authorize @user
  end

  def edit
    @user = User.find(params[:id])
    if !current_user.admin? || current_user != @user
      end
    authorize @user
   end

end
