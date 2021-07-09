@user.boards.each do |board|
    json.set! board.id do
        json.extract! board, :id, :name, :pins, :updated_at
    end
end