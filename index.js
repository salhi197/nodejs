const https = require('https');
const querystring = require('querystring');

// Function to send a POST request
const sendPostRequest = () => {
  // Replace with your actual data
  const nin = ; // long number
  const nss = ; // long number
  const phoneNumber = ''; // phone number
  const wilaya = 15; // wilaya (region or province)

  const postData = querystring.stringify({
    nin: nin,
    nss: nss,
    phoneNumber: phoneNumber,
    wilaya: wilaya,
  });

  const options = {
    hostname: 'aadl3inscription2024.dz',
    port: 443, // HTTPS port
    path: '/AR/Inscription-AndroidiOS.php', // The specified path
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      'Content-Length': Buffer.byteLength(postData),
      'Accept-Encoding': 'gzip',
      'Host': 'aadl3inscription2024.dz',
      'User-Agent': 'Dart/3.4 (dart:io)',
    },
  };

  const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('Response:', data);
    });
  });

  req.on('error', (e) => {
    console.error('Error sending POST request:', e);
    setTimeout(sendPostRequest, 10000); // Retry after 5 seconds if error occurs
  });

  req.write(postData);
  req.end();
};

// Initial attempt to send POST request
sendPostRequest();

// Log when a new attempt starts
console.log('Sending POST request...');

