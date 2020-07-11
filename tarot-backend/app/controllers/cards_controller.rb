class CardsController < ApplicationController

  def index 
    cards = Card.all 
    render json: cards
  end 

  def show 
    card = Card.find_by(id: params[:id])
    render json: card
  end 
  
end
