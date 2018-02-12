class Contractor < ApplicationRecord
  has_many :contractor_projects
  has_many :projects, through: :contractor_projects

  #validates :name, presence: true
  
  #validates :email, presence: true, uniqueness: true
   

   def downcase
    self.name.downcase
   end
end
