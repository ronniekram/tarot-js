class CreateDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :draws do |t|
      t.integer :card_ids
      t.timestamps
    end
  end
end
