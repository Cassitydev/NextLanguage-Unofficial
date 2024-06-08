## 🚨 NPM RELEASE 🚨
In this new Branch of our unofficial version of Nextlanguage, <br>
we're going to be using this for releasing this unofficial branch <br>
of NextLanguage into NPM with Nxium Development's Official NextLanguage <br>
Branch's author. Which will allow you guys to be able to install <br>
NextLanguage using NPM now.
<br>
<br>

**How to install Nextlanguage Unofficial using NPM** <br>
```batch
npm install nextlanguage-unofficial
```
<br>

#### **Getting Started on NPM** <br><br>
On the NPM version of NextLanguage Unofficial. You may need
to run this version on an Javascript file, first before being
able to use the full settings and systems of NextLanguage Unofficial.
<br>

```javascript
const { encrypt, decrypt } = require('nextlanguage-unofficial/modules/secuirty.js');
require('nextlanguage-unofficial/app.js');

/** 
 * IMPORTS INFORMATIONS
 * The Encrypt and Decrypt Import Module
 * is used for decrypting and encrypting
 * files or messages into the user's desired
 * type of encryption, for example: HEX
 * 
 * REQUIRE MODULE INFORMATIONS
 * The require() module that is called right
 * after the IMPORT MODULES for the NPM Version
 * of NextLanguage. And creates an Build Log for
 * NextLanguage Unofficial. Which initializes
 * the NPM Module for this NPM version of
 * NextLanguage Unofficial. And will load the
 * security module.
 * 
 * The Initialize log will be created for the
 * first time the Module is ran. After that
 * the Default Normal log will be created instead.
 * 
 * 
*/

encrypt('Hello world', 'hex', 'console-output');

/**
 * ENCRYPTION FUNCTION INFORMATIONS
 * The encrypt function provided above will
 * encrypt the following message which is:
 * 
 * Hello World
 * 
 * And so will provide an console output
 * using HEX Codes. Which is the provided
 * Encryption Type. The Output will be
 * sent into the console. After the Javascript
 * File is ran, using NodeJS.
 * 
 */

```

## 📢 NPM VERSION DIFFERENCES 📢
The NPM Version of NextLanguage Unofficial will be
different from the Normal Github Version. Which uses
an `.bat` file to run and compile the .nxl file.
<br>

But the NPM Version of NextLanguage Unofficial will use
another Javascript file inside the folder you've installed
NextLanguage Unofficial into. And NextLanguage Unofficial's
NPM Version requires the [Code Provided](#getting-started-on-npm)
which runs and initializes NextLanguage Unofficial's NPM Version.

## 🌌 Github Repository 🌌
**Github Release**: https://github.com/AshleyAst/NextLanguage-Unofficial/releases/tag/v1.7.0-npm
**Github Repository**: https://github.com/AshleyAst/NextLanguage-Unofficial/tree/npm-publish