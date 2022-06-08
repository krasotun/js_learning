function shallowCopy(obj) {
	const myObjCopy = Object.assign({}, obj);
	return myObjCopy
}

const myObj = {
	one: 1,
	two: 2,
	three: 3
};

const myObjCopy = shallowCopy(myObj);

console.log(myObjCopy === myObj); // false