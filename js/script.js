let quotes = [
   {quote: '"I don\'t want to talk to you no more, you empty-headed animal food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries."', 
   citation: '\n- French Knight', 
   source: '<i>Monty Python and the Holy Grail</i>', 
   year: '1975'}, 

   {quote: '"Having a luck dragon with you is the only way to go on a quest."',
   citation: '\n- Falkor', 
   source: '<i>The Neverending story</i>', 
   year: '1984'}, 

   {quote: '"You wouldn\'t be so brave if you\'d ever smelled the Bog of Eternal Stench."', 
   citation: '\n- Hoggle', 
   source: '<i>The Labrynth</i>', 
   year: '1986'}, 

   {quote: '"If you can\'t say anything nice about anybody, come sit by me."', 
   citation: '\n- Clairee', 
   source: '<i>Steel Magnolias</i>', 
   year: '1989'}, 

   {quote: '"Well, my stupid, sorry, parasitic sacks of entrails... revenge is mine."', 
   citation: '\n- Captain James Hook', 
   source: '<i>Hook</i>', 
   year: '1991'}, 

   {quote: '"Pride is an abomination. One must forego the self to obtain total spiritual creaminess, and avoid the chewy chunks of degradation."', 
   citation: '\n- Ace Ventura', 
   source: '<i>Ace Venture When Nature Calls</i>', 
   year: '1995'},

   {quote: '"Wasn\'t your... didn\'t your mole used to be on the other side?"', 
   citation: '\n- Sheriff of Rottingham', 
   source: '<i>Robin Hood: Men in Tights<\i>', 
   year: '1993'}, 

   {quote: '"Into the pit with those bloody-thirsty sons of whores!"', 
   citation: '\n- Old Woman', 
   source: '<i>Army Of Darkness</i>', 
   year: '1992'},

   {quote: '"What was sundered and undone, shall be whole, the two made one!"', 
   citation: '\n- Mother Aughra', 
   source: '<i>The Dark Crystal</i>', 
   year: '1982'},

   {quote: '"So. At Last, We Meet For The First Time, For The Last Time."', 
   citation: '\n- Dark Helmet', 
   source: '<i>Space Balls</i>', 
   year: '1987'},

   {quote: '"I can\'t sleep anymore. It\'s too much like death."', 
   citation: '\n- Cosmo Castorini', 
   source: '<i>Moonstruck</i>', 
   year: '1987'},

   {quote: '"Someday we\'ll find it, the rainbow connection. The lovers, the dreamers, and me."', 
   citation: '\n- Kermit the Frog', 
   source: '<i>The Muppet Movie</i>', 
   year: '1979'},

   {quote: '"You mean you\'ll put down your rock and I\'ll put down my sword, and we\'ll try and kill each other like civilized people?"', 
   citation: '\n- Westley', 
   source: '<i>The Princess Bride</i>', 
   year: '1987'},


   {quote: '"You’re such a sweet boy, letting an old woman pay you with meatballs!"', 
   citation: '\n- Rosie', 
   source: '<i>The Wedding Singer</i>', 
   year: '1998'},

   {quote: '"By Grabthar\'s hammer, by the suns of Worvan, you shall be avenged."', 
   citation: '\n- Sir Alexander Dane', 
   source: '<i>Galaxy Quest</i>', 
   year: '1999'}
];


function getRandomQuote (array){
    let randomQuote = array[Math.floor(Math.random()*14)].quote;
    console.log(randomQuote);
    return randomQuote;
}

// getRandomQuote(quotes);


function printQuote (arr){
    let randomQuote = getRandomQuote(arr);
    let quoteProperties = '';
    for (let i = 0; i < arr.length; i++) { 
        quoteProperties += `<p class="quote"> ${arr[i].quote} </p>
                            <p class="source"> ${arr[i].source}
                                <span class="citation"> ${arr[i].citation} </span>
                                <span class="year"> ${arr[i].year} </span>
                            </p>`;}
        document.getElementById('quote-box').innerHTML = quoteProperties;
}

printQuote(quotes);

document.getElementById('load-quote').addEventListener("click", printQuote, false);