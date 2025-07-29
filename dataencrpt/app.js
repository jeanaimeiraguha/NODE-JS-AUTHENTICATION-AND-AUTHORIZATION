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
