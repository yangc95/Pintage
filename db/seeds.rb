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
Board.destroy_all
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('pins')
ApplicationRecord.connection.reset_pk_sequence!('boards')

users = User.create([
    {username: "DemoUser",  password: "hunter10", email: "test@gmail.com"},
    {username: "test1", password: "hunter11", email: "test1@gmail.com"},
    {username: "test2", password: "hunter12", email: "test2@gmail.com"}
])

b = Board.create(name: "Saved", user_id: 1)
b = Board.create(name: "Travel", user_id: 1)

p = Pin.create(title: "Japanese Night Walk", about: "Nice night", user_id: 1, board_id: 1)
# file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/travel.jpg")
# p.photo.attach(io: file, filename: "travel.jpg")

p = Pin.create(title: "Japan Alter", about: "Sights", user_id: 1, board_id: 1)
# file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/travel1.jpg")
# p.photo.attach(io: file, filename: "travel1.jpg")

p = Pin.create(title: "Japan Day Walk", about: "Sights", user_id: 1, board_id: 1)
# file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/travel2.jpg")
# p.photo.attach(io: file, filename: "travel2.jpg")

p = Pin.create(title: "Japanese Calligraphy", about: "Writing", user_id: 1, board_id: 1)
# file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/travel3.jpg")
# p.photo.attach(io: file, filename: "travel3.jpg")

p = Pin.create(title: "Hills", about: "Over the mountain and through the woods", user_id: 1, board_id: 2)
# file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/travel12.jpg")
# p.photo.attach(io: file, filename: "travel12.jpg")

p = Pin.create(title: "Concert", about: "Lights galore", user_id: 1, board_id: 2)
# file = URI.open("https://pin-tage-seeds.s3.amazonaws.com/travel10.jpg")
# p.photo.attach(io: file, filename: "travel10.jpg")

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

b = Board.create(name: "Saved", user_id: 2)
pins = Pin.create([
    {id: 7, title: "Pin1", about: "Nicely battered crispy crunch", user_id: 2, board_id: 1},
    {id: 8, title: "Pin2", about: "So light, fluffy, and creamy frosting", user_id: 2, board_id: 1},
])