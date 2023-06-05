const Chat = require("../model/chat");
const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller, isAuthenticated } = require("../middleware/auth");

//creating  new chat

router.post(
  "/create-new-chat",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { groupTitle, userId, sellerId } = req.body;

      const isChatExist = await Chat.findOne({ groupTitle });

      if (isChatExist) {
        const chat = isChatExist;
        res.status(201).json({
          success: true,
          chat,
        });
      } else {
        const chat = await Chat.create({
          members: [userId, sellerId],
          groupTitle: groupTitle,
        });

        res.status(201).json({
          success: true,
          chat,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

//get all chat with seller

router.get(
  "/get-all-chat-with-seller/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const chats = await Chat.find({
        members: {
          $in: [req.params.id],
        },
      }).sort({ updatedAt: -1, createdAt: -1 });

      res.status(201).json({
        success: true,
        chats,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get user conversations
router.get(
  "/get-all-chat-user/:id",
  isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const chats = await Chat.find({
        members: {
          $in: [req.params.id],
        },
      }).sort({ updatedAt: -1, createdAt: -1 });

      res.status(201).json({
        success: true,
        chats,
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  })
);


// update the last message
router.put(
  "/update-last-message/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { lastMessage, lastMessageId } = req.body;

      const chat = await Chat.findByIdAndUpdate(req.params.id, {
        lastMessage,
        lastMessageId,
      });

      res.status(201).json({
        success: true,
        chat,
      });
    } catch (error) {
      return next(new ErrorHandler(error), 500);
    }
  })
);

module.exports = router;
