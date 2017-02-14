class Contractor < ApplicationRecord
  has_many :contractor_projects
  has_many :projects, through: :contractor_projects

   #validates :name, :address, :telephone, presence: true

end
