/**
 * @param {number} n
 * @return {string}
 */
//mine
var countAndSay = function(n) {
    var said = "1";
    while(--n) {
        var newSaid = ""
        var count = 1
        for(i=0; i<said.length;i++) {
            if (said[i] !== said[i+1]) {
                newSaid += count + said[i];
                count = 1;
            }
            else {
                count++;
            }
        }
        said = newSaid
    }
    return said
};

//Another great solution using regex
var countAndSay = function(n) {
    let res = '1';
    for (let i = 1; i < n; i++) {
		// let say at the beginning of the loop we have '11222333' (two 1s three 2s three 3s)
		
        res = res.replace(/((\d)\2*)/g, '$1-')                        
				 // after the replacement we have: '11-222-333-'
                 .split('-')                                                        
				 // we have: [ '11', '222', '333', '' ]
                 .map(str => str ? `${str.length}${str[0]}` : '') 
				 // [ '21', '32', '33', '' ]
                 .join('');                                                       
				 // '213232' (what we want)
    }
    return res;
};