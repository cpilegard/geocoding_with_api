class CreateGeocodes < ActiveRecord::Migration
  def change
  	create_table :geocodes do |t|
  		t.references :user
  		t.decimal :lat
  		t.decimal :lng
  		t.timestamps
  	end
  end
end
