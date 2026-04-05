const mongoose = require('mongoose');

const repairJobSchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      unique: true,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    customerAddress: {
      type: String,
      required: true,
    },
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    deviceType: {
      type: String,
      enum: ['laptop', 'desktop', 'mobile', 'tablet', 'other'],
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    serialNumber: {
      type: String,
    },
    problemDescription: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['received', 'diagnosing', 'waiting_for_parts', 'in_progress', 'completed', 'ready_for_pickup'],
      default: 'received',
    },
    estimatedCost: {
      type: Number,
    },
    actualCost: {
      type: Number,
    },
    technicianAssigned: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    repairNotes: {
      type: String,
    },
    qrCode: {
      type: String,
    },
    partsUsed: [
      {
        partId: mongoose.Schema.Types.ObjectId,
        partName: String,
        quantity: Number,
        cost: Number,
      },
    ],
    receivedDate: {
      type: Date,
      default: Date.now,
    },
    completedDate: {
      type: Date,
    },
    expectedCompletionDate: {
      type: Date,
    },
    updates: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'RepairUpdate',
      },
    ],
    warranty: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Warranty',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('RepairJob', repairJobSchema);