class CreateDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :draws do |t|
      t.integer :num_of_cards
      t.timestamps
    end
  end
end
