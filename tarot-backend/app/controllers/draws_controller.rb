class DrawsController < ApplicationController
  before_action :set_draw, only: [:show, :destroy]
  before_action :set_cards, only: [:one_card, :three_card, :five_card]

  def index 
    draws = Draw.all 
    render json: draws,
      include: [:cards]
  end 

  def create 
    draw = Draw.new(draw_params)
    if draw.save 
      render json: draw,
        include: [:cards]
    end 
  end 

  def show
    render json: draw, 
    include: [:cards]
  end 

  def destroy
    draw.delete
  end 

  def one_card 
    draw_one = cards.sample(1)
    render json: draw_one
  end

  def three_card 
    draw_three = cards.sample(3)
    render json: draw_three
  end 

  def five_card
    draw_five = cards.sample(5)
    render json: draw_five 
  end 

  private 

  def draw_params 
    params.require(:draw).permit(:question)
  end 

  def set_draw 
    draw = Draw.find_by(id: params[:id])
  end 

  def set_cards 
    cards = Card.all
  end 
end
