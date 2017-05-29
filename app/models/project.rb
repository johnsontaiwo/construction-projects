class Project < ApplicationRecord
  has_many :comments
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
  
  validates_presence_of :title, :contract_number, :solicitation_number, :project_start_date, :project_end_date, :substantial_completion_date, :project_officer, :category, :contract_amount, :location

  accepts_nested_attributes_for :contractors, reject_if: :all_blank
  
  #def contractors_attributes=(contractors_attributes)
   #raise contractors_attributes.inspect
  #end
  end
