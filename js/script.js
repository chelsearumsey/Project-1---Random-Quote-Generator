quotes = [
   {quote: 'I don\'t want to talk to you no more, you empty-headed animal food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries.', 
   citation: 'Monty Python and the Holy Grail', 
   source: 'French Knight', 
   year: '1975'}, 

   {quote: 'Having a luck dragon with you is the only way to go on a quest.',
   citation: 'The Neverending Story', 
   source: 'Falkor', 
   year: '1984'}, 

   {quote: 'You wouldn\'t be so brave if you\'d ever smelled the Bog of Eternal Stench.', 
   citation: 'The Labrynth', 
   source: 'Hoggle', 
   year: '1986'}, 

   {quote: 'If you can\'t say anything nice about anybody, come sit by me.', 
   citation: 'Steel Magnolias', 
   source: 'Clairee', 
   year: '1989'}, 

   {quote: 'Well, my stupid, sorry, parasitic sacks of entrails... revenge is mine.', 
   citation: 'Hook', 
   source: 'Captain James Hook', 
   year: '1991'}, 

   {quote: 'Pride is an abomination. One must forego the self to obtain total spiritual creaminess, and avoid the chewy chunks of degradation.', 
   citation: 'Ace Venture When Nature Calls', 
   source: 'Ace Ventura', 
   year: '1995'},

   {quote: 'Wasn\'t your... didn\'t your mole used to be on the other side?', 
   citation: 'Robin Hood: Men in Tights', 
   source: 'Sheriff of Rottingham', 
   year: '1993'}, 

   {quote: 'Into the pit with those bloody-thirsty sons of whores!', 
   citation: 'Army Of Darkness', 
   source: 'Old Woman', 
   year: '1992'},

   {quote: 'What was sundered and undone, shall be whole, the two made one!', 
   citation: 'The Dark Crystal', 
   source: 'Mother Aughra', 
   year: '1982'},

   {quote: 'So. At Last, We Meet For The First Time, For The Last Time.', 
   citation: 'Space Balls', 
   source: 'Dark Helmet', 
   year: '1987'},

   {quote: 'I can\'t sleep anymore. It\'s too much like death.', 
   citation: 'Moonstruck', 
   source: 'Cosmo Castorini', 
   year: '1987'},

   {quote: 'Someday we\'ll find it, the rainbow connection. The lovers, the dreamers, and me.', 
   citation: 'The Muppet Movie', 
   source: 'Kermit the Frog', 
   year: '1979'},

   {quote: 'You mean you\'ll put down your rock and I\'ll put down my sword, and we\'ll try and kill each other like civilized people?', 
   citation: 'The Princess Bride', 
   source: 'Westley', 
   year: '1987'},


   {quote: 'You’re such a sweet boy, letting an old woman pay you with meatballs!', 
   citation: 'The Wedding Singer', 
   source: 'Rosie', 
   year: '1998'},

   {quote: 'By Grabthar\'s hammer, by the suns of Worvan, you shall be avenged.', 
   citation: 'Galaxy Quest', 
   source: 'Sir Alexander Dane', 
   year: '1999'}
];


function getRandomQuote (array){
    let randomQuoteObject = array[Math.floor(Math.random()*14)];
    // console.log(randomQuoteObject);
    return randomQuoteObject;
}


function printQuote (){
    let randomQuote = getRandomQuote(quotes);
    let quoteProperties = '';
    //console.log(document.getElementById('quote-box').innerHTML);
    quoteProperties += `<p class="quote"> ${randomQuote.quote} </p>
                        <p class="source"> ${randomQuote.source}</p>`;
    if (randomQuote.citation===true){
        quoteProperties += `<span class="citation"> ${randomQuote.citation} </span>`;}
        
    if (randomQuote.citation===true){
        quoteProperties += `<span class="year"> ${randomQuote.year} </span>`;}
                        

    document.getElementById('quote-box').innerHTML = quoteProperties;
}


// printQuote(quotes);
// printQuote(quotes);
// printQuote(quotes);
// printQuote(quotes);

document.getElementById('load-quote').addEventListener("click", printQuote, false);