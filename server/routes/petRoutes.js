const express = require("express");
const Pet = require("../models/Pet");

const router = express.Router();

router.get("/:pawAdharId", async (req, res) => {
  try {
    const { pawAdharId } = req.params;

    const pet = await Pet.findOne({ pawAdharId });

    if (!pet) {
      return res.status(404).json({
        success: false,
        message: "Paw-Adhar not found.",
      });
    }

    res.json({
      success: true,
      pet,
    });
  } catch (error) {
    console.error("Get pet error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to retrieve Paw-Adhar.",
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      pawAdharId,
      name,
      dob,
      gender,
      breed,
      owner,
      address,
      specialId,
      photo,
    } = req.body;

    if (!pawAdharId || !name) {
      return res.status(400).json({
        success: false,
        message: "Paw-Adhar ID and pet name are required.",
      });
    }

    const existingPet = await Pet.findOne({ pawAdharId });

    if (existingPet) {
      return res.status(409).json({
        success: false,
        message: "A pet with this Paw-Adhar ID already exists.",
      });
    }

    const pet = await Pet.create({
      pawAdharId,
      name,
      dob,
      gender,
      breed,
      owner,
      address,
      specialId,
      photo,
    });

    res.status(201).json({
      success: true,
      pet,
    });
  } catch (error) {
    console.error("Create pet error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to create Paw-Adhar.",
    });
  }
});

module.exports = router;