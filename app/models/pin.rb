# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  about      :text             not null
#  user_id    :integer          not null
#  board_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pin < ApplicationRecord
    validates :title, :about, :user_id, presence: true

    belongs_to :user
    belongs_to :board,
        foreign_key: :board_id,
        class_name: :Board
    has_one_attached :photo
end
