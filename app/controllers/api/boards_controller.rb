class Api::BoardsController < ApplicationController

    def index
        @board = Board.where(user_id: params[:user_id])
        render :index
    end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render :index
        else
            render json: ["Enter a name!"], status 401
        end
    end

    def edit
        @board = Board.find_by(id: params[:id])

        if @board.update
            render "api/boards/show"
        else
            render json: ["Board not found"], status 404
        end
    end

    def destroy
        @board = Board.find(params[:id])

        if @board.destroy
            render "api/boards/index"
        end
    end

    private

    def board_params
        params.require(:board).permit(:name, :user_id);
    end
end
