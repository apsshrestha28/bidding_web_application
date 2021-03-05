class CreateBids < ActiveRecord::Migration[6.0]
  def change
    create_table :bids do |t|
      t.integer :description
      t.references :auction, null: false, foreign_key: true

      t.timestamps
    end
  end
end
