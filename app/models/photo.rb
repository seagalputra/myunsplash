class Photo < ApplicationRecord
  has_secure_password
  validates :password, presence: true
  
  before_validation :store_user_password
  before_save :store_image_size

  private

  def store_user_password
    self.password = ENV['APP_PASSWORD']
  end

  def store_image_size
    photo_size = FastImage.size(url)
    self.width = photo_size[0]
    self.height = photo_size[1]
  end
end
