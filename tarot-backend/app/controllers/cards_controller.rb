class CardsController < ApplicationController

  def index 
    cards = Card.all
    render json: cards
  end 


  def show 
    card = Card.find_by(id: params[:id])
    render json: card
  end 

  private 

  def card_params
    params.require(:card).permit(
      :name, 
      :suit,
      :summary,
      :image,
      :upright, 
      :reversed, 
      :desc,
      :draw_id
    )
  end 
  
end