class RemoveProjectStartDateFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :project_start_date, :integer
  end
end
