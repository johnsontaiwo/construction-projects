class AddCategoryToContractor < ActiveRecord::Migration[5.0]
  def change
    add_column :contractors, :category, :string
  end
end
