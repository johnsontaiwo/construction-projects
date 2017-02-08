class RemoveFinishDateFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :finish_date, :text
  end
end
