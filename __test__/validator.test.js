'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe("validator middleware", () => {
    it("should check the Person query name is NOT valid", async () => {
        let param = "/person";
        let status = 500;
        const response = await request.get(param);
        expect(response.status).toBe(status);
    });
    it("should check the Person query name is valid", async () => {
        let param = "/person?name=Tariq";
        let status = 200;
        const response = await request.get(param);
        expect(response.status).toBe(status);
    });
});