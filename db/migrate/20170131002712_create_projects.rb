class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.text :contract_number
      t.text :solicitation_number
      t.string :project_officer
      t.text :start_date
      t.text :finish_date
      t.text :substantial_completion_date
      t.text :contract_amount
      t.text :location

      t.timestamps
    end
  end
end
