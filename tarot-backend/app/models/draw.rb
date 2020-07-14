class Draw < ApplicationRecord
  serialize :draw_cards, Array
  has_many :cards, :dependent => :destroy
end
