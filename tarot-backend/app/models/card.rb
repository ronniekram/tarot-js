class Card < ApplicationRecord
  belongs_to :draw, optional: true
end
