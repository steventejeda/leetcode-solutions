var strStr = function(haystack, needle) {
//haystack = "hello", needle = "ll";
if(!needle){
    return 0;
}
let index = 0;

while(haystack.substring(index, needle.length + index) !== needle && index <= haystack.length){
    index++;
}
 
return index > haystack.length? -1 : index;

};