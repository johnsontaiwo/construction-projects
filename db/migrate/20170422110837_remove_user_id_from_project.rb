class RemoveUserIdFromProject < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :user_id, :integer
  end
end
