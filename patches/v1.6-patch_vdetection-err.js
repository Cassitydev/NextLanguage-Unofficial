const fs = require('fs');

const currenttime = require('nextlibrary-unofficial/app/config/timeModule.js');

fs.writeFileSync('./build/lib/log/' + currenttime + '-NXL_Debug.log', `
    You are currently using an unofficial version of NextLanguage.
    Any changes made to this build is unofficial and not is not made
    by the official maintainer and development team of NextLanguage.

    This build is maintained by AshleyAst, instead of Nxium Developments
    and is not affiliated with Nxium Developments. This is a fork of the
    official NextLanguage build Repositories, and is not made by Nxium.

    Additional Information:

        Git: https://github.com/AshelyAst/NextLanguage-Unofficial
        Patched: v1.6-patch_vdetection-err.js

    Ending Additonal Info Section

    Visit https://github.com/Nxium-Developments/NextLanguage for
    more information on the configuration of this log file.

    Debugging & Patching Files: 
    
        No Files to Patch at this time.
        
    Ending Log File: ./build/lib/log/${currenttime}-NXL_Debug.log (THIS)` + `
    
    < ---------------------------------------------------------------- >

    Log File: ./build/lib/log/${currenttime}-NXL_Startup.log

    `, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
    })