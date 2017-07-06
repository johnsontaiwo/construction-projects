class RemoveBooleanFromContractorProjects < ActiveRecord::Migration[5.0]
  def change
    remove_column :contractor_projects, :boolean, :string
    remove_column :contractor_projects, :string, :string
  end
end
