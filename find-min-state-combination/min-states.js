//# Language: Javascript

//# Function which solves the problem
function minStates(n, arr, state, init, dataArr, outputObj) {
	//console.log("n,arr,state,init=",n,arr,state,init);
	dataArr = dataArr || [];

	if(init==n){
		dataArr.push(init);
		//Note: uncomment below line to display all possible path along with state
		//console.log("dataArr, state=",dataArr, state);


		//if outputObj is already initialized then update based on conditions
		if(outputObj){
			if( (outputObj.state == state && Number(outputObj.dataArr.join("")) > Number(dataArr.join("")) ) || outputObj.state > state ){
				//same state condition or state is less then previous one
				outputObj={dataArr:dataArr, state:state};
			}
		} else {
			//initialize outputObj with the first one only
			outputObj={dataArr:dataArr,state:state};
		}
		
		return outputObj;
	}

	for (var j = 0; j < arr.length; j++) {
		var m=arr[j]*init;
		
		if(m <= n/2 || m==n){
			var newArr = Array.from(dataArr);
			newArr.push(init);
			//calling same function recursively for all possible combination
			outputObj=minStates(n, arr, state+1, m, newArr, outputObj);
			
		}
	}

	return outputObj;
}

//# Example call
var outputObj=minStates(12, [2,3,4], 1, 1);
console.log(outputObj?outputObj.dataArr.join(" --> "):"Not possible");

var outputObj=minStates(8, [2], 1, 1);
console.log(outputObj?outputObj.dataArr.join(" --> "):"Not possible");

var outputObj=minStates(12, [], 1, 1);
console.log(outputObj?outputObj.dataArr.join(" --> "):"Not possible");
