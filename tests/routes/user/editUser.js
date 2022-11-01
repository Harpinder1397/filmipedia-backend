const expect = require('chai').expect;
const request = require('request');
const { TESTING_URL } = require('../../../constants/tests')

describe('User API', () => {
      describe('Edit field validation', () => {
        const user_id = '5dce835e3445a500388ec3c8'
        
        const payload = {
          firstName: "firstname",
          lastName: "Doe",
          email: "johndoe",
          password: "johndoe",
          employeeNo: "213",
          role: "employee"
        }
  
        it('Status', done => {
          let url = `${TESTING_URL}/user/${user_id}/edit`
          request.put(`${TESTING_URL}/user/${user_id}/edit`, {
            json: payload
          }, (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          })
        })

        it('Content', done => {
          request.put(`${TESTING_URL}/user/${user_id}/edit`, {
            json: payload
            }, (_, response) => {
            expect(response.body.errors.email.includes('Email is invalid'))
            done()
          })
        })
      })


      describe('Edit field validation succes', () => {
        const user_id = '5dce835e3445a500388ec3c8'
        
        const payload = {
          firstName: "firstname",
          lastName: "Doe",
          email: "johndoe@gmail.com",
          password: "776",
          employeeNo: "213"
        }
  
        it('Status', done => {
          const user_id = '5dce835e3445a500388ec3c8'
          request.put(`${TESTING_URL}/user/${user_id}/edit`, {
          json: payload
          }, (_, response) => {
          expect(response.statusCode).to.equal(200)
          done()
       })
        })

        it('Content', done => {
          request.put(`${TESTING_URL}/user/${user_id}/edit`, {
            json: payload
            }, (_, response) => {
            expect(response.body.message.includes('User updated successfully'))
            done()
          })
        })
      })
})

