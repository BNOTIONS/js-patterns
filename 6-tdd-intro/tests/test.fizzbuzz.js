var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("Fizz Buzz", function(){

    

    describe("given", function(){

        var fizzbuzz;

        // This function will run before each 'it' in this desribe block.
        // Use this to clean up objects before each test.
        before(function(){
            fizzbuzz = new FizzBuzz();
        });

        it("0", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('0');
        });

        it("1", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('1');
        });

        it("3", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('Fizz');
        });

        it("5", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('Buzz');
        });

        it("6", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('Fizz');
        });

        it("10", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('Buzz');
        });

        it("15", function(){
            var result = fizzbuzz.check(0);
            result.should.equal('FizzBuzz');
        });

        // Write a few more of your own tests to make
        // sure that your code is sound

    });

});