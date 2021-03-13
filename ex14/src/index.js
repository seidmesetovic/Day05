function main() {
    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";
    var wordBlanks = "My " + myNoun + " is " + myVerb + " very " + myAdverb + " and he is so " + myAdjective + ".";
    
    return wordBlanks;
}
console.log(main());
module.exports = main;