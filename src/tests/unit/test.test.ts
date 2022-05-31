import assert from 'assert'

describe("Test", () => {
    it('should be equal', () => {
        assert.equal(1, 1);
    })

    it('should NOT be equal', () => {
        assert.notEqual(1, 2);
    })
})