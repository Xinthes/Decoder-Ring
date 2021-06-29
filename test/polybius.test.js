// Write your tests here!
const expect = require("chai").expect

const polybiusFunc = require("../src/polybius")

describe("polybiusFunc", () => {
const actual1 = polybiusFunc.polybius("hello")
const expected1 = "3251131343"
  it("should encode a message by translating each letter to number pairs", () => {
    expect(actual1).to.equal(expected1)
  })

const actual2 = polybiusFunc.polybius("jiffy")
const expected2 = "4242121245"
  it("should translate both 'i' and 'j' to 42", () => {
    expect(actual2).to.equal(expected2)
  })
  
const actual3 = polybiusFunc.polybius("Hello World")
const expected3 = "3251131343 2543241341"
  it("should leave spaces as is", () => {
    expect(actual3).to.equal(expected3)
  })
  
const actual4 = polybiusFunc.polybius("3251131343", false)
const expected4 = "hello"
  it("should decode a message by translating each letter to number pairs", () => {
    expect(actual4).to.equal(expected4)
  })

const actual5 = polybiusFunc.polybius("4242121245", false)
const expected5 = "(i/j)(i/j)ffy"
  it("should translate both 'i' and 'j' to 42", () => {
    expect(actual5).to.equal(expected5)
  })
  
const actual6 = polybiusFunc.polybius("3251131343 2543241341", false)
const expected6 = "hello world"
  it("should leave spaces as is", () => {
    expect(actual6).to.equal(expected6)
  })
  
const actual7 = polybiusFunc.polybius("325113134", false)
  it("should return false if the length of all numbers is odd", () => {
    expect(actual7).to.equal(false)
  })
})