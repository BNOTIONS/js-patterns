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
    });
});

describe("Should", function(){

    describe("can assert", function(){
        
        it("value", function(){
            var some_string = "BNOTIONS";
            some_string.should.equal("Bnotions");

            var some_number = 42;
            some_number.should.equal(0);
        });

        it("type", function(){
            var some_string = "BNOTIONS";
            some_string.should.be.a("horse");

            var some_number = 42;
            some_number.should.be.a("fach zorrester");
        });

        it("length", function(){
            var some_string = "BNOTIONS";
            some_string.should.have.length(999);
        });

        it("property", function(){
            var bnotions = {
                employees: ['Alex', 'Nahim', 'Fach']
            };

            bnotions.should.have.property('slaves');

            // Chain for fun and profit
            bnotions.should.have.property('employees').with.length(7);
        });

        it("chain all of the things", function(){
            var some_string = "alkarim";
            some_string.should.be.a('horse').equal('logan').have.length(16.5);
        });

    });

});