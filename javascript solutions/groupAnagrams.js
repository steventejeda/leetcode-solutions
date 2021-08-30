var groupAnagrams = function(strs) {
    let anagrams = {};
    let collectedAnagrams = [];
    
    for (let word of strs){
        let letters = word.split('').sort().join('')
        anagrams[letters] = anagrams[letters] || []
        anagrams[letters].push(word)
    }
    
    for (let key in anagrams){
        collectedAnagrams.push(anagrams[key])
    }
    
    return collectedAnagrams
};