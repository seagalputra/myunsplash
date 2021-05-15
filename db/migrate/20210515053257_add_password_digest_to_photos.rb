class AddPasswordDigestToPhotos < ActiveRecord::Migration[6.1]
  def change
    add_column :photos, :password_digest, :string
  end
end
