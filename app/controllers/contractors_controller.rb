class ContractorsController < ApplicationController
 before_action :find_contractor, only: [:show, :edit, :update, :destroy]
 
 def index
  @contractors = Contractor.all
 end

 def new
  @contractor = Contractor.new
 end

 def create
  @contractor = Contractor.new(contractor_params)
  if @contractor.save
    redirect_to @contractor 
  else
    render 'new'
  end
 end

 def show
  
 end

 def update
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
