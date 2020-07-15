class DrawSerializer < ActiveModel::Serializer
  attributes :id, :question, :draw_cards
  has_many :cards
end
