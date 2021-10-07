class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :serv_type
      t.string :cost
      t.belongs_to :worker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
