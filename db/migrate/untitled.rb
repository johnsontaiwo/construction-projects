class ContractorsController < ApplicationController

get '/contractors' do
  @contractors = Contractor.all
  if !@contractors.empty?
  erb :'/contractors/show_contractors'
  else
    redirect to "/contractors/new"
  end
end


get '/contractors/new' do
  erb :'/contractors/contractor_new'
end

post '/contractors/new' do
  binding.pry
  if !params[:contractor].empty?
  @contractor = Contractor.create(params[:contractor])
   if !params[:project].empty?
     @contractor.projects << Project.create(params[:project])
   end
  redirect to "/contractors"
  else
  redirect to "/contractors/new"
  end
end

get '/contractors/:id' do
  @contractor = Contractor.find_by_id(params[:id])
  erb :'/contractors/single_contractor'
end

get '/contractors/:id/edit' do
  if logged_in?
    @contractor = Contractor.find(params[:id])
    erb :'/contractors/edit_contractor'
  else
    redirect to "/login"
  end
end

patch '/contractors/:id/edit' do
    contractor = Contractor.find_by_id(params[:id])
    contractor.update(params[:contractor])
    if !params[:project].empty?
    contractor.projects << Project.create(params[:project])
    end
    redirect to "/contractors/#{contractor.id}"
    end
 

  delete '/contractors/:id/delete' do
    contractor = Contractor.find_by(params[:id])
     contractor.delete
     redirect to "/contractors"
   end



end