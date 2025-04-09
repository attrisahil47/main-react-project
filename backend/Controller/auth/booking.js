const { message } = require("antd");
const User = require("../../Models/user.model");
const BookingModel = require("../../Models/booking.model");
const { bookingValidation } = require("../../Services/validation_schema");

const bookingController = async (req, res, next) => {
  try {
    // Validate incoming data using Joi
    const bookingValues = await bookingValidation.validateAsync(req.body);
    const { fullName, emailAddress, phone, bookingDate, bookingTime, doctor, message } = bookingValues;

    console.log("Booking Request:", bookingValues);

    // Corrected email check
    const existingUser = await User.findOne({ emailAddress });

    if (!existingUser) {
      return res.status(400).json({ success: false, message: "User not found. Please sign up." });
    }

    // Save new booking
    const newBooking = new BookingModel({
      fullName,
      emailAddress,
      phone,
      bookingDate,
      bookingTime,
      doctor,
      message,
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      message: "Booking confirmed successfully!",
      data: newBooking,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = bookingController;
