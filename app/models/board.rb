class Board < ApplicationRecord
    validates :name, presence: true, uniqueness: { scope: :user_id,
    message: "You already have a board with that name" }
    validates :user_id, presence: true

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User
    has_many :pin_boards,
        primary_key: :id,
        foreign_key: :board_id,
        class_name: :PinBoard
    has_many :pins,
        through: :pin_boards, 
        source: :pin
end
