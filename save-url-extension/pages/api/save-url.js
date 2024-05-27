import { db } from '../../firebaseAdmin';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;
    try {
      await db.collection('urls').add({ url });
      res.status(200).json({ message: 'URL saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save URL' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
