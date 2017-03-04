class RemoveProjectEndDateFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :project_end_date, :integer
  end
end
