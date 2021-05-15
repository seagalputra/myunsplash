class Photo < ApplicationRecord
  has_secure_password
  validates :password, presence: true
end
