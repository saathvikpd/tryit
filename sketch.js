const huffman = new HuffmanNode()
let huffmanQueue = [];
let n = 6;
let charArray1 = [ 's', 'b', 'r', 'l', 'w', 'f' ];
let charfreq1 = [ 1, 92, 122, 132, 162, 452 ];
let root = null;
let codes = [];

function setup() {
	let cnv = createCanvas(1800, 800);
	background(1000);
	translate(width / 2, 50);
	for (let i = 0; i < charArray1.length; i++) {
		huffman.addNode(huffmanQueue, charArray1[i], charfreq1[i]);	
	}
	root = huffman.buildTree(huffmanQueue);
	huffman.printCode(root, 1, codes);
	getTreeDetails(codes);
}


function draw() {
}
