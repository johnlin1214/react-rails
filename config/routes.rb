Rails.application.routes.draw do
  get 'site/index'

  namespace :api do
    namespace :v1 do
      resources :items, only: [:index, :create, :destroy, :update]
    end
  end
  root to: 'site#index'
end
