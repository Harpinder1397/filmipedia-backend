const expect = require("chai").expect
const request = require("request")
const { TESTING_URL } = require("../../../constants/tests")

describe("Contact Api", () => {
  describe("Contact validation ERROR", () => {
    describe("Contact Type is required", () => {
      const payload = {
        type: "",
        serviceType: "design",
        state: "mobile",
        name: "test",
        email: "test@gmail.com",
        phoneNo: "99899797979",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.type[0]).to.equal("Type is required")
            done()
          }
        )
      })
    })

    describe("Contact Type Validation", () => {
      const payload = {
        type: "wrong-type",
        serviceType: "design",
        state: "mobile",
        name: "test",
        email: "test@gmail.com",
        phoneNo: "99899797979",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.type[0]).to.equal(
              "You have to provide a valid type"
            )
            done()
          }
        )
      })
    })

    describe("Contact Service Type is required", () => {
      const payload = {
        type: "business",
        serviceType: "",
        state: "mobile",
        name: "test",
        email: "test@gmail.com",
        phoneNo: "99899797979",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.serviceType[0]).to.equal(
              "Service Type is required"
            )
            done()
          }
        )
      })
    })

    describe("Contact Service Type Validation", () => {
      const payload = {
        type: "business",
        serviceType: "wrong-service-type",
        state: "mobile",
        name: "test",
        email: "test@gmail.com",
        phoneNo: "99899797979",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.serviceType[0]).to.equal(
              "You have to provide a valid service type"
            )
            done()
          }
        )
      })
    })

    describe("Contact State is required", () => {
      const payload = {
        type: "business",
        serviceType: "development",
        state: "",
        name: "test",
        email: "test@gmail.com",
        phoneNo: "9989979797",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.state[0]).to.equal("State is required")
            done()
          }
        )
      })
    })

    describe("Contact State validation", () => {
      const payload = {
        type: "business",
        serviceType: "development",
        state: "wrong-state",
        name: "test",
        email: "test@gmail.com",
        phoneNo: "9989979797",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.state[0]).to.equal(
              "You have to provide a valid state"
            )
            done()
          }
        )
      })
    })

    describe("Contact Name is required", () => {
      const payload = {
        type: "business",
        serviceType: "development",
        state: "mobile",
        name: "",
        email: "test@gmail.com",
        phoneNo: "9989979797",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.name[0]).to.equal("Name is required")
            done()
          }
        )
      })
    })

    describe("Contact Email is required", () => {
      const payload = {
        type: "business",
        serviceType: "development",
        state: "mobile",
        name: "test",
        email: "",
        phoneNo: "9989979797",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.email[0]).to.equal("Email is required")
            done()
          }
        )
      })
    })

    describe("Contact Email is invalid", () => {
      const payload = {
        type: "business",
        serviceType: "development",
        state: "mobile",
        name: "test",
        email: "test",
        phoneNo: "9989979797",
        message: "test",
      }
      it("Status", done => {
        request.post(
          `${TESTING_URL}/contact`,
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
          `${TESTING_URL}/contact`,
          { json: payload },
          (_, response) => {
            expect(response.body.errors.email[0]).to.equal("Email is invalid")
            done()
          }
        )
      })
    })
  })

  describe("Contact Successfully", () => {
    const payload = {
      type: "business",
      serviceType: "development",
      state: "mobile",
      name: "test",
      email: "test@gmail.com",
      phoneNo: "9989979797",
      message: "test",
    }

    it("Status", done => {
      request.post(
        `${TESTING_URL}/contact`,
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
