Rails.application.routes.draw do
  root 'photos#index'

  resources :photos do
    collection do
      get 'search'
    end
  end
end
