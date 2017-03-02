class RemoveSubstantialCompletionDateFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :substantial_completion_date, :string
  end
end
