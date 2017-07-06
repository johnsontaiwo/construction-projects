class RemoveContractorIdFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :contractor_id, :integer, default: true
  end
end
