var rows, cols;
var items = [];
const CellWidth = 60;
var ii = 0;
var jj = 0;
var n=[];

function setup() {
    createCanvas(windowWidth, windowHeight);
	    colorMode(HSL, 359, 100, 95);
    cols = floor(width / CellWidth);
    rows = floor(height / CellWidth);
    for (let i = 0; i < rows; i++) {
        items[i] = [];
        for (let j = 0; j < cols; j++) {
            items[i][j] = j;
        }
        n[i]=cols;
    }
    for (var j = 0; j < rows; j++) {
        shuffle(items[j], true);
    }
}

function draw() {
	frameRate(5);
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            var c = color(map(items[i][j], 0, cols, 0, 360), 100, 50);
            stroke(0);
            fill(c);
            rect(j * CellWidth, i * CellWidth, CellWidth, CellWidth);
        }
    }
		for(var k=0; k< items.length; k++)
		 n[k]= bubbleSort(items[k],n[k]);
}

function bubbleSort(arr, n) {
    if (n <= 1) {
        return 0;
    }
    for (let j = 0; j < n - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return n - 1;
}

function partition(arr, start, end) {
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};

function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}
