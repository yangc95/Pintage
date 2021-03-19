class PinsController < ApplicationController
    def index
        @pins = Pin.all
        render :index
    end

    # def show
    #     @pin = Pin.find(params[:id])
    #     render :show
    # end

    private

    def pin_params
        params.require(:pin).permit(:title, :about, :user_id);
    end
end
