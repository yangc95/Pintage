json.extract! user, :id, :username, :email

# user.boards.each do |board|
#     json.set! board.id do
#         json.extract! board, :id, :name, :pins, :updated_at
#     end
#     # json.array! user.boards, :id, :name, :pins, :updated_at
# end

# json.pins do 
#     user.pin_ids
# end

# json.pins do 
#     json.array! user.pins.map { |pin| pin.id }
# end

# json.boards do 
#     json.array! user.boards.map { |board| board.id }
# end