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

        

});