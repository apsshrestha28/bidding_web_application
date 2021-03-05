class BidsController < ApplicationController
  before_action :authenticate_user!
  def create
    @auction = Auction.find params[:auction_id]
    @bid = Bid.new params.require(:bid).permit(:description)
    @bid.auction = @auction
    @bid.user = current_user
    if @bid.save
      redirect_to auction_path(@auction)
    else
      render 'auctions/show'
    end
  end
  
end
