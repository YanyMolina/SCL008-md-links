const fs = require('fs');
const markdownLinkExtractor = require('markdown-link-extractor');

fs.readFile('./README.md', (err, data) => {

    if(err){
      throw err;
    }
  
    console.log(data.toString());
  });
  

