Rails.application.routes.draw do
  devise_for :users
  root to: 'root#root', controllers: {
    sessions: 'users/sessions'
  }
end
