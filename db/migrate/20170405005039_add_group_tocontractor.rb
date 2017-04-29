class AddGroupTocontractor < ActiveRecord::Migration[5.0]
  def change
    add_column :contractors, :group, :string
  end
end
