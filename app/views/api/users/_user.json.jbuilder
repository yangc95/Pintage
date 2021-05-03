json.extract! user, :id, :username, :email, :pin_ids
json.boards do 
    json.array! user.boards
end

# json.pins do 
#     user.pin_ids
# end


# json.pins do 
#     json.array! user.pins.map { |pin| pin.id }
# end

# json.boards do 
#     json.array! user.boards.map { |board| board.id }
# end