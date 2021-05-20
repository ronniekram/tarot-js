class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :suit
      t.text :summary
      t.string :image
      t.string :upright
      t.string :reversed
      t.text :desc
      t.integer :draw_id
    end
  end
end
