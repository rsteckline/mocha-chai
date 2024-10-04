const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app')

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);

describe('App', function () {
    describe('sayHello()', function () {

        it('sayHello should return hello', function () {
            //let result = app.sayHello();
            assert.equal(sayHelloResult, 'hello');
        })

        it('sayHello should return type string', function () {
            //let result = app.sayHello();
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function () {

        it('addNumbers should be above 5', function () {
            //let result = app.addNumbers(5, 5);
            assert.isAbove(addNumbersResult, 5)
        })


        it('addNumbers should return type number', function () {
            //let result = app.addNumbers(5, 5);
            assert.typeOf(addNumbersResult, 'number');
        });
    });

    describe('countSameInitials()', function () {
        it('should return the correct count of names with the same initials', function () {
            const names = [
                "Amelia Anderson", "Zoe Campbell", "Benjamin Lee", "Grace Wilson",
                "Samuel Wright", "Lily Hernandez", "Thomas Turner", "Harper Collins",
                "Daniel Garcia", "Abigail Adams", "Noah Robinson", "Ella Murphy",
                "Rory Ramos", "Jacob Foster", "Scarlett Brown", "Tessa Thorne"
            ];

            const result = app.countSameInitials(names);
            assert.equal(result, 5);
        });

        it('should return 0 if no names have matching initials', function () {
            const names = ["Jane Doe", "John Smith", "Alice Brown"];
            const result = app.countSameInitials(names);
            assert.equal(result, 0);
        });

        it('should handle an empty array', function () {
            const result = app.countSameInitials([]);
            assert.equal(result, 0);
        });
    });
});