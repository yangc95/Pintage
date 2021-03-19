# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all 
ApplicationRecord.connection.reset_pk_sequence!('users')
ApplicationRecord.connection.reset_pk_sequence!('pins')

users = User.create([
    {username: "test",  password: "hunter10", email: "test@gmail.com"},
    {username: "test1", password: "hunter11", email: "test1@gmail.com"},
    {username: "test2", password: "hunter12", email: "test2@gmail.com"}
])

pins = Pin.create([
    {title: "Japanese Night Walk", about: "Nice night", user_id: 1},
    {title: "Japan Sights", about: "Red Alter", user_id: 1},
    {title: "Japanese Day Walk", about: "Beautiful day streets", user_id: 1}
])

