json.array! @pins do |pin|
    json.extract! pin, :id, :title, :about, :user_id
    # comment back in later 
    # json.photoUrl url_for(pin.photo)
end