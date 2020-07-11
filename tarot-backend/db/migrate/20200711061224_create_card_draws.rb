class CreateCardDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :card_draws do |t|
      t.integer :card_id
      t.integer :draw_id
      t.timestamps
    end
  end
end
