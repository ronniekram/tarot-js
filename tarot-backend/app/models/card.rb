class Card < ApplicationRecord
  # has_and_belongs_to_many :draws
  belongs_to :draw, optional: true
end
