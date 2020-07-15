class Draw < ApplicationRecord
  serialize :draw_cards, Array
  has_many :cards, :dependent => :destroy
  accepts_nested_attributes_for :cards
end
