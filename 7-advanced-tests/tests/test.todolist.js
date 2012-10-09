var assert = chai.assert,
    expect = chai.expect,
    should = chai.should();

describe("Todo List", function(){

    var sut = {};
    // Subject Under Test (aka sut)
    // is the piece of code you are testing

    beforeEach(function(){
        sut = new TodoList("#todo_list");
    });

    it("add new item to list", function(){
        console.log(sut);
        var mySpy = sinon.spy(sut, "addItem");
        $("#todo_list .add_item").click();
        mySpy.should.have.been.calledOnce;
    });

        

});