class Api::PinBoardsController < ApplicationController
    def create
        @pin_board = PinBoard.new({
            pin_id: params[:pin_id],
            board_id: params[:board_id]
        })

        if @pin_board.save
            @user = current_user
            # @board = Board.find(params[:board_id])
            render 'api/boards/index'
        else
            render json: ["Error, Pin was not added to Board"]
        end
    end

    def update
    end

    private

    def pin_board_params
        params.require(:pin_board).permit(:pin_id, :board_id)
    end
end