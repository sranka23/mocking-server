import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MockSchema = new Schema({
    mock_name: {
        type: String,
        required: 'Enter a name for the mock'
    },
    mock_description: {
        type: String,
        required: 'Enter a description'
    },
    mock_response_data: {
        type: Object,
        default: {}
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
