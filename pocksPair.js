
console.log(pocksPair([11,12,11,12,13,15,754,15,26,6,6,6]));

function pocksPair(socks) {
	var count=0;
	socks.sort((a,b)=> {
		return a-b;
	});

	for (var i = 0; i < socks.length-1; i++) {
		if (socks[i]===socks[i+1]) {
			count++;
			i++;
		}
	}
	return count;
}