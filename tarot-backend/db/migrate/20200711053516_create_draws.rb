class CreateDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :draws do |t|
      t.string :question
      t.string :draw_cards
      t.timestamps
    end
  end
end
