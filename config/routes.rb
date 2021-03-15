Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users
    resource :session, only: [:create, :destroy]
    # resources :follows, only: [:create, :destroy]
  end
  root to: 'root#root'
end
