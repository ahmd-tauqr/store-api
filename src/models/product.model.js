import mongoose, { Schema } from 'mongoose';

import { SIZES, AVAILABILITY } from '../config/constants';

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    shortDescription: {
      type: String,
      required: true,
    },
    fullDescription: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    seller: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Seller',
      },
    ],
    tags: [
      {
        type: String,
      },
    ],
    category: [
      {
        type: String,
      },
    ],
    images: [
      {
        type: Schema.Types.Mixed,
        required: true,
      },
    ],
    availability: {
      type: String,
      enum: AVAILABILITY,
      required: true,
    },
    price: {
      type: Schema.Types.Mixed,
      required: true,
    },
    sizes: [
      {
        type: Schema.Types.Mixed,
        enum: SIZES,
      },
    ],
    ratings: {
      type: Schema.Types.Mixed,
    },
    reviews: [
      {
        type: String,
      },
    ],
    policies: [
      {
        type: Schema.Types.Mixed,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const ProductModel = mongoose.model('Product', ProductSchema);
