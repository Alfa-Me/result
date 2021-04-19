var fs = require ('fs')

fs.writeFile('post.txt', 'Hello World', (err)=>{
    if (err) throw err;
    console.log('post.txt has been created succeffuly!');
});