Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # #index
  get('/', { to: 'welcome#index', as: 'root'})
  get('/auctions',{to: 'auctions#index'})
  # # new
  get('/auctions/new', { to: 'auctions#new', as: :new_auction })
  # create
  post('/auctions', { to: 'auctions#create' })
  #show
  get('/auctions/:id', { to: 'auctions#show', as: :auction })

  resources :auctions do
    resources :bids, only: [:create]
  end

  resources :users, only:[:new, :create]
  resource :session, only:[:new, :create, :destroy]

  namespace :api, default: { format: :json } do
    namespace :v1 do
      root :to =>"welcome#index"
      
      resources :auctions, only: [:index, :show, :create]
      resources :sessions, only: [:create]
      delete('/sign_out', to: 'sessions#destroy')
      resources :users, only: [:create] 
      # /api/v1/current_user
      get('/current_user', to: 'sessions#get_current_user')
      resources :auctions do
        resources :bids, only: [:create, :show]
      end
    end
  end
end
