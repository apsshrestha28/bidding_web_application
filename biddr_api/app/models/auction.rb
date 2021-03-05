class Auction < ApplicationRecord
  before_save :capitalize_title
  
  has_many :bids,-> { order('updated_at DESC') }, dependent: :destroy 
  belongs_to :user


  validates :title, presence:true, uniqueness: { case_sensitive: false }
  validates :description, presence:true
  validates :ends_at, presence:true
  validates :reserve_price, presence:true
  private

  def capitalize_title
      self.title.capitalize!
  end
end
