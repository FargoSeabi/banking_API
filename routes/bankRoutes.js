const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

/* =========================
   CREATE ACCOUNT
========================= */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "Account created successfully",
      user
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* =========================
   DEPOSIT
========================= */
router.post("/deposit/:id", async (req, res) => {
  try {
    const { amount } = req.body;

    const user = await User.findById(req.params.id);
    user.balance += amount;

    await user.save();

    res.json({
      message: "Deposit successful",
      balance: user.balance
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* =========================
   WITHDRAW
========================= */
router.post("/withdraw/:id", async (req, res) => {
  try {
    const { amount } = req.body;

    const user = await User.findById(req.params.id);

    if (user.balance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    user.balance -= amount;
    await user.save();

    res.json({
      message: "Withdrawal successful",
      balance: user.balance
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* =========================
   TRANSFER
========================= */
router.post("/transfer", async (req, res) => {
  try {
    const { fromId, toId, amount } = req.body;

    const sender = await User.findById(fromId);
    const receiver = await User.findById(toId);

    if (sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    res.json({ message: "Transfer successful" });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

/* =========================
   CHECK BALANCE
========================= */
router.get("/balance/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.json({
      name: user.name,
      balance: user.balance
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
