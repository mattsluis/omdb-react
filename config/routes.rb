Rails.application.routes.draw do
    root to: "home#dashboard"

    namespace :api do
        namespace :v1 do
            resources :users, only: [:show]
            resources :movies, only: [:show]
            #resources :todos, only: [:index, :create, :destroy, :update]
        end
    end
    get '*path', to: 'home#dashboard'
end
