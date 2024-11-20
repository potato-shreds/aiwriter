import axios from 'axios';
const instance = axios.create();
instance.interceptors.response.use((res) => res.data);
import geminiApi from '@/app/utils/gemini';
import URL from '@/data/config';

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json('ok');
      break;
    case 'POST':
      console.log(req.body);
      console.log(req.query.api);
      const body = req.body;
      instance
        .post(`${URL.serverURL}/api/generate/${req.query.api}`, {
          ...body,
        })
        .then((data) => {
          console.log(data);
          res.status(201).json({ ...data });
        })
        .catch((err) => {
          console.log('err: ', err);
          res.status(201).json({ message: err.toJSON() });
        });

      break;
    case 'DELETE':
      res.status(200).json({ message: 'All tasks deleted!' });
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
