class Project < ApplicationRecord
  has_many :contractor_projects
  has_many :contractors, through: :contractor_projects
end
