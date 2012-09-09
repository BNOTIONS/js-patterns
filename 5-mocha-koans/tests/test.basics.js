// Assign some assertion types from chai.js 
var assert = chai.assert,
    should = chai.should;


// 'describe' is used to describe a block of tests
describe("Mocha", function(){

    // you can nest describe blocks in order to improve narative
    // and reuse 'before' function (more on that later)
    describe("is a test framework", function(){

        // 'it' is the function where you the real testing
        it("for Node.js", function(){});

        // you can have as many 'it's as you like
        it("for the browser", function(){});

        // Try to use 'describe's and 'it's to form human readable sentances
        // about the expected behaviour of function
    });

});

describe("Something", function(){

    it("should", function(){
        assert.equal(true, false);
    });
});