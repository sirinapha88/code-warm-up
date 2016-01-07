var mocha = require('mocha');
var expect = require('chai').expect;

var rn = require('../romanNumerals');

describe("convertRomanNumeral", function() {
    
    it("should correctly convert roman numeral strings to integers", function() {
        expect(rn.convertRomanNumeral("x")).to.equal(10);
        expect(rn.convertRomanNumeral("ii")).to.equal(2);
    });

    it("should return NaN if the input was not a valid roman numeral string.", function(){
        var output = rn.convertRomanNumeral('g');
        expect(isNaN(output)).to.equal(true);
    });
});