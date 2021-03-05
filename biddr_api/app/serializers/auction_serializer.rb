class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :ends_at, 
    :reserve_price,
    :created_at,
    :updated_at
  )
  has_many :bids


  class BidSerializer < ActiveModel::Serializer 
    attributes(
      :id,
      :description,
      :created_at
    )
  end

end