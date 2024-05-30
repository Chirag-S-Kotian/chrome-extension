import * as admin from 'firebase-admin';


const serviceAccount = require('./serviceAccountKey.json'); // Assuming serviceAccountKey.json is in the same directory

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://chrome-b348f-default-rtdb.firebaseio.com" // Use environment variable for database URL
    });
  } catch (error) {
    console.error('Error initializing Firebase Admin:', error);
    // Handle initialization error appropriately (e.g., throw, exit)
  }
}

const db = admin.firestore();

export { db };
