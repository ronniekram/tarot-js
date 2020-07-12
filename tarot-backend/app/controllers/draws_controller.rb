class DrawsController < ApplicationController
  before_action :set_draw, only: [:show, :destroy]

  def index 
    draws = Draw.all 
    render json: draws,
      include: [:cards]
  end 

  def create 
    draw = Draw.create(draw_params)
    render json: draw
  end 

  def show
    render json: draw, 
    include: [:cards]
  end 

  def destroy
    draw.delete
  end 

  private 

  def draw_params 
    params.require(:draw).permit(:num_of_cards)
  end 

  def set_draw 
    draw = Draw.find_by(id: params[:id])
  end 
end
