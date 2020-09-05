const fs = require('fs');
//reading files
/*
fs.readFile('./docs/blog1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line of data');

*/
//write file
/*
fs.writeFile('./docs/blog1.txt','hello there ...',()=>{
    console.log('files was written');
})
*/
if (!fs.existsSync('./assets')) {

    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
}else{
    fs.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted')
    })
}
