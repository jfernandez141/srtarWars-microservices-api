const { Schema } = require("mongoose");

const filmSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: [{ type: String, ref: "Character" }],
    planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
    return await this.find().populate("planets", "name").populate("characters", "name");
};

filmSchema.statics.getById = async function (id) {
    return await this.findById(id).populate("planets", "name").populate("characters", "name");
};

filmSchema.statics.getByName = async function (title) {
    return await this.findOne({ title })
        .populate("characters", "name")
        .populate("planets", "name");
};

filmSchema.statics.insert = async function (character) {
    return await this.create(character);
};

filmSchema.statics.deleteById = async function (id) {
    return await this.findByIdAndDelete(id);
};

filmSchema.statics.updateById = async function (id, update, option) {
    return await this.findByIdAndUpdate(id, update, option);
};

module.exports = filmSchema;
