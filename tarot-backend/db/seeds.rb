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