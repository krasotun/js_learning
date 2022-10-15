function namespace(str) {
	return str.split(".").reduceRight((acc, key) => {
		return { [key]: acc };
	}, {});
}

namespace('a.b.c.d.e') // "{"a":{"b":{"c":{"d":{"e":{}}}}}}"