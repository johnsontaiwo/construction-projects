class RemoveBidStausFromContractorProjects < ActiveRecord::Migration[5.0]
  def change
    remove_column :contractor_projects, :bid_status, :string
    remove_column :contractor_projects, :boolean, :string
  end
end
