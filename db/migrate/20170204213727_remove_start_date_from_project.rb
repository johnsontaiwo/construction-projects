class RemoveStartDateFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :start_date, :text
  end
end
