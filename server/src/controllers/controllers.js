import mongoose from 'mongoose';
import { MockSchema } from '../models/models';

const Mock = mongoose.model('Mock', MockSchema);

export const addNewMock = (req, res) => {
    let newMock = new Mock(req.body);
    newMock.save((err, Mock) => {
        if (err) {
            res.send(err);
        }
        res.json(Mock);
    });
}

export const getAllMocks = (req, res) => {
    Mock.find({}, (err, Mock) => {
        if (err) {
            res.send(err);
        }
        res.json(Mock);
    });
}

export const getMockById = (req, res) => {
    Mock.findById(req.params.MockId, (err, Mock) => {
        if (err) {
            res.send(err);
        }
        res.json(Mock);
    });
}

export const updateMock = (req, res) => {
    Mock.findOneAndUpdate({ _id: req.params.MockId }, req.body, { new: true, useFindAndModify: false }, (err, Mock) => {
        if (err) {
            res.send(err);
        }
        res.json(Mock);
    });
}

export const deleteMock = (req, res) => {
    Mock.deleteOne({ _id: req.params.MockId }, (err, Mock) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Mock has been successfully deleted' });
    });
}
