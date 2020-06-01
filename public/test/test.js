describe("Test block", function() {
   'use strict';
    it('Test name and description', function() {
        // arrange
        let variable = 1;

        // act
        variable += 1;

        //assert
        assert.equal(variable, 2);
    })
});

mocha.run();
