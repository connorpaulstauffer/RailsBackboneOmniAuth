Rails.application.routes.draw do
  devise_for :users,
             controllers: {sessions: 'sessions', registrations: 'registrations'}
             
  root to: 'root#root'
end
