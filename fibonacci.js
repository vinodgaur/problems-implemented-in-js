/*------------get nth fibonacci no------------*/
function get(n){
	var p1 = 0, p2 = 1;

	if(n == 1) return p1;
	else if(n == 2) return p2;

	var c = null;
	for(var i = 3; i <= n; i++){
		c = p1+p2;
		p1 = p2;
		p2 = c;
	}
	return c;
}

get(2);
get(3);
get(4);

/*------------get nth fibonacci no------------*/


