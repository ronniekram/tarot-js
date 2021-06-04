class DrawSerializer < ActiveModel::Serializer
  attributes :id, :question, :card_ids
  has_many :cards
end
