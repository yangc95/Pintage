class PinBoard < ApplicationRecord
    validates :pin_id, :board_id, presence: true

    belongs_to :pin,
        foreign_key: :pin_id,
        class_name: :Pin
    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
end
