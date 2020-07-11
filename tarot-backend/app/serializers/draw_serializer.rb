class DrawSerializer < ActiveModel::Serializer
  attributes :id, :num_of_cards, :card_ids
end
