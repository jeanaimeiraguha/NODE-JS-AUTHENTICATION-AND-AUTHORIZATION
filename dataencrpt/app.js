import crpto from 'crypto';
const key=crpto.randomBytes(32);//256-bit key for AES_256
//  initialization vector for CBC module
const iv=crypto.randomBytes(16);

// Here are the codes to guide you through
const algorithm = 'aes-256-cbc';
const encrypt = (text) => {
let cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(text, 'utf-8', 'hex');
encrypted += cipher.final('hex');
return encrypted;
};

//  Convert the Data to a Buffer
const buffer = Buffer.from('Hello, World!', 'utf-8');

// . Encrypt the Data

const encryptedData = encrypt(buffer.toString());
console.log('Encrypted Data:', encryptedData);

// Store the Encrypted Data
// After encrypting the data, you'll typically need to store it securely in a database
// or file system. Ensure that the storage medium is also secure and follows best
// practices for protecting sensitive data.

// Full guidance

const crypto = require('crypto');
const fs = require('fs');
// 1. Generate encryption key and initialization vector
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // Initialization vector
// 2. Function to encrypt data
const encrypt = (text) => {
 const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
 let encrypted = cipher.update(text, 'utf-8', 'hex');
 encrypted += cipher.final('hex');
 return encrypted;
};
// 3. Convert data to buffer
const buffer = Buffer.from('Hello, World!', 'utf-8');
// 4. Encrypt the data
const encryptedData = encrypt(buffer.toString());
console.log('Encrypted Data:', encryptedData);
// 5. Store the encrypted data
fs.writeFileSync('encryptedData.txt', encryptedData, 'utf-8');
console.log('Encrypted data saved to file');
// To decrypt the data, use a similar process with `crypto.createDecipheriv`

const decrypt = (encryptedText) => {
 const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
 let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
 decrypted += decipher.final('utf-8');
 return decrypted;
};
const decryptedData = decrypt(encryptedData);
console.log('Decrypted Data:', decryptedData);


