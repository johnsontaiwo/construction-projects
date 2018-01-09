class AddBidStatusToContractorProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :contractor_projects, :bid_status, :boolean
    #add_column :contractor_projects, :boolean, :string
  end
end
