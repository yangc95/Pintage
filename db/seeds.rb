# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Pin.destroy_all 
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('pins')

users = User.create([
    {username: "test",  password: "hunter10", email: "test@gmail.com"},
    {username: "test1", password: "hunter11", email: "test1@gmail.com"},
    {username: "test2", password: "hunter12", email: "test2@gmail.com"}
])

b = Board.create(name: "Travel", user_id: 1)

p = Pin.create(title: "Sunflower", about: "Testing", user_id: 1, board_id: 1)
file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/sunflower.png")
p.photo.attach(io: file, filename: "sunflower.png")

# pins = Pin.create([
#     {title: "Japanese Night Walk", about: "Nice night", user_id: 1}
# # 2    {title: "Japan Sights", about: "Red Alter", user_id: 1, },
# # 3    {title: "Japanese Day Walk", about: "Beautiful day streets", user_id: 1, }
# ])

# p.photo.attach(io: File.open("/Users/christineyang/Desktop/sunflower.png"), filename: "sunflower.png")
# p.photo.attach(io: File.open("/Users/christineyang/Desktop/$intagePics/food14.jpg"), filename: "food14.jpg")

# pins = Pin.create([
#     {id: 2, title: "Korean Corndogs", about: "Nicely battered crispy crunch", user_id: 1, board_id: 1},
#     {id: 3, title: "Spring Cupcakes", about: "So light, fluffy, and creamy frosting", user_id: 1, board_id: 1},
#     {id: 4, title: "More Spring Cupcakes", about: "But from a different angle, haha", user_id: 1, board_id: 1},
#     {id: 5, title: "French Toast", about: "Boozy Sunday Brunch with polaroid", user_id: 1, board_id: 1},
#     {id: 6, title: "Soup Dumplings", about: "Chewy dumpling skin and hot delicious soup inside", user_id: 1, board_id: 1},
#     {id: 7, title: "Gluten-free Waffles", about: "Yummy cinnamon butter crispy waffle with fruit", user_id: 1, board_id: 1},
# ])


