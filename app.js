const fs = require('fs');

const currenttime = require('nextlibrary-unofficial/app/config/timeModule.js');

module.exports = function runJavascript(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        try {
            eval(data);
        } catch (e) {
            console.error('Error executing NXL code:', e);
        } try {
            eval(data);
        } catch (b) {
            console.error('Error executing NXL code:', b);
        }
    });
}

function patches_main() {
    /**
     * 
     * PATCHES CODE
     * The require() code created at the
     * top of the function will be used
     * for patching NextLanguage Unofficial's
     * Code just incase some unstable codes
     * has been injected. This function detects
     * and scans the code and will patch it.
     * 
     */

    require('./patches/v1.6-patch_vdetection-err.js');

    /**
     * 
     * CREATE STARTUP LOG FILE
     * This file will be created for the first
     * time the app is ran.
     * 
     * And initializes the NPM Module that will
     * run the rest of the code. And starts the
     * NextLanguage Source Code.
     * 
     */

    if (!fs.existsSync('./build/log/NXL_Startup-Initization.log')) {
        fs.writeFileSync('./build/lib/log/' + 'NXL_Startup-Initization.log', `
            You are currently using an unofficial version of NextLanguage.
            Any changes made to this build is unofficial and not is not made
            by the official maintainer and development team of NextLanguage.
        
            This build is maintained by AshleyAst, instead of Nxium Developments
            and is not affiliated with Nxium Developments. This is a fork of the
            official NextLanguage build Repositories, and is not made by Nxium.
        
            Additional Information:
        
                Git: https://github.com/AshelyAst/NextLanguage-Unofficial
                Application: app.js
        
            Ending Additonal Info Section
        
            Visit https://github.com/Nxium-Developments/NextLanguage for
            more information on the configuration of this log file.
        
            Initialized Successfully` + `
            
            < ---------------------------------------------------------------- >
        
            Log File: ./build/log/${currenttime}-NXL_Startup.log
        
            `, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            })
    } else {
        fs.writeFileSync('./build/log/' + `NXL_Startup-${currenttime}.log`, `
            You are currently using an unofficial version of NextLanguage.
            Any changes made to this build is unofficial and not is not made
            by the official maintainer and development team of NextLanguage.
        
            This build is maintained by AshleyAst, instead of Nxium Developments
            and is not affiliated with Nxium Developments. This is a fork of the
            official NextLanguage build Repositories, and is not made by Nxium.
        
            Additional Information:
        
                Git: https://github.com/AshelyAst/NextLanguage-Unofficial
                Application: app.js
        
            Ending Additonal Info Section
        
            Visit https://github.com/Nxium-Developments/NextLanguage for
            more information on the configuration of this log file.
        
            Activated NextLanguage Sucessfully` + `
            
            < ---------------------------------------------------------------- >
        
            Log File: ./build/log/${currenttime}-NXL_Startup.log
        
            `, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
            })
    }
    
}

/** GITHUB REPOSITORY CODE */

        patches_main();
    
/** END GITHUB REPOSITORY CODE */