class Draw < ApplicationRecord
  has_many :cards, :dependent => :destroy
end
