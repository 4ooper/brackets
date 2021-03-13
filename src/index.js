module.exports = function check(str, bracketsConfig) {
    let res = [];
    let a = 0;
    for(i=0;i<str.length;i++){
        for(j=0;j<bracketsConfig.length;j++){
            if(str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] === bracketsConfig[j][1])
                a += 1;
            else if(str[i] === bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]
                res.push(str[i]);
            else if(str[i] === bracketsConfig[j][1]){
                if(res.length === 0 || res[res.length - 1] !== bracketsConfig[j][0]
                   return false;
                res.pop();
            }
        }
    }
    return stack.length === 0 && a % 2 === 0;
}
