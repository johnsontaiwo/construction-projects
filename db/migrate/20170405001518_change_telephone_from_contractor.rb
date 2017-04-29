class ChangeTelephoneFromContractor < ActiveRecord::Migration[5.0]
  def change
    change_column :contractors, :telephone, :integer
  end
end
