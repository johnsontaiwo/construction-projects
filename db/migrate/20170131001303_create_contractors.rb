class CreateContractors < ActiveRecord::Migration[5.0]
  def change
    create_table :contractors do |t|
      t.string :name
      t.integer :tax_id
      t.integer :telephone
      t.string :address

      t.timestamps
    end
  end
end
