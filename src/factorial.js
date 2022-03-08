function factorial(n) {
    if( n==0 || n==1 ){
        return 1;
    }else{
        if( n < 0){
            return "Error. Argument must be a positive integer"
        }else{
            return n * factorial(n-1);
        }
    }
}

module.exports = factorial;
