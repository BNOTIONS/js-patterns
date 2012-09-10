// Assign some assertion types from chai.js 
var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();


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

describe("Chai", function(){

    describe("is a JS Assertion library with", function(){

        it("'assert' style matchers", function(){
            assert.equal(2, 1+1);
            // Expected--^   |
            // Result---------
        });

        it("'expect' style matchers", function(){
            var result = 1 + 1;
            expect(result).to.be.equal(2);
        });

        it("'should' style matchers", function(){
            var result = 1 + 1;
            result.should.equal(2);
        });

        it("'should' style matchers", function(){
            var result = 1 + 1;
            result.should.equal(3);
        });


        it("'should' style matchers", function(){
            var result = 1 + 1;
            result.should.equal(4);
        });



    });


});