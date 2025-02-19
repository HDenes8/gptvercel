// 2. Backend - Next.js API Route (pages/api/cars.js)
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM cars');
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: 'Database error' });
    }
  }
}