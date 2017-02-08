class AddProjectStartDateToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :project_start_date, :integer
  end
end
