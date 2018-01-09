 class UsersController < ApplicationController
  #before_filter :authenticate_user!
  after_action  :verify_authorized
   
   def new
    @user = User.new
  end

  def index 
    @users = User.all
    authorize User
  end

  def show
    @user = User.find(params[:id])
    authorize @user 
  end

  def edit
    @user = User.find(params[:id])
    authorize @user 
  end

  def update
    @user = User.find(params[:id])
    authorize @user
    if @user.update_attributes(user_params)
      redirect_to users_path, :success => "User updated"
    else
      redirect_to users_path, :notice => "Could not update user"
    end
  end

  def destroy
    user = User.find(params[:id])
    authorize user
    user.destroy
    redirect_to users_path, :notice => "User deleted"
  end

      private

  def user_params
    params.require(:user).permit(:role, :email, :password)
  end
end
