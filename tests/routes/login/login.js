const expect = require("chai").expect
const request = require("request")
const { TESTING_URL } = require("../../../constants/tests")

describe("Login User Api", () => {
  describe("Login User validation ERROR", () => {
    describe("Login User email is required", () => {
      const payload = {
        email: "",
        password: "john",
      }

      it("Status", done => {
        request.post(
          `${TESTING_URL}/login`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          }
        )
      })

      it("Content", done => {
        request.post(
          `${TESTING_URL}/login`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.email[0]).to.equal("Email is required")
            done()
          }
        )
      })
    })

    describe("Login User invalid email", () => {
      const payload = {
        email: "john",
        password: "john",
      }

      it("Status", done => {
        request.post(
          `${TESTING_URL}/login`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          }
        )
      })

      it("Content", done => {
        request.post(
          `${TESTING_URL}/login`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.email[0]).to.equal("Email is invalid")
            done()
          }
        )
      })
    })

    describe("Login User password is required", () => {
      const payload = {
        email: "johndoe@gmail.com",
        password: "",
      }

      it("Status", done => {
        request.post(
          `${TESTING_URL}/login`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          }
        )
      })

      it("Content", done => {
        request.post(
          `${TESTING_URL}/login`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.password[0]).to.equal(
              "Password is required"
            )
            done()
          }
        )
      })
    })

    describe("Login User Successfully", () => {
      const payload = {
        email: "johndoe@recraftrelic.com",
        password: "johndoe",
      }

      it("Status", done => {
        request.post(
          `${TESTING_URL}/login`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(200)
            done()
          }
        )
      })
    })
  })
})
