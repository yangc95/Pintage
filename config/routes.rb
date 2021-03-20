Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :pins, only: [:create, :index]
    # resources :follows, only: [:create, :destroy]
  end

  root to: 'root#root'
end