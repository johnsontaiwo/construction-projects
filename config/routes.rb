Rails.application.routes.draw do
  resources :comments
  resources :contractor_projects
  resources :projects do
    resources :comments, except: [:index] 
  end
  resources :contractors
  root 'welcome#home'
  devise_for :users
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
