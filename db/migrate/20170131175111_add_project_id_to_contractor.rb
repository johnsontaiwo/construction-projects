class AddProjectIdToContractor < ActiveRecord::Migration[5.0]
  def change
    add_column :contractors, :project_id, :integer
  end
end
