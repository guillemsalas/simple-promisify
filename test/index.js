const promisify = require('../src')
const expect = require('chai').expect

describe('promisify function', () => {
    it('should resolve if no error is provided', () => {
        const sampleFn = function(cb) {
            cb(null,'success')
        },
        promise = promisify(sampleFn)
        
        return promise().then(
            data => expect(data).to.equal('success')
        )
    })
    
    it('should reject if expection happens', () => {
        const sampleFn = function(cb) {
            cb(new Error("I should have been catched, but didn't"))
        },
        promise = promisify(sampleFn)
        
        return promise().then(
            data => { throw new Error("I should fail, but I didn't") },
            err => expect(err.message).to.equal("I should have been catched, but didn't")
        )
    })
    
    it('should pass the arguments before the callback', () => {
        const arg1 = { "asdf" : "qwer" }, arg2 = ['hello','world']
        
        const sampleFn = function(_arg1, _arg2, cb) {
            expect(_arg1).to.deep.equal(arg1)
            expect(_arg2).to.deep.equal(arg2)
            cb()
        }
        
        const promise = promisify(sampleFn)
        
        return promise(arg1, arg2)
    })
})