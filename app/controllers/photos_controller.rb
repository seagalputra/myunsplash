class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)

    redirect_to action: 'index' if @photo.save
  end

  private

  def photo_params
    params.require(:photo).permit(:label, :url)
  end
end
