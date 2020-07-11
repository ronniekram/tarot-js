class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :full_meaning, :image, :upright, :reversed
end
