class Board < ApplicationRecord
    validates :name, :user_id, presence: true, uniqueness: { scope: :user_id,
    message: "You already have a board with that name" }

    belongs_to :user
    has_many :pins,
        foreign_key: :board_id,
        class_name: :Pin
end
