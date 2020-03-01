var longestCommonPrefix = function(strs) {
    common = strs[0]
    if(strs.length == 0 || common.length == 0) {
        return ""
    }
    flag = true
    for(i=0;i<common.length;i++) {
        for(j=0;j<strs.length;j++) {
            if(strs[j][i] !== common[i]) {
                flag = false
                break
            }
        }
        if(!flag) {
            return common.substr(0,i);
        }
        
    }
    return common
};