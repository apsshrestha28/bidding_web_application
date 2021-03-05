class AddEndsAtToAuctions < ActiveRecord::Migration[6.0]
  def change
      add_column :auctions, :ends_at, :timestamp 
  end
end
