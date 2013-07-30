class CreateGeocodes < ActiveRecord::Migration
  def change
  	create_table :geocodes do |t|
  		t.references :user
  		t.decimal :lat
  		t.decimal :lon
  		t.timestamps
  	end
  end
end
