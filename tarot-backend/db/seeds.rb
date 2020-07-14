# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "rest-client"
require "faker"

cards = RestClient.get 'https://raw.githubusercontent.com/ronniekram/cards-json/master/cards.json'

cards_array = JSON.parse(cards)['cards']

cards_array.each do |card|
  Card.create(
  name: card["name"],
  summary: card["summary"],
  full_meaning: card["full_meaning"],
  image: card["image"],
  upright: card["upright"],
  reversed: card["reversed"]
  )
 end

 sample_cards = cards_array.sample(2)
 question = Faker::Quote.rand

 20.times do  
  Draw.create(question: question, draw_cards: [sample_cards])
 end 