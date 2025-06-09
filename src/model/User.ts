import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  userID: string;
  email: string;
  phoneNumber: string;
  institute: string;
  instituteCity: string;
  registrationID: string;
  password: string;
}

const UserSchema: Schema = new Schema(
  {
    userID: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      enum: [
        "Allen",
        "Aakash",
        "Resonance",
        "FIITJEE",
        "Narayana",
        "Vidyamandir Classes",
        "Bansal Classes",
        "Motion IIT JEE",
        "Career Point",
        "T.I.M.E.",
        "Sri Chaitanya",
      ],
      required: true,
    },
    instituteCity: {
      type: String,
      enum: [
        "Kota",
        "Delhi",
        "Mumbai",
        "Kolkata",
        "Chennai",
        "Bangalore",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        "Chandigarh",
      ],
      required: true,
    },
    registrationID: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  },
);

const UserModel =
  (mongoose.models.users as mongoose.Model<User>) ||
  mongoose.model<User>("users", UserSchema);

export default UserModel;
