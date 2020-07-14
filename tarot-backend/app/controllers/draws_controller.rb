class DrawsController < ApplicationController
  # before_action :set_draw, only: [:show, :destroy]
  # before_action :set_cards, only: [:one_card, :three_card, :five_card]

  def index 
    draws = Draw.all.order(created_at: :asc) 
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
    draw = Draw.find_by(id: params[:id])
    render json: draw, 
    include: [:cards]
  end 

  def destroy
    draw = Draw.find_by(id: params[:id])
    draw.delete
  end 

  private 

  def draw_params 
    params.require(:draw).permit(:question)
  end 

  def set_draw 
    draw = Draw.find_by(id: params[:id])
  end 
end
