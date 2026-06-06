import mongoose, { Schema, Document, Model } from "mongoose";

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  productInterest?: string;
  requirements?: string;
  source: "popup" | "contact_page" | "home_page";
  createdAt: Date;
}

const LeadSchema = new Schema<ILead>(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, default: "" },
    productInterest: { type: String, trim: true, default: "" },
    requirements: { type: String, trim: true, default: "" },
    source: {
      type: String,
      enum: ["popup", "contact_page", "home_page"],
      required: true,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite during hot-reload
const Lead: Model<ILead> =
  mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);

export default Lead;
