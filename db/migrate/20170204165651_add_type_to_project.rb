class AddTypeToProject < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :type, :string
  end
end
