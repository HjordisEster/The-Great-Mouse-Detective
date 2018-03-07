var expect = require('chai').expect;

function titleCace(title){
    var words = title.split(' ');
    var titleCaseWords = words.map(function(word) {
        return word[0].toUpperCase() + word.substring(1);
    });
    return titleCaseWords.join(' ');
    
}

expect(titleCace('the great mouse detective')).to.be.a('string');
expect(titleCace('a')).to.equal('A');
expect(titleCace('vertigo')).to.equal('Vertigo');
expect(titleCace('the great mouse detective')).to.equal('The Great Mouse Detective');