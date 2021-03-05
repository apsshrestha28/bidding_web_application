class AddReservePriceToAuctions < ActiveRecord::Migration[6.0]
    def change
      add_column :auctions, :reserve_price, :integer
  end
end
