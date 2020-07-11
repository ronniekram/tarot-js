class Card < ApplicationRecord
  has_many :card_draws
  has_many :draws, through: :card_draws
end
