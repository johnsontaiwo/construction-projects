class ContractorSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :email, :group
  has_many :contractor_projects
  has_many :projects, through: :contractor_projects
  
end
