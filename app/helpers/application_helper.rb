module ApplicationHelper

  def user
    @contractor = Contractor.find(params[:id])
  end

end
