//# Language: Javascript

//# Function which solves the problem
function LordOfRing(n,arr){
	console.log(`i is ${i}`);
	function LeftIndex(i){
		i--;
		if(i<0){
			return 0;
		}
		return i;
	}

	for(var i=0;i<arr.length-1;){
		var a=arr[i], b= arr[i+1];
		if(  (Math.sign(a)==1 && Math.sign(b)==1) || (Math.sign(a)==-1 && Math.sign(b)==-1) || Math.sign(a)==-1 && Math.sign(b)==1){
			//same sign condition or a is fighting left and b is on right = no fight
			i++
			continue;
		} else if(Math.abs(a)>Math.abs(b)){
			//a is winner and remove b from arr
			arr.splice(i+1,1);
		} else if(Math.abs(a)<Math.abs(b)) {
			arr.splice(i,1);
			i=LeftIndex(i);
		} else if(Math.abs(a) == Math.abs(b)){
			//both have equal power
			arr.splice(i,2);
			i=LeftIndex(i);
		}
		
	}
	return arr;
}

//# Example call
var n=3;
var potential=[5,10,-5];
var lr=LordOfRing(n, potential);
console.log("lr=",lr);


var n=4;
var potential=[5,10,-5,-6];
var lr=LordOfRing(n, potential);
console.log("lr=",lr);

var n=4;
var potential=[4,-5,-15,6];
var lr=LordOfRing(n, potential);
console.log("lr=",lr);


var n=4;
var potential=[2,3,-4,-6];
var lr=LordOfRing(n, potential);
console.log("lr=",lr);

var n=2;
var potential=[-5,4];
var lr=LordOfRing(n, potential);
console.log("lr=",lr);