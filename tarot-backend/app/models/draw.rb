class Draw < ApplicationRecord
  has_many :card_draws
  has_many :cards, through: :card_draws
end
