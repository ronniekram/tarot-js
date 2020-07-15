class Draw < ApplicationRecord
  # serialize :card_ids, Array
  has_many :cards, :dependent => :destroy
end