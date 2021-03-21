class Api::PinsController < ApplicationController
    helper_method :current_user

    def index
        @pins = Pin.all
        render :index
    end

    def new
        @pin = Pin.new
    end

    def create
        @pin = Pin.new(pin_params)

        if @pin.save
            render "api/pin/show"
        else
            render json: ["Pin error"]
        end
    end

    def show
    end

    private

    def pin_params
        params.require(:pin).permit(:title, :about, :user_id, :board_id);
    end
end
