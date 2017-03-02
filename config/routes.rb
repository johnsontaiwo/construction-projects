Rails.application.routes.draw do
  resources :comments
  resources :contractor_projects
  resources :projects do
    resources :comments, except: [:index] 
  end
  resources :contractors
  root 'welcome#home'
  get '/users_page' => "welcome#users"
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
