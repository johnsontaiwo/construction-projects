class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :title, :contract_number, :solicitation_number, :project_start_date, :project_end_date, :substantial_completion_date, :project_officer, :category, :contract_amount, :location
  has_many :comments
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
end
