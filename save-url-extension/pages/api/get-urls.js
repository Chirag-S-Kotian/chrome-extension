import { db } from '../../firebaseAdmin';

export default async function handler(req, res) {
  try {
    const snapshot = await db.collection('urls').get();
    const urls = snapshot.docs.map(doc => doc.data().url);
    res.status(200).json({ urls });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve URLs' });
  }
}
