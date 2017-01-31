class AddContractorIdToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :contractor_id, :integer
  end
end
