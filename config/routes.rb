Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

    root to: "home#dashboard"

    namespace :api do
        namespace :v1 do
            resources :users, only: [:show]
            resources :movies, only: [:show]
            #resources :todos, only: [:index, :create, :destroy, :update]
        end
    end
end
