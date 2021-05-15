# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Photo.destroy_all

15.times do |index|
  height = rand(100..600)

  Photo.create(label: "Sample Photo #{index}",
               url: Faker::LoremFlickr.image(size: "400x#{height}"),
               width: 400,
               height: height,
               password: ENV['APP_PASSWORD'])
end

p "Created #{Photo.count} photos"
