require 'faker'

user1 = User.create(username: 'cole', password: 'cole')
user2 = User.create(username: 'test', password: 'test')
user1.geocode = Geocode.create(lat: 36.795935, lng: -119.813876)
user2.geocode = Geocode.create(lat: 36.8022317, lng: -119.8428258)

min_lat = 36.740257
max_lat = 36.824673
min_lng = -119.728712
max_lng = -119.897284

100.times do
  user = User.create(username: Faker::Name.name)
  lat = (max_lat - min_lat) * rand() + min_lat
  lng = (max_lng - min_lng) * rand() + min_lng
  user.geocode = Geocode.create(lat: lat, lng: lng)
end
