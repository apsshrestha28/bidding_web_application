class AuctionsController < ApplicationController
  before_action :authenticate_user!, except:[:index, :show]

  def index
    @auctions = Auction.all.order("created_at DESC") 
  end

  def new
    @auction = Auction.new 
  end
  
  def create
    @auction=Auction.new auction_params
    @auction.user = current_user
    if @auction.save
      flash[:notice] = "Auction created successfully"
      redirect_to auction_path(@auction)
    else
      render :new
    end
  end

  def show
    @auction = Auction.find params[:id]
    @bid = Bid.new
    @bids = @auction.bids
    @user=@auction.user
  end


  private

  def auction_params
    params.require(:auction).permit(:title, :description, :ends_at, :reserve_price)
  end

end
