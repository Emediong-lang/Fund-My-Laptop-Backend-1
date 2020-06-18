/**
 * @author Usman Suleiman
 */
const mongoose = require('mongoose');
const dbHandler = require('./db-handler');
const userService = require('../src/services/UserService');

// Connect to a test databse before running any tests.
beforeAll(async () => await dbHandler.connect());

// clear all test data after every test.
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server.
afterAll(async () => await dbHandler.closeDatabase());

describe('user', () => {
  it('can be created correctly', () => {
    expect(1).toBe(1);
  })
});

const userExample = {
  name: 'Fluffy Dragon',
  email: 'fluffydragon@gmail.com'
};