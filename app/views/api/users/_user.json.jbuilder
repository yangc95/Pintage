json.extract! user, :id, :username, :email

json.pins do 
    json.array! user.pins.map { |pin| pin.id }
end

json.boards do 
    json.array! user.boards.map { |board| board.id }
end