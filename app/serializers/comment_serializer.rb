class CommentSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :project
end
