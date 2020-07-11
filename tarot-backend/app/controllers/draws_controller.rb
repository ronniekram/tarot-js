class DrawsController < ApplicationController
  before_action :set_draw, only: [:show, :destroy]

  def index 
    draws = Draw.all 
    render json: draws
  end 

  def create 
    draw = Draw.create(draw_params)
    render json: draw
  end 

  def show
    render json: draw
  end 

  def destroy
    draw.delete
  end 

  private 

  def draw_params 
    params.require(:draw).permit(:created_at, :card_ids)
  end 

  def set_draw 
    draw = Draw.find_by(id: params[:id])
  end 
end
