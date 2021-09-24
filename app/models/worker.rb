class Worker < ApplicationRecord
  has_many :services, dependent: :destroy
  validates :name, :specialty, :phone, presence: true
end
