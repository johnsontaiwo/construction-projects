class AddSubstantialCompletionDateToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :substantial_completion_date, :datetime
  end
end
