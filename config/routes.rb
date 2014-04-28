Rails.application.routes.draw do
  root "application#index"
  resources :contacts, :except => [:new, :edit]
end
