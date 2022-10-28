const assert = require('assert')
const { isTypedArray } = require('util/types')
const controller = require('./controller')

const expectedOutput =['Normal Weight','Low risk']

describe('Checking functions', () => {
    it('check bmi calculator',()=>{
        assert.equal(controller.calculateBMI(75,175),24.49)
    })
    it('Function for finding bmi category and helth risk',()=>{
        // var bool= checkEqual(controller.checkBmiCategory(24.49),expectedOutput)
        // assert.ok(bool)
        assert.equal(controller.checkBmiCategory(24.49)[0],expectedOutput[0])
        assert.equal(controller.checkBmiCategory(24.49)[1],expectedOutput[1])
    })
})


function checkEqual(first,second){
    if(first===second){
        return true;
    }
    return false
}