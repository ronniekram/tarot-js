class CreateDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :draws do |t|
      t.string :question
      t.integet :card_ids
      t.string :cards_attributes
      t.timestamps
    end
  end
end
