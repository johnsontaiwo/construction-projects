class CreateContractorProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :contractor_projects do |t|
      t.references :contractor, foreign_key: true
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
