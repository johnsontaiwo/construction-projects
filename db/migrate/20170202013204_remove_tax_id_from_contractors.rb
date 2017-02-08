class RemoveTaxIdFromContractors < ActiveRecord::Migration[5.0]
  def change
    remove_column :contractors, :tax_id, :integer
  end
end
