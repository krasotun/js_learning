class Graph {
	constructor() {
		this.data = {};
	}
	// Добавляет вершину.
	// Если вершина уже существует, ничего не делает.
	addVertex(vertex) {
		if (this.data[vertex]) {
			return;
		}
		this.data[vertex] = []
	}

	// Удаляет вершину.
	removeVertex(vertex) {
		this.data[vertex] = []
		delete this.data[vertex];
	}

	// Добавляет грань между двумя вершинами.
	addEdge(vertex1, vertex2) {
		if (!this.data[vertex1] || !this.data[vertex2]) {
			return
		}
		if (vertex1 === vertex2) {
			return
		}
		if (this.data[vertex1].indexOf(vertex2) === -1) {
			this.data[vertex1].push(vertex2)
		}
		if (this.data[vertex2].indexOf(vertex1) === -1) {
			this.data[vertex2].push(vertex1)
		}

	}
	removeEdge(vertex1, vertex2) {
		if (!this.data[vertex1] || !this.data[vertex2]) {
			return
		}
		if (vertex1 === vertex2) {
			return
		}
		if (this.data[vertex1].indexOf(vertex2) >= 0) {
			this.data[vertex1] = this.data[vertex1].filter(element => element !== vertex2)
		}
		if (this.data[vertex2].indexOf(vertex1) >= 0) {
			this.data[vertex2] = this.data[vertex2].filter(element => element !== vertex1)
		}
	}
}

// Пример использованиия
const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
console.log(graph.data);
graph.addEdge("B", "C");
console.log(graph.data);
graph.removeEdge('B', 'C');
console.log(graph.data);


// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');

/*
{
	A: ['B', 'C'],
	B: ['A'],
	C: ['A'],
	D: []
}
 */