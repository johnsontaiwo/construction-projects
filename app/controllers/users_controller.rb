 class UsersController < ApplicationController

   def new
    @user = User.new
  end

  def index 
    @users = User.all
    authorize User
  end

  def show
    @user = User.find(params[:id])
    authorize @user if !current_user.admin? || current_user != @user
  end

  def edit
    @user = User.find(params[:id])
    authorize @user if !current_user.admin? || current_user != @user
  end

end
