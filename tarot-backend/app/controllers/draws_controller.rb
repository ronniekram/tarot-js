class DrawsController < ApplicationController

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
    draw = Draw.find_by(id: params[:id])
    render json: draw, 
    include: [:cards]
  end 

  def destroy
    draw = Draw.find_by(id: params[:id])
    draw.delete
  end 

  def destroyall 
    Draw.delete_all
  end 

  private 

  def draw_params 
    params.require(:draw).permit(:question, :card_ids => [])
  end 

  def set_draw 
    draw = Draw.find_by(id: params[:id])
  end 
end