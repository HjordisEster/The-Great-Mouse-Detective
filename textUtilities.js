var expect = require('chai').expect;

function titleCace(title){
    return title[0].toUpperCase() + title.substring(1);
}

expect(titleCace('the great mouse detective')).to.be.a('string');
expect(titleCace('a')).to.equal('A');
expect(titleCace('vertigo')).to.equal('Vertigo');
expect(titleCace('the great mouse detective')).to.equal('The Great Mouse Detective');