class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.text :summary
      t.text :full_meaning
      t.string :upright
      t.string :reversed
      t.string :image
    end
  end
end
