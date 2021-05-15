case Rails.env
when 'development'
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
end
