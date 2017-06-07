class Project < ApplicationRecord
  has_many :comments
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
  
  validates_presence_of :title, :contract_number, :category, :project_start_date, :project_end_date, :substantial_completion_date, :category, :solicitation_number, :project_officer, :location

  #accepts_nested_attributes_for :contractors, reject_if: :all_blank
  
  def contractors_attributes=(contractors_attributes)
    raise contractors_attributes.inspect
    contractors_attributes.each do |i, contractor_attributes|
      self.contractors.build(contractor_attributes)
    end
  end
  end
