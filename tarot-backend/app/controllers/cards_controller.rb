class CardsController < ApplicationController

  def index 
    cards = Card.all 
    render json: cards
  end 

  def show 
  end 
  
end
