// Write your tests here!
const expect = require("chai").expect

const substitutionFunc = require("../src/substitution")

describe("substitutionFunc", () => {
const actual1 = substitutionFunc.substitution("hello")
const expected1 = false
  it("should return false if the substitution alphabet is missing", () => {
  expect(actual1).to.equal(expected1)
  })
  
const actual2 = substitutionFunc.substitution("hello", "kqoyxbitdlnazhrjpcfvs")
const expected2 = false
  it("should return false if the substitution alphabet is not exactly 26 characters", () => {
    expect(actual2).to.equal(expected2)
  })
  
const actual3 = substitutionFunc.substitution("hello", "vltcjdnxeuocmbswihyapgkrfq")
const expected3 = false
  it("should return false if th substitution alphabet does not contain unique characters", () => {
    expect(actual3).to.equal(expected3)
  })
  
const actual4 = substitutionFunc.substitution("hello", "nkwsrefudpgtzibacqhmxvlojy")
const expected4 = "urttb"
  it("should encode a message by using the given substitution alpabet", () => {
    expect(actual4).to.equal(expected4)
  })
  
const actual5 = substitutionFunc.substitution("hello", "nkwsref$dpgtzi&acqhmxvlojy")
const expected5 = "$rtt&"
  it("should work with any kind of key with unique characters", () => {
    expect(actual5).to.equal(expected5)
  })
  
const actual6 = substitutionFunc.substitution("hello world", "nkwsref$dpgtzi&acqhmxvlojy")
const expected6 = "$rtt& l&qts"
  it("should preserve spaces", () => {
    expect(actual6).to.equal(expected6)
  })
  
const actual7 = substitutionFunc.substitution("urttb", "nkwsrefudpgtzibacqhmxvlojy", false)
const expected7 = "hello"
  it("should encode a message by using the given substitution alpabet", () => {
    expect(actual7).to.equal(expected7)
  })
  
const actual8 = substitutionFunc.substitution("$rtt&", "nkwsref$dpgtzi&acqhmxvlojy", false)
const expected8 = "hello"
  it("should work with any kind of key with unique characters", () => {
    expect(actual8).to.equal(expected8)
  })
  
const actual9 = substitutionFunc.substitution("$rtt& l&qts", "nkwsref$dpgtzi&acqhmxvlojy", false)
const expected9 = "hello world"
  it("should preserve spaces", () => {
    expect(actual9).to.equal(expected9)
  })
})