var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("String Calculator", function(){

    var sut = new StringCalculator();
    // Subject Under Test (aka sut)
    // is the piece of code you are testing

    it("should return 0 for empty string", function(){
        sut.add("").should.equal(0);
    });

    describe("given one number", function(){
        it("should return 0 for '0'", function(){
            sut.add("0").should.equal(0);
        });

        it("should return 1 for '1'", function(){
            sut.add("1").should.equal(1);
        });
    });

    describe("give two numbers seperated by a comma", function(){
        it("should return 0 for '0, 0'", function(){
            sut.add("0,0").should.equal(0);
        });

        it("should return 1 for '1, 0'", function(){
            sut.add("1,0").should.equal(1);
        });

        it("should return 2 for '1, 1'", function(){
            sut.add("1,1").should.equal(2);
        });
    });

    describe("give unknown number of numbers seperated by a comma", function(){
        it("should return 0 for '0, 0, 0'", function(){
            sut.add("0,0,0").should.equal(0);
        });

        it("should return 2 for '1, 0, 1'", function(){
            sut.add("1,0,1").should.equal(2);
        });

        it("should return 3 for '1, 1, 1'", function(){
            sut.add("1,1,1").should.equal(3);
        });
    });

    describe("given commas and new lines", function(){
        
    });

        

});