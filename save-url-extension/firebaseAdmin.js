import admin from 'firebase-admin';

const serviceAccount = require('./path/to/your/serviceAccountKey.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR_DATABASE_URL"
  });
}

const db = admin.firestore();

export { db };
