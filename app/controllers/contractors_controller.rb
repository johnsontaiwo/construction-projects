class ContractorsController < ApplicationController
 before_action :find_contractor, only: [:show, :edit, :update, :destroy]
 #skip_before_filter :verify_authenticity_token, :only => :create
 def index
  @contractors = Contractor.all
 end

 def new
  @contractor = Contractor.new
 end

 def create
   #raise contractor_params.inspect
  @projects = Project.all
  @contractor = Contractor.new(contractor_params)
  if @contractor.save
    redirect_to  projects_path, notice: "You have successfully signed up as contractor with us"
  else
    render 'new'
  end
 end

 def show
  
 end
 
 def edit
 end
 
 def update
  @contractor.update(contractor_params)
  redirect_to @contractor
 end

 def destroy
 end

 private

 def find_contractor
  @contractor = Contractor.find(params[:id])
 end

  def contractor_params
    params.require(:contractor).permit(:name, :address, :telephone)
  end
end
