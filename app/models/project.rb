class Project < ApplicationRecord
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
  #has_many :sub_contractors, through: :contractor_projects, source: :contractors

  accepts_nested_attributes_for :contractors, reject_if: :all_blank
  
  #def add_sub_contractors(name)
    #sub_contractor = Contractor.find_by(:name => name)
     #if sub_contractor
      # self.contractors << sub_contractor
       #sub_contractor
     #end
  #end

  end
