Rails.application.routes.draw do
  resources :draws, except: [:edit, :update]
  resources :cards, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
