class DrawsController < ApplicationController
  # before_action :set_draw, only: [:show, :destroy]

  def index 
    draws = Draw.all
    render json: draws,
      include: [:cards]
  end 

  def create 
    draw = Draw.create!(draw_params)
    if draw 
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
    params.require(:draw).permit(:question,
     :card_ids => [],
     :cards_attributes[:name, :summary, :full_meaning, :upright, :reversed, :image]
     )
  end 

  def set_draw 
    draw = Draw.find_by(id: params[:id])
  end 
end
