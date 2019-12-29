/*  
  to run this code: simply copy paste this into browser developer tool.
*/

function mergesort(arr){
	//debugger;
	var mid=Math.floor(arr.length/2);
	var a=arr.slice(0,mid);
	var b=arr.slice(mid);

	if(arr.length==1){
		return arr;
	}

	var m1=mergesort(a);
	var m2=mergesort(b)

	return mergeTwoSortedArray(m1,m2);
}

function mergeTwoSortedArray(m1,m2){
	//debugger;
	var finalArr=[];
	
	//boundary checks
	if(!m1.length && !m2.length){
		return finalArr;
	} else if(!m1.length){
		return m2;
	} else if(!m2.length){
		return m1;
	}

	for(var i=0,j=0; i<m1.length && j<m2.length; true){
		if(m1[i]<m2[j]){
			finalArr.push(m1[i++]);
		} else {
			finalArr.push(m2[j++]);
		}
	}

	while(i<m1.length){
		finalArr.push(m1[i++]);
	}

	while(j<m2.length){
		finalArr.push(m2[j++]);
	}
	return finalArr;
}


var arr=[3,2,6,5,7,9,10];
mergesort(arr);
