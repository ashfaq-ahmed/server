const request = require('supertest');
const app = require('../../app');
jest.setTimeout(5000)
describe(`Partners`, () => {

    it(`Should respond with an error when search radius is missing`, (done) => {
        request(app).get(`/api/partners?lat=51.5144636&lon=-0.142571`)
            .expect('Content-Type', /json/)
            .expect(400)
            .end(done)
    });


    it(`Should respond with an error due to invalid center point(Lon)`, (done) => {
        request(app).get(`/api/partners?lat=51.5144636&lon=-200`)
            .expect('Content-Type', /json/)
            .expect(400)
            .end(done)
    });

    it(`Should respond with an error due to invalid center point(Lat)`, (done) => {
        request(app).get(`/api/partners?lat=100&lon=-0.142571`)
            .expect('Content-Type', /json/)
            .expect(400)
            .end(done)
    });


    it(`Should respond with a list of locations with proper request`, (done) => {
        request(app).get(`/api/partners?lat=51.5144636&lon=-0.142571&distance=30`)
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                expect(res.body.length).toBeGreaterThan(0);
                expect(res.body.length).toEqual(2);
                done()
            });
    });
})