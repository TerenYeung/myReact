var expect = require('chai').expect;

describe('some simple tests', () => {

    it('test equal', () => {
        expect(4 + 5).to.equal(9);
    })

    it('test not equal', () => {
        expect(4 + 5).to.not.equal(10);
    })

})
