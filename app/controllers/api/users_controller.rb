class Api::UsersController < ApplicationController
	# def index
	# 	@users = User.all
	# end

	def show
		@user = User.find(params[:id])
		render :show
	end

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: ["You didn't enter anything silly!"], status: 401
		end
	end

	# def update
	# 	@user = User.find(params[:id])
	# 	if @user && @user.update(user_params)
	# 		render :show
	# 	elsif !@user
	# 		render json: ['Could not locate user'], status: 400
	# 	else
	# 		render json: @user.errors.full_messages, status: 401
	# 	end
	# end

	# def destroy
	# 	@user = User.find(params[:id])
	# 	if @user
	# 		@user.destroy
	# 		render :show
	# 	else
	# 		render ['Could not find user']
	# 	end
	# end

	private

	def user_params
		params.require(:user).permit(:username, :email, :password)
	end
end
