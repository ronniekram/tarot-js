class CreateCardDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :card_draws do |t|
      t.belongs_to :card 
      t.belongs_to :draw
      t.timestamps
    end
  end
end
