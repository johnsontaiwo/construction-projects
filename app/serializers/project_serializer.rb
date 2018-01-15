class ProjectSerializer < ActiveModel::Serializer
  attributes :id
  has_many :comments
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
end
