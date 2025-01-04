    run npm install rayyan-package.

    In your main file,
    const {helloNpm} = require('rayyan-package);
    const result = helloNpm();
    console.log(result);

    you should see "hello NPM".



    const {generateString} = require('rayyan-package);
    const randomStringOfLength_7 = generateString(7);
    console.log(randomStringOfLength_7); 
    // you should see a random string of length 7 consistng of small case and 
         capital case english alphabet letters.
