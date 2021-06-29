// Write your tests here!
const expect = require("chai").expect

const caesarFunc = require("../src/caesar")


describe("caesarFunc", () => {
const actual1 = caesarFunc.caesar("hello", 0)
  it("should return false if shift value is 0", () => {
    expect(actual1).to.equal(false)
  })

const acutal = caesarFunc.caesar("hello")
  it("should return false if no shift value is provided", () => {
    expect(acutal).to.equal(false)
  })
const actual2 = caesarFunc.caesar("hello", 29)
  it("should return false if shift value is more than 25", () => {
    expect(actual2).to.equal(false)
  })

const actual3 = caesarFunc.caesar("hello", -28)
  it("should return false if shift value is less than -25", () =>{
    expect(actual3).to.equal(false)
  })

const actual4 = caesarFunc.caesar("hello", 5)
const expected1 = "mjqqt"
  it("should encode a message by shifting letters", () => {
    expect(actual4).to.equal(expected1)
  })

const actual5 = caesarFunc.caesar("hello world!", 14)
const expected2 = "vszzc kcfzr!"
  it("should leave spaces and other symbols as is", () => {
    expect(actual5).to.equal(expected2)
  })

const actual6 = caesarFunc.caesar("HeLlO", 20)
const expected3 = "byffi"
  it("should ignore capital letters", () => {
    expect(actual6).to.equal(expected3)
  })

const actual7 = caesarFunc.caesar("animals in a zoo", 8)
const expected4 = "ivquita qv i hww"
  it("should appropriately handle letters at the end of the alphabet", () => {
    expect(actual7).to.equal(expected4)
  })

const actual8 = caesarFunc.caesar("hello", -10)
const expected5 = "xubbe"
  it("should allow for a negative shift that will shift to the left", () => {
    expect(actual8).to.equal(expected5)
  })

const actual9 = caesarFunc.caesar("mjqqt", 5, false)
const expected6 = "hello"
  it("should encode a message by shifting letters", () => {
    expect(actual9).to.equal(expected6)
  })

const actual10 = caesarFunc.caesar("vszzc kcfzr!", 14, false)
const expected7 = "hello world!"
  it("should leave spaces and other symbols as is", () => {
    expect(actual10).to.equal(expected7)
  })

const actual11 = caesarFunc.caesar("ByFfI", 20, false)
const expected8 = "hello"
  it("should ignore capital letters", () => {
    expect(actual11).to.equal(expected8)
  })

const actual12 = caesarFunc.caesar("ivquita qv i hww", 8, false)
const expected9 = "animals in a zoo"
  it("should appropriately handle letters at the end of the alphabet", () => {
    expect(actual12).to.equal(expected9)
  })

const actual13 = caesarFunc.caesar("xubbe", -10, false)
const expected10 = "hello"
  it("should allow for a negative shift that will shift to the left", () => {
    expect(actual13).to.equal(expected10)
  })
})
 