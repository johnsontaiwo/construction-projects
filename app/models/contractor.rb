class Contractor < ApplicationRecord
  has_many :contractor_projects
  has_many :projects, through: :contractor_projects

   validates :name, presence: true
   validates :telephone, presence: true, length: {10}
   validatea :tax_id, presence: true, uniqueness: true, length: {9}
end
