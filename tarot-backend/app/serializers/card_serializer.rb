class CardSerializer < ActiveModel::Serializer
  attributes :id, :name, :summary, :full_meaning, :image, :upright, :reversed, :draw_id
  # has_and_belongs_to_many :draws
  belongs_to :draw
end
