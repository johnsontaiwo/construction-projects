class ContractorProjectSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :contractor
  belongs_to :project
end
