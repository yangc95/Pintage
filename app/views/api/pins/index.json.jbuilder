json.array! @pins do |pin|
    json.extract! pin, :id, :title, :about, :user_id
    json.photoUrl url_for(pin.pic)
end