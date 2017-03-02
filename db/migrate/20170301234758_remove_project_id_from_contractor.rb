class RemoveProjectIdFromContractor < ActiveRecord::Migration[5.0]
  def change
    remove_column :contractors, :project_id, :integer
  end
end
