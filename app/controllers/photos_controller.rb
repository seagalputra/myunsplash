class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end

  def create
    photo_data = photo_params
    photo_size = FastImage.size(photo_data['url'])

    photo_data['width'] = photo_size[0]
    photo_data['height'] = photo_size[1]
    @photo = Photo.new(photo_data)

    redirect_to action: 'index' if @photo.save
  end

  private

  def photo_params
    params.require(:photo).permit(:label, :url)
  end
end
