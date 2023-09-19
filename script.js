// Function to check if a word is compound
function CompoundWord(word, wordSet) {
    if (wordSet.has(word)) return true;
    for (let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i);
      const suffix = word.slice(i);
      if (wordSet.has(prefix) && CompoundWord(suffix, wordSet)) {
        return true;
      }
    }
    return false;
  }
  
  // Finding the longest and second longest compounded words
  function findLongestCompounds(words) {
    const wordSet = new Set(words);
    let longest = '';
    let secondLongest = '';
    for (const word of words) {
      if (word.length > longest.length && CompoundWord(word, wordSet)) {
        secondLongest = longest;
        longest = word;
      } else if (word.length > secondLongest.length && CompoundWord(word, wordSet)) {
        secondLongest = word;
      }
    }
    return { longest, secondLongest };
  }
  
  // Measure the time taken to process the input file
  const inputWords = [
    'cats',
    'catsdogcats',
    'catxdogcatsrat',
    'dog',
    'dogcatsdog',
    'hippopotamuses',
    'rat',
    'ratcatdogcat',
  ];
  
  const startTime = performance.now(); // Start measuring time

  
  const { longest, secondLongest } = findLongestCompounds(inputWords);
  const endTime = performance.now(); // Stop measuring time
  
  console.log('Input Words:', inputWords);
  console.log('Unique Longest Compounded Word:', longest);
  console.log('Unique Second Longest Compounded Word:', secondLongest);
  console.log('Time taken (in milliseconds):', endTime - startTime);
  