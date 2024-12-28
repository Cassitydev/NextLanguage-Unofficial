module.exports = function packageMain(line, main, packages, setPackageMain, addPackageCommand, debugOutput) {
    // Sets the main package
    if (main === "root/me") {
        setPackageMain(main); // Sets the main package
        // Debugging for Developers
        debugOutput(line, `Main package set to: ${packages.main}`);
    } else {
        try {
            const read = main.split("root/")[0]; // Extracts the read path
            
            // Reads the file contents (currently disabled)
            // const contents = fs.readFileSync(path.join(read), 'utf8');

            addPackageCommand(main); // Adds the command to modules/localStorage.js
            debugOutput(line, `Command package added: ${main}`); // Debug output
        } catch (err) {
            debugOutput(line, `Error reading package: ${err.message}`);
        }
    }
}