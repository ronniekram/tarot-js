class AddReversedToCard < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :reversed, :text
  end
end
