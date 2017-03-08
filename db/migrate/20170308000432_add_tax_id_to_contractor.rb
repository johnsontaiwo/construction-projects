class AddTaxIdToContractor < ActiveRecord::Migration[5.0]
  def change
    add_column :contractors, :tax_id, :string
  end
end
