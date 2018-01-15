class ContractorSerializer < ActiveModel::Serializer
  attributes :id
  has_many :contractor_projects
  has_many :projects, through: :contractor_projects
  
end
