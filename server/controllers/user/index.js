import express from "express"
// import mongoose from "mongoose"
import userModel from "../../models/User/User.js";

const router = express.Router()

// findall
router.get("/getalluser", async (req, res) => {
    try {
        let check = await userModel.find({});
        res.status(200).json(check)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
})

// create collection
router.post("/register", async (req, res) => {
    try {
        let userInput = req.body;

        let { fullName, email, password, phone } = req.body;

        // password = await bcrypt.hash(password, 10)

        await userModel.create(userInput)
        res.status(200).json({ msg: "registered done" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
});


// create collection 
router.post("/createCollection", async (req, res) => {
    try {
        let check = await userModel.create({});
        console.log(`Collection created`);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

// create many
router.post("/registermany", async (req, res) => {
    try {
        let userInput = req.body
        let check = await userModel.create(userInput);
        console.log(`Collection created`);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

// findOne 
router.get("/findone", async (req, res) => {
    try {
        let check = await userModel.findOne({ email: "abc@gmail.com" });
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

// Findoneand delete 
router.delete("/findonedelete", async (req, res) => {
    try {
        let check = await userModel.findOneAndDelete({
            email: "abc@gmail.com",
        });
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

// find one and replace 
router.put("/findonereplace", async (req, res) => {
    try {
        let check = await userModel.findOneAndReplace(
            { email: "abc@gmail.com" },
            {
                "fullName": "zoheb",
                "email": "abc12@gmail.com",
                "phone": "3423432",
                "age": "32",
                "gender": "Male",
                "address": "34323hefiewhifew",
                "password": "abc@3432"
            },
            { new: true }
        );
        console.log(check);
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


// find one and update
router.put("/findoneupdate", async (req, res) => {
    try {
        let check = await userModel.findOneAndUpdate(
            { email: "abc12@gmail.com" },
            { $set: { fullName: "Afnaan" } },
            { new: true }
        );
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


// updatet one 
router.put("/updateone", async (req, res) => {
    try {
        let check = await userModel.updateOne(
      { email: "abc12@gmail.com" },
      { $set: { fullName: "Ali" } }
       );
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


// update many 
router.put("/updateMany", async (req, res) => {
    try {
         let check = await userModel.updateMany(
      { email: "abc12@gmail.com" },
      { $set: { fullName: "Suhail" } }
    );
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

// delete one
router.delete("/deleteOne", async (req, res) => {
    try {
        let check = await userModel.deleteOne({
      fullName: "suhail",
         });
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})


/// delete many 
router.delete("/deleteMany", async (req, res) => {
    try {
        let check = await userModel.deleteMany({
      fullName: "Suhail",
    });
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})

// drop collection 


router.delete("/dropcollection", async (req, res) => {
    try {
         let check = await userModel.collection.drop();
        console.log(`check `);
        res.status(200).json({ msg: check })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
})








export default router