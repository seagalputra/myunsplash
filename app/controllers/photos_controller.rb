class PhotosController < ApplicationController
  def index
    @photos = Photo.all
    @photo = Photo.new
  end

  def create
    @photo = Photo.new(photo_params)

    redirect_to root_path if @photo.save
  end

  def show
    @photo = Photo.find(params[:id])

    respond_to do |format|
      format.js
    end
  end

  def destroy
    @photo = Photo.find(params[:id]).try(:authenticate, params[:password])

    @photo&.destroy

    redirect_to root_path
  end

  private

  def photo_params
    params.require(:photo).permit(:label, :url)
  end
end
