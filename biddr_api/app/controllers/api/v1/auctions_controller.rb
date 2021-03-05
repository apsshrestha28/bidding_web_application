class Api::V1::AuctionsController < Api::ApplicationController
  before_action :authenticate_user!, except:[:index, :show]
  before_action :find_auction, only: [:show]
  def index
    auctions = Auction.order(created_at: :desc)
 
    render(json: auctions, each_serializer: AuctionCollectionSerializer)
  end

  def show
    @auction = Auction.find(params[:id])
    render(json: @auction)
  end

  def create
    auction = Auction.new auction_params
    auction.user = current_user
    if auction.save
      render json: { id: auction.id }
    else
      render(
        json: { errors: auction.errors },
        status: 422 
      )
    end
  end

  private
  def find_auction
    @auction||=Auction.find params[:id]
  end
  def auction_params
    params.require(:auction).permit(:title, :description, :ends_at, :reserve_price)
  end
end
