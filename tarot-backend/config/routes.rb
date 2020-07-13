Rails.application.routes.draw do
  resources :draws, except: [:edit, :update] do 
    resources :cards, only: [:index, :show]
  end 
  resources :cards, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    get 'cards/one_card' => "draws#one_card"
    get 'cards/three_cards' => "draws#three_cards"
    get 'cards/five_cards' => "draws#five_cards"
end
