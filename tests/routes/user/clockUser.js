const expect = require("chai").expect
const request = require("request")
const { TESTING_URL } = require("../../../constants/tests")

describe("Clock in/out API", () => {
  describe("Clock in/out API validation ERROR", () => {
    describe("state missing field", () => {
      const payload = {
        clockInTime: new Date().getTime(),
        state: "",
        status: "Lorem Ipsum"
      }
  
      const user_id = "5dce5e81449566003f835688"
  
      it("Status", done => {
        request.post(
          `${TESTING_URL}/user/${user_id}/clock`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          }
        )
      })
  
      it("Message", done => {
        request.post(
          `${TESTING_URL}/user/${user_id}/clock`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.body.errors.state[0]).to.equal("State is required")
            done()
          }
        )
      })
    })

    describe("clockInTime missing field", () => {
      const payload = {
        clockInTime: "",
        state: "in",
        status: "Lorem Ipsum"
      }
  
      const user_id = "5dce5e81449566003f835688"
  
      it("Status", done => {
        request.post(
          `${TESTING_URL}/user/${user_id}/clock`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          }
        )
      })
  
      it("Message", done => {
        request.post(
          `${TESTING_URL}/user/${user_id}/clock`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.body.errors.clockInTime[0]).to.equal("Time is required")
            done()
          }
        )
      })
    })

    describe("status missing field", () => {
      const payload = {
        clockInTime: new Date().getTime(),
        state: "in",
        status: ""
      }
  
      const user_id = "5dce5e81449566003f835688"
  
      it("Status", done => {
        request.post(
          `${TESTING_URL}/user/${user_id}/clock`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.statusCode).to.equal(400)
            done()
          }
        )
      })
  
      it("Message", done => {
        request.post(
          `${TESTING_URL}/user/${user_id}/clock`,
          {
            json: payload,
          },
          (_, response) => {
            expect(response.body.errors.status[0]).to.equal("Status is required")
            done()
          }
        )
      })
    })
    
  })
  describe("State validation", () => {
    const payload = {
      clockInTime: new Date().getTime(),
      state: "day-out",
      status: "Lorem ipsum"
    }

const user_id = "5dce5e81449566003f835688"

    it("Status", done => {
      request.post(
        `${TESTING_URL}/user/${user_id}/clock`,
        {
          json: payload,
        },
        (_, response) => {
          expect(response.statusCode).to.equal(400)
          done()
        }
      )
    })

    it("Message", done => {
      request.post(
        `${TESTING_URL}/user/${user_id}/clock`,
        {
          json: payload,
        },
        (_, response) => {
          expect(response.body.errors.state[0]).to.equal(
            "You have to provide a valid state"
          )
          done()
        }
      )
    })
  })

  describe("Attendance record success", () => {
    const payload = {
      clockInTime: new Date().getTime(),
      state: "in",
      status: "Lorem Ipsum"
    }

    const user_id = "5dce5e81449566003f835688"

    it("Status", done => {
      request.post(
        `${TESTING_URL}/user/${user_id}/clock`,
        {
          json: payload,
        },
        (_, response) => {
          expect(response.statusCode).to.equal(200)
          done()
        }
      )
    })

    it("Message", done => {
      request.post(
        `${TESTING_URL}/user/${user_id}/clock`,
        {
          json: payload,
        },
        (_, response) => {
          expect(response.body.message).to.equal(
            "Attendance recorded successfully"
          )
          done()
        }
      )
    })
  })

  describe("Get attendance API", () => {
    describe("Get attendance success", () => {
      const user_id = "5dce5e81449566003f835688"
      it("Status", done => {
        request.get(
          `${TESTING_URL}/user/${user_id}/clock`,
          {},
          (_, response) => {
            expect(response.statusCode).to.equal(200)
            done()
          }
        )
      })

      it("Content", done => {
        request.get(
          `${TESTING_URL}/user/${user_id}/clock`,
          {},
          (_, response) => {
            const body = JSON.parse(response.body)
            expect(body.attendance.length).to.not.equal(0)
            done()
          }
        )
      })
    })
  })
})
