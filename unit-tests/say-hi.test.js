function sayHi() {
	console.log('Hi');
}

function callFunctionWithTimer(foo, timer) {
	setTimeout(foo, timer)
}


describe('#setTimeout', () => {
	it('should send Hi to console after 5 seconds', (done) => {
		jest.spyOn(console, 'log');
		callFuncWithTimer(sayHi, 5000);
		done();
		expect(console.log).toHaveBeenCalled();
	});
});