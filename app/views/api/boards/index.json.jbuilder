json.array! @boards do |board|
    json.extract! board, :id, :name, :user_id
end