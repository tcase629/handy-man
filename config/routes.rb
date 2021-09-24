Rails.application.routes.draw do
  namespace :api do

    resources :workers do
      resources :services do
        resources :comments
      end
    end
  end
end
