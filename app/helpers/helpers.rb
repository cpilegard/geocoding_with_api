helpers do
  
  def current_user
    if session[:user]
      return User.find(session[:user].to_i)
    end
    nil
  end

end