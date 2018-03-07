var expect = require('chai').expect;

expect(true).to.be.true;

function titleCace(title){
    return title;
}

expect(titleCace('the great mouse detective')).to.be.a('string');