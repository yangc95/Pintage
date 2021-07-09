class Api::SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(
			params[:user][:username],
			params[:user][:email], 
			params[:user][:password])
		if @user
			login(@user)
			render 'api/users/show'
		else
			render json: ['You missed a spot! Don\'t forget to add your username.'], status: 401
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render 'api/users/show'
		else
			render json: ['Uh oh... you need to sign in'], status: 404
		end
	end
end
