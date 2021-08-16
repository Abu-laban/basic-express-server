'use strict';

const { server } = require('../src/server');
const supertest = require('supertest');
const request = supertest(server);

describe('middleware server', () => {
    it('should check the HOME root works SUCCESS', async () => {
        //arrange
        let param = '/';
        let status = 200;
        let text = 'Hello this is home root 😁';

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);
        expect(response.text).toBe(text)
    });

    it('should check the Person works SUCCESS', async () => {
        //arrange
        let param = '/person?name=Abulaban';
        let status = 200;

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);
    });

    it('should check the 500 err', async () => {
        //arrange
        let param = '/bad';
        let status = 500;

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);

    });

    it('should check the 404 NOT FOUND err', async () => {
        //arrange
        let param = '/notfound';
        let status = 404;

        //act
        const response = await request.get(param);

        //assert
        expect(response.status).toBe(status);

    });
})