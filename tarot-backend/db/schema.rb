# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_11_053516) do

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.string "suit"
    t.string "cardType"
    t.text "summary"
    t.string "image"
    t.string "upright"
    t.string "reversed"
    t.text "desc"
  end

  create_table "draws", force: :cascade do |t|
    t.string "question"
    t.integer "card_ids"
  end

end
