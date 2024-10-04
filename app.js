module.exports = {
    sayHello: function () {
        return 'hello';
    },
    addNumbers: function (value1, value2) {
        return value1 + value2
    },
    countSameInitials: function(names){
        return names.reduce((count, name) =>{
            const [first, last] = name.split(" ");
            if (first[0] === last[0]) count++;
            return count;
        }, 0)
    }
}