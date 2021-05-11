class Api::BoardsController < ApplicationController
    def index
        @board = Board.find_by(user_id: params[:user_id])
        @user = User.find(@board.user_id)
        render "api/users/show"
    end

    def show
        @board = Board.find(params[:id])
        render "api/boards/show"
    end
    
    def create
        @board = Board.new(board_params)
        if @board.save
            render "api/boards/show"
        else
            render json: ["Enter a name!"], status: 401
        end
    end

    def edit
        @board = Board.find_by(id: params[:id])
        if @board.save
            render "api/users/index"
        else
            render json: ["Board not found"]
        end
    end
    
    def destroy
        @board = Board.find(params[:id])
        @user = User.find(@board.user_id)
        
        if @board.destroy
            render "api/users/show"
        else
            render json: ["Error, board could not be deleted. Please refresh and try again"]
        end
    end
    
    private
    
    def board_params
        params.require(:board).permit(:name, :user_id);
    end
end


# def index
#     @board = Board.all
#     render :index
# end
# def edit
#     @board = Board.find_by(id: params[:id])
    
#     if @board.update
#         render "api/boards/show"
#     else
#         render json: ["Board not found"], status: 404
#     end
# end