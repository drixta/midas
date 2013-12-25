describe("Sample Test", function () {

  beforeEach(function(){
    module = angular.module('clickerModule');
  });
  it('Should have a Click Controller', function(){
    expect(module.AddCtrl).not.to.equal(null);
  });
});