class Board < ApplicationRecord
    validates :name, presence: true, uniqueness: { scope: :user_id,
    message: "You already have a board with that name" }

    belongs_to :user
    has_many :pins
end
