class Contractor < ApplicationRecord
  has_many :contractor_projects
  has_many :projects, through: :contractor_projects

   validates :name, :telephone, presence: true

end
