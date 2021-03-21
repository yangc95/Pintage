Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :pins, only: [:index, :create, :show, :update, :destroy]
    resources :boards, only: [:index, :show, :create, :update, :destroy]
    # resources :follows, only: [:create, :destroy]
  end

  root to: 'root#root'
end