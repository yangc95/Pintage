class Api::PinsController < ApplicationController
    helper_method :current_user

    def index
        @pins = Pin.all
        render "api/pins/index"
    end

    def create
        @pin = Pin.new({
            title: pin_params[:title], 
            about: pin_params[:about], 
            photo: pin_params[:photo],
            user_id: pin_params[:user_id]
        })

        if @pin.save
            if pin_params[:board_id].present?
                @pin_board = PinBoard.create!(pin_id: @pin.id, board_id: pin_params[:board_id])
            end
            render "api/pins/show"
        else
            render json: ["Pin error"]
        end
    end

    def show
        @pin = Pin.find(params[:id])
        render "api/pins/show"
    end
    
    def update
        @pin = Pin.find(params[:id])
        if @pin && @pin.update(board_id: params[:board_id])
            render "api/pins/show"
        else
            render json: ["Pin not found"]
        end
    end

    def destroy
        # debugger;
        @pin = Pin.find_by(id: params[:id])
        @pin_boards = PinBoard.where(pin_id: @pin.id)
        @user = User.find_by(id: @pin.user_id)

        if @pin.destroy
            render "api/users/show"
        end
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :about, :user_id, :photo, :board_id)
    end
end