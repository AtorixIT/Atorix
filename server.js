const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Initialize dotenv to use environment variables
dotenv.config();

// Create an Express app
const app = express();

// Middleware
app.use(cors({
    origin: ['https://www.atorixit.com', 'https://x4qfpjc0-3000.inc1.devtunnels.ms/', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://AtorixIT:NKsaperp%40123@cluster0.sp2pm.mongodb.net/mydatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Define a Schema for form submissions
const formSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    message: String,
    products: [String], // Array to hold selected products
    timestamp: { type: Date, default: Date.now }
});

// Create a Model based on the schema
const data = mongoose.model('data', formSchema);

// POST route to save form data
app.post('/api/data', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message, products } = req.body;

        // Validate data before saving
        if (!firstName || !lastName || !email || !phone || !message || !products) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new form document
        const newForm = new data({
            firstName,
            lastName,
            email,
            phone,
            message,
            products
        });

        // Save the document to MongoDB
        await newForm.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit form' });
    }
});

// GET route to fetch all form submissions (for admin use, if needed)
app.get('/api/data', async (req, res) => {
    try {
        const forms = await data.find();
        res.status(200).json(forms);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch form submissions' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
