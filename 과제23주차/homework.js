const fs = require('fs');

console.log('a');

setTimeout(() => {
    console.log('c');
    console.log('d');
});

fs.writeFileSync('./a.txt', 'helloworld', (error)=>{
    if (error){
        console.log(error)
    }
})

console.log('b');
