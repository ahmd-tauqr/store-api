import mongoose, { Schema } from 'mongoose';

const SellerSchema = mongoose.Schema(
  {
    sellerName: {
      type: String,
      required: true,
    },
    contactInfo: {
      type: Schema.Types.Mixed,
      required: true,
    },
    ratings: {
      type: Schema.Types.Mixed,
    },
    reviews: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const SellerModel = mongoose.model('Seller', SellerSchema);
