const fs = require("fs");

console.log("File Manager Started");

console.log("Creating File...");

fs.writeFile("test.txt", "Hello Node.js", function(err) {
    if (err) {
        console.log("Error creating file");
        return;
    }

    console.log("File Created");

    console.log("Reading File...");

    fs.readFile("test.txt", "utf8", function(err, data) {
        if (err) {
            console.log("Error reading file");
            return;
        }

        console.log("File Content:", data);

        console.log("Updating File...");

        fs.appendFile("test.txt", "\nLearning FS Module", function(err) {
            if (err) {
                console.log("Error updating file");
                return;
            }

            console.log("File Updated");

            fs.readFile("test.txt", "utf8", function(err, data) {
                if (err) {
                    console.log("Error reading updated file");
                    return;
                }

                console.log("Updated File Content:", data);

                console.log("Deleting File...");

                fs.unlink("test.txt", function(err) {
                    if (err) {
                        console.log("Error deleting file");
                        return;
                    }

                    console.log("File Deleted");
                    console.log("File Manager Finished");
                });
            });
        });
    });
});

console.log("File operations started");