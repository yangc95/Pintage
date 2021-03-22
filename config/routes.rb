Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :pins, only: [:index, :create, :show, :update, :destroy]
    resources :boards, only: [:index, :show, :create, :destroy]
    # resources :follows, only: [:create, :destroy]
  end

  root to: 'root#root'
end