import {
    addNewMock,
    getAllMocks,
    getMockById,
    updateMock,
    deleteMock
} from '../controllers/controllers';

const routes = (app) => {
    app.route('/mocks')
        .get(getAllMocks)
        .post(addNewMock);

    app.route('/mock/:MockId')
        .get(getMockById)
        .put(updateMock)
        .delete(deleteMock);
}

export default routes;
