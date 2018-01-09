class Project < ApplicationRecord
  has_many :comments
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
  
  validates_presence_of :title, :contract_number, :category, :project_start_date, :project_end_date, :substantial_completion_date, :category, :solicitation_number, :project_officer, :location
  
  
  
  def contractors_attributes=(contractors_attributes)
    contractors_attributes.each do |i, contractor_attribute|
      contractor = Contractor.find_or_create_by(contractor_attribute)
      self.contractor_projects.build(:contractor => contractor)
    end
  end
  
  

  def approved?
   self.contractor_projects.first.bid_status = "Approve"
  end

  
end
