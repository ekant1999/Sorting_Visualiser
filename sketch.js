var rows, cols;
var items = [];
const CellWidth = 60;

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSL, 350, 100, 100);
	cols = floor(width / CellWidth);
	rows = floor(height / CellWidth);
	for (let i = 0; i < rows; i++) {
		items[i] = [];
		for (let j = 0; j < cols; j++) {
			items[i][j] = j;
		}
		for (var j = 0; j < rows; j++) {
			shuffle(items[i], true);
		}
	}
}

function draw() {
	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			var c = color(map(items[i][j], 0, cols, 0, 360), 100, 50);
			noStroke();
			fill(c);
			rect(j * CellWidth, i * CellWidth, CellWidth, CellWidth);
		}
	}
  for (var i = 0; i < rows; i++) {
    //bubbleSort(items[i]);
    //quickSort(items[i],0,items.length);
  }
}
function bubbleSort(items) {
	var length = items.length;
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < (length - i - 1); j++) {
			if (items[j] > items[j + 1]) {
				var tmp = items[j];
				items[j] = items[j + 1];
				items[j + 1] = tmp;
			}
		}
	}
}

function partition(arr, start, end){
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
