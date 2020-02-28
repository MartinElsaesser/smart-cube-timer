const path = require('path');
const fs = require('fs');
// joining path of directory
const dir = '';
const directoryPath = path.join(__dirname, dir);
// passsing directoryPath and callback function
fs.readdir(directoryPath, (err, files) => {
	// handling error
	if (err) {
		return console.log(`Unable to scan directory: ${err}`);
	}
	fs.writeFileSync('UTILS_all_filenames_output.txt', JSON.stringify(files.map((name) => `smart-cube-timer/${dir}/${name}`)));
	// listing all files using forEach
	// files.forEach(function (file) {
	// 	// Do whatever you want to do with the file
	// 	console.log(file);
	// });
});
