class CardsController < ApplicationController

  def index 
    cards = Card.all
    render json: cards
  end 

  def create 
    card = Card.create!(card_params)
    if card 
      render json: card
    end 
  end 

  def show 
    card = Card.find_by(id: params[:id])
    render json: card
  end 

  private 

  def card_params
    params.require(:card).permit(
      :name, 
      :summary, 
      :full_meaning,
      :upright, 
      :reversed, 
      :image,
      :draw_id
    )
  end 
  
end