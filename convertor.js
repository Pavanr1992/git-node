const fs = require('fs');
const split = require('split');

const dir = "./FilesToProcess"

const inputFilePath = fs.readdirSync(dir,(file)=>{
    //console.log("Filename",file)
    return file
}) // Replace with the path to your pipe-separated file
console.log(dir+"/"+inputFilePath)
const outputFilePath = './Processed/'+inputFilePath+'' // Replace with the desired path for the comma-separated output file

// Create a writable stream to write the output
const outputStream = fs.createWriteStream(outputFilePath);

// Read the pipe-separated file
const inputStream = fs.createReadStream(dir+"/"+inputFilePath, { encoding: 'utf8' });

inputStream
  .pipe(split())  // Split lines based on '\n'
  .on('data', (line) => {
    // Process each line and convert it to comma-separated format
    const commaSeparatedLine = line.split('|').join(',');
    outputStream.write(commaSeparatedLine + '\n');
  })
  .on('end', () => {
    // Close the output stream when done
    outputStream.end();
    console.log('Conversion complete. Output saved to', outputFilePath);
  })
  .on('error', (err) => {
    console.error('Error:', err);
  });




// fs.createReadStream("./Test.csv")
// .pipe(parse({ delimiter: "|", from_line: 2 }))
// .on("data", function (row) {
//   console.log(row.join(","));
// })
// .on("end", function () {
//   console.log("finished");
// })
// .on("error", function (error) {
//   console.log(error.message);
// });