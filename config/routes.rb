Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy, :show]
    resources :pins, only: [:create, :index]
    resources :boards, only: [:index, :create, :edit, :destroy]
    # resources :follows, only: [:create, :destroy]
  end

  root to: 'root#root'
end