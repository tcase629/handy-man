class Service < ApplicationRecord
  belongs_to :worker
  has_many :comments, dependent: :destroy
  validates :serv_type, :cost, presence: true
end
