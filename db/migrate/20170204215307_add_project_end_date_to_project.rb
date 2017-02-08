class AddProjectEndDateToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :project_end_date, :integer
  end
end
