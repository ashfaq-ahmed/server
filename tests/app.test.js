const request = require('supertest');
const app = require('../app');

describe(`App`, () => {
    it(`Should be created successfully`, () => {
        expect(app).toBeDefined()
    })
})