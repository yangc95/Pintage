class Api::PinBoardsController < ApplicationController
    def create
        @pin_board = PinBoard.new(pin_board_params)

        if @pin.save
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