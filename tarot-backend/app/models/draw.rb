class Draw < ApplicationRecord
  # validates :question, presence: true
  has_many :cards, :dependent => :destroy
end