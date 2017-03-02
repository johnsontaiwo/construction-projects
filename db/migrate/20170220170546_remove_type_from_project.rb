class RemoveTypeFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :type, :string
  end
end
