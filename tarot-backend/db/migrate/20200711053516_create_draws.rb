class CreateDraws < ActiveRecord::Migration[6.0]
  def change
    create_table :draws do |t|
      t.string :question
      t.integer :card_ids
    end
  end
end
