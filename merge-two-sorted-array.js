function m(a,b){
	var m = [];
	var i = 0, j = 0;

	if(!a.length)
		return b;
	else if(!b.length)
		return a;
	
	while(j < b.length && i < a.length){
		if(a[i] > b[j]){
			m.push(b[j++]);
		} else {
			m.push(a[i++]);
		} 
	}

	if(j == b.length){
		while(i < a.length)
			m.push(a[i++]);
	} else if(i == a.length){
		while(j < b.length)
			m.push(b[j++]);
	}

	return m;
}

m([1,2], [3,4]);
