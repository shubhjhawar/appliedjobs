const mongoose =  require("mongoose");

const Schema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        jobs: {
            type: Number,
            required: [true, "Number of jobs is required"],
        }
    }
)

module.exports = mongoose.model("Jobs", Schema);