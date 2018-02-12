class ContractorsController < ApplicationController
 #before_action :find_contractor, only: [:show, :edit, :update, :destroy]
 #skip_before_filter :verify_authenticity_token, :only => :create
  def index
    @contractors = Contractor.all
    respond_to do |f|
    f.html {render 'contractors/index', :layout => false}
    f.json {render json: @contractors}
    end
  end

  def new
    @contractor = Contractor.new
    respond_to do |f|
      f.html {render 'contractors/new', :layout => false}
      f.json {render json: @contractor}
      end
  end

  def create
    @projects = Project.all
    if current_user
      @contractor = Contractor.create(contractor_params)
      if  @contractor.save
          redirect_to  @contractor, notice: "You have successfully signed up as contractor with us"
      else
        render 'new', alert: "Your email does not match "
     end
    else
      redirect_to '/', alert: "**You must sign up as a user first.**"
    end
  end

  def show
    @projects = Project.where("project_end_date > ?", Date.today)
  end
 
  def edit 
  end
 
  def update
    @contractor.update(contractor_params)
    redirect_to @contractor
  end

  def destroy
    @contractor.destroy
    redirect_to contractors_path
  end

 private

  def find_contractor
    @contractor = Contractor.find(params[:id])
  end

  def contractor_params
    params.require(:contractor).permit(:name, :address, :email, :group)
  end
end
