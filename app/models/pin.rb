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
    belongs_to :board
    has_one_attached :photo
end
