const table = (...children) => `<table>${children.join('')}</table>`;
const tr = (...children) => `<tr>${children.join('')}</tr>`;
const td = (...children) => `<td>${children.join('')}</td>`;

function buildHtml() {
	return table(
		tr(td('lang'), td('comment')),
		tr(td('php'), td('statements')),
		tr(td('clojure'), td('expressions')));
}
console.log(buildHtml());
