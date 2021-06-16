json.array! @pins do |pin|
    json.extract! pin, :id, :title, :about, :user_id, :board_id
    # json.photoUrl url_for(pin.photo)
end