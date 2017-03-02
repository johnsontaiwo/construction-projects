class Project < ApplicationRecord
  has_many :comments
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
  #has_many :sub_contractors, through: :contractor_projects, source: :contractors

  accepts_nested_attributes_for :contractors, reject_if: :all_blank
  
  #def contractors_attributes(contractors_attributes)
   #raise contractors_attributes.inspect
       #contractors_attributes.each do |contractor_attributes|
      #self.contractors.build(contractor_attributes)
    #end
    #end
  end
