class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
end
