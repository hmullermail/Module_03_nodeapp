module.exports = {
    
    sum: function (a, b) {
        return a+b;
    },

    diff: function (a, b) {
        return a-b;
    },

    div: function (a, b) {
        if (b != 0){
            return a/b;
        }else{
            return 'Error. Cannot divide by zero!'
        }
    },

    prod: function (a, b) {
        return a*b;
    }

};
