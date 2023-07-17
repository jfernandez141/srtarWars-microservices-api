const { Schema } = require('mongoose');

const planetSchema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    residents: [{type: String, ref: 'Character'}],
    films: [{type: String, ref: 'Film'}],
});

planetSchema.statics.list = async function () {
    return await this.find().populate("films", "title").populate("residents", "name");
};

planetSchema.statics.getById = async function (id) {
    return await this.findById(id).populate("films", "title").populate("residents", "name");
};

planetSchema.statics.getByName = async function (name) { 
    return await this.findOne({name}).populate("films", "title").populate("residents", "name");
}

planetSchema.statics.insert = async function (character) {
    return await this.create(character);
};

planetSchema.statics.deleteById = async function (id) {
    return await this.findByIdAndDelete(id);
};

planetSchema.statics.updateById = async function (id, update, option) {
    return await this.findByIdAndUpdate(id, update, option);
};

module.exports = planetSchema;