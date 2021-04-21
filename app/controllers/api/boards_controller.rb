class Api::BoardsController < ApplicationController
    def index
        @board = Board.find_by(user_id: params[:user_id])
        @user = User.find(@board.user_id)
        render "api/users/show"
    end

    def show

    end
    
    def create
        @board = Board.new(board_params)
        # debugger;
        if @board.save
            # debugger;
            # @user = User.find(@board.user_id)
            render "api/boards/show"
        else
            render json: ["Enter a name!"], status: 401
        end
    end
    
    def destroy
        @board = Board.find(params[:id])
        
        if @board.destroy
            render json: ["Error"]
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