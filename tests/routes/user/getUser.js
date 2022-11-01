const expect = require('chai').expect
const request = require('request')
const { TESTING_URL } = require('../../../constants/tests')

describe('Get User API', () => {
  describe('Get user success', () => {
    const user_id = '5dce5e81449566003f835688'
    it('Status', done => {
      request.get(`${TESTING_URL}/user/${user_id}`, {}, (_, response) => {
        expect(response.statusCode).to.equal(200)
        done()
      })
    })

    it('Content', done => {
      request.get(`${TESTING_URL}/user/${user_id}`, {}, (_, response) => {
        const body = JSON.parse(response.body)
        expect(body.user.length).to.not.equal(0)
        done()
      })
    })
  })
})
