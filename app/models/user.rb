class User < ActiveRecord::Base
  has_one :geocode
end
