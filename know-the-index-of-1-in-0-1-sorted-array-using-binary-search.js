function binaryArr(arr) {
	console.log("arr=", arr);
	var start = 0, end = arr.length-1;
	
	if( (arr[start]==0 && arr[end]==0) || (arr[start]==1 && arr[end]==1) ){
		return "Array has either zero or one only";
	}
	var mid;
	function binarySearch(start, end){
		mid = Math.floor((start+end)/2);

		
		if (arr[mid]==0 && arr[mid+1]==1) {
			return mid+1;// index of first 1
		} else if(arr[mid]==0 && arr[mid+1]==0){
			return binarySearch(mid+1,end);
		} else if(arr[mid]==1 && arr[mid+1]==1){
			return binarySearch(start,mid-1);
		} else {
			return "problem is in algo";
		}
	}
	return binarySearch(start, end);
}

console.log(binaryArr([0,1,1]));
console.log(binaryArr([0]));
console.log(binaryArr([1]));
console.log(binaryArr([0,0]));
console.log(binaryArr([0,1]));
console.log(binaryArr([1,1]));
console.log(binaryArr([0,0,0]));
console.log(binaryArr([0,0,1]));
console.log(binaryArr([1,1,1]));
console.log(binaryArr([0,0,0,0]));
console.log(binaryArr([0,0,0,1]));
console.log(binaryArr([0,0,1,1]));
console.log(binaryArr([0,1,1,1]));
console.log(binaryArr([1,1,1,1]));
console.log(binaryArr([0,0,0,1,1]));
	