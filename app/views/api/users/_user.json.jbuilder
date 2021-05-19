json.extract! user, :id, :username, :email

json.boards do 
    json.array! user.boards, :id, :name, :pins
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