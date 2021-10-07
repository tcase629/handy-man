class Comment < ApplicationRecord
  belongs_to :service
  validates :title, :body, presence: true
end
