class DrawSerializer < ActiveModel::Serializer
  attributes :id, :question, :draw_cards, :created_at
end
