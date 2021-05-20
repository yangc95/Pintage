json.extract! @board, :id, :name, :pins, :user_id
# json.pins do
#   @board.pins.each do |pin|
#       json.set! pin.id do 
#         json.extract! pin, :id, :title, :about
#       end
#   end
# end