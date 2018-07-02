class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :imdbID
      t.string :type
      t.string :poster

      t.timestamps
    end
  end
end
