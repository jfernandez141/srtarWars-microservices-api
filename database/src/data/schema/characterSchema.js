const { Schema } = require("mongoose");
const {randomUUID} = require("crypto")

const characterSchema = new Schema({
    _id: {type:String, default:()=>randomUUID()},
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: "Planet" },
    films: [{ type: String, ref: "Film" }],
});

characterSchema.statics.list = async function () {
    return await this.find().populate("homeworld", "name").populate("films", "title");
};

characterSchema.statics.getById = async function (id) {
    return await this.findById(id).populate("homeworld", "name").populate("films", "title");
};
characterSchema.statics.getByName = async function (name) {
    return await this.findOne({ name })
        .populate("films", "title")
        .populate("homeworld", "name");
};

characterSchema.statics.insert = async function (character) { 
    return await this.create(character);
}

characterSchema.statics.deleteById = async function (id) { 
    return await this.findByIdAndDelete(id);
}

characterSchema.statics.updateById = async function (id, update) { 
    return await this.findByIdAndUpdate(id, update, {new: true});
}

module.exports = characterSchema;
