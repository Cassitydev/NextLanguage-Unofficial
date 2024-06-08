/** REQUIRE IMPORTS */

const crypto = require('crypto');
const fs = require('fs')

/** ENCRYPTION IMPORTS */

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

/** ENCRYPTION CODE */

const cipher = crypto.createCipheriv(algorithm, key, iv);

exports.module = function encrypt(text, type, options) {
    /**
     * FUNCTION USAGES
     * 
     * These are some examples on their usages:
     * 
     * encrypt('Hello World', 'hex')
     * encrypt('Hello World', 'base64')
     * 
     * If options == 'console-output' then it will print the encrypted text
     * 
     * encrypt('Hello World', 'hex', 'console-output')
     * 
     * Console Output: 
     *    Encrypted text: *Hashed Text*
     * 
     * (NOT RECOMMENED, WE RECOMMEND USING FS ON THE FUNCTION INSTEAD)
     * If options == 'file-output' then it will write the encrypted text
     * to a file
     * 
     * encrypt('Hello World', 'hex', 'file-output')
     * 
     * File Output:
     *    Encrypted text: *Hashed Text*
     *
     * 
     * The function encrypts the text and returns the encrypted text
     * It could also read an file and encrypts it's contents using
     * fs.readFile and fs.writeFile
     * 
     * CODE USAGES
     * 
     * @param {string} text
     * @param {string} type
     * @param {string} options
     * 
     */

    let encrypted = cipher.update(text, 'utf8', type);

    if (options == 'console-output') {
        console.log('Encrypted text: ', encrypted);
    } else if (options == 'file-output') {
        fs.writeFile('encrypted.txt', encrypted, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
        })
    }

    return encrypted += cipher.final(type);
}

/** DECRYPTION CODE */

const decipher = crypto.createDecipheriv(algorithm, key, iv);

exports.module = function decrypt(type) {
    /**
     * FUNCTION USAGES
     * 
     * These are some examples on their usages:
     * 
     * decrypt('hex')
     * decrypt('base64')
     * 
     * The function decrypts the text and returns the decrypted text
     * It could also read an file and decrypts it's contents using
     * fs.readFile and fs.writeFile
     * 
     * CODE USAGES
     * 
     * @param {string} type
     * 
     */

    let decrypted = decipher.update(encrypted, type, 'utf8');
    decrypted += decipher.final('utf8');
}

/**
 *  EXAMPLES TESTINGS CODE
 * 
 * console.log('Original text: ', 'Hello World');
 * console.log('Encrypted text: ', encrypted);
 * console.log('Decrypted text: ', decrypted);
 *   
 */