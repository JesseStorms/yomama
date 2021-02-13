# yourmama package

My first really stupid npm package.

Promise based yomama joke getting package. Just in case you need to  have access to mom-roasting things while working offline. I used [Josh Buchea's wonderful repo](https://github.com/joshbuchea/yo-mama) as source of the yomama jokes. You can find my fork [here](https://github.com/JesseStorms/yo-mama), if you want to contribute to the file.

Why did I make this? I was really bored and searched for excuses to learn how to use [Mocha.js](https://mochajs.org/) and how to make packages. I only spent one hour on this.

## Usage (dont)

    const yourmama = require('yourmama')
    
    //get a random joke
    const joke = yourmama.getRandom()
     
    //get a random joke in a topic
    const fatJoke = yourmama.getTopic("fat") //or short, stupid, ugly, nasty, hairy, bald, old, poor, skinny, tall 
     
    //get by ID, just makes a giant array and selects one of them
    const specificJoke = yourmama.getID(0) //returns "Yo mama is so fat that her bellybutton gets home 15 minutes before she does." 
     
    //get a specific one out of the topic array
    const firstFatJoke = yourmama.getRoast({topic:'fat',id:0}) //returns "Yo mama is so fat that her bellybutton gets home 15 minutes before she does." 

## Contributing

Fork and merge request the repo.  You can find the source of the jokes [here](https://github.com/JesseStorms/yo-mama), if you want to contribute to the file.
