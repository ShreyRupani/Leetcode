var romanToInt = function(s) {
    a=s.split``
    i = total = 0
    while(i!=s.length) {
        switch(a[i]){
            case 'M':
                total += 1000
                break
            case 'D':
                total += 500
                break
            case 'C':
                if(a[i+1]=='M') {
                    total += 900
                    i++
                } else if(a[i+1]=='D') {
                    total += 400
                    i++
                } else {
                    total += 100
                }
                break
            case 'L':
                total += 50
                break
            case 'X':
                if(a[i+1]=='C') {
                    total += 90
                    i++
                } else if(a[i+1]=='L') {
                    total += 40
                    i++
                } else {
                    total += 10
                }
                break
            case 'V':
                total += 5
                break
            case 'I':
                if(a[i+1]=='X') {
                    total += 9
                    i++
                } else if(a[i+1]=='V') {
                    total += 4
                    i++
                } else {
                    total += 1
                }
                break
        }
        i++
    }
    return total
};