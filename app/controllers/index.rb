get '/' do
  erb :index
end

get '/user/signup' do
  erb :sign_up
end

post '/user/new' do
  user = User.create(params)
  session[:user] = user.id
  redirect '/'
end

get '/user/login' do
  erb :log_in
end

post '/user/login' do
  user = User.find_or_create_by_username(params[:username])
  if user.password == params[:password]
    session[:user] = user.id
    redirect '/'
  else
    redirect '/user/login'
  end
end

get '/logout' do
  session.clear
  redirect '/'
end

post '/location' do
  if current_user.geocode == nil
    current_user.geocode = Geocode.create(params)
  end
end

get '/user/profile' do
  erb :profile
end

post '/user_locations' do
  user_locations = []
  User.all.each do |user|
    puts 'user...'
    if user.geocode
      latlng = { lat: user.geocode.lat,
                 lng: user.geocode.lng,
                 username: user.username }
      user_locations << latlng
    end
  end

  content_type :json
  user_locations.to_json
end