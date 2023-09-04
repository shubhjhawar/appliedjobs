const Jobs = require("./model");

const getData = async (req, res)=>{
    const name = req.params.name;

    const user = await Jobs.findOne({name});
    res.status(200).json({user});
};

const newData = async (req, res) => {
    const name = req.params.name;
    const { jobs } = req.body;

    try {
        const obj = await Jobs.findOne({ name }); // Use findOne to check if the document exists

        if (obj) {
            // Update the existing document
            const user = await Jobs.findOneAndUpdate(
                { name },
                { jobs }, // Specify the field to update and its new value
                { new: true }
            );

            res.status(200).json({ user });
        } else {
            // Create a new document
            const newUser = await Jobs.create({
                name,
                jobs
            });

            res.status(200).json({ user: newUser });
        }
    } catch (error) {
        console.error("Error updating/creating the document:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {getData, newData};