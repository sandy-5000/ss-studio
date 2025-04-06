import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 2000,
    },
    price: {
        type: Number,
        required: true,
        min: 1, // Ensure price is at least a small positive value
    },
    collection: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
        // You might want to create a separate Category model for better organization
        // and use a ObjectId reference here.
    },
    brand: {
        type: String,
        trim: true,
        maxlength: 100,
    },
    images: [{
        type: String, // Array of image URLs or paths
        required: false,
    }],
    stock_quantity: {
        type: Number,
        required: false,
        min: 0,
        default: 0,
    },
    sku: {
        type: String,
        unique: true,
        trim: true,
        minlength: 10,
        maxlength: 50,
        // Consider adding a validation for a specific SKU format if needed
    },
    is_available: {
        type: Boolean,
        default: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    // You can add more specific details based on your product types
    // For example:
    // color: { type: String },
    // size: { type: String },
    // material: { type: String },
    // ratings: [{ userId: mongoose.Schema.Types.ObjectId, rating: Number }],
    // ...
});

productSchema.index({ name: 'text', category: 'text', brand: 'text' }); // For text-based searching
productSchema.index({ category: 1 });
productSchema.index({ price: 1 });
productSchema.index({ is_available: 1 });
productSchema.index({ created_at: -1 });

// Middleware to update the 'updated_at' field on save
productSchema.pre('save', function (next) {
    this.updated_at = new Date();
    next();
});

export default mongoose.model('Product', productSchema);