const expect = require('chai').expect;
const request = require('request');
const { TESTING_URL } = require('../../../constants/tests')

// we will send a api hit to /users 
// and we will get list of users
// status 200
// content users array length

describe('Get Users API', () => {
  describe('Get users success', () => {
    it('Status', done => {
      request.get(`${TESTING_URL}/users`, {}, (_, response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })

    it('Content', done => {
      request.get(`${TESTING_URL}/users`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(body.users.length).to.not.equal(0)
        done()
      })
    })
  })
})
