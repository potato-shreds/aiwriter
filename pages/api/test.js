import axios from 'axios';
const instance = axios.create();
instance.interceptors.response.use((res) => res.data);
import geminiApi from '@/app/utils/gemini';
let tasks = [];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(tasks);
      break;
    case 'POST':
      console.log(req.body);
      geminiApi
        .haikuGenerator({
          content1: 'swimming is fun',
          content2: 'I love swimming',
          language: 'English',
        })
        .then((res) => {
          res.status(200).json({ message: JSON.stringify(res) });
        });
      // instance.post("http://34.82.68.172:8080/api/restore").then(data => {
      //   console.log(data)
      //   res.status(201).json({ message: JSON.stringify(data), });
      // }).catch(err => {
      //   console.log("err: ", err)
      //   res.status(201).json({ message: err.toJSON(), });
      // })

      break;
    case 'DELETE':
      tasks = [];
      res.status(200).json({ message: 'All tasks deleted!' });
      break;
    default:
      res.status(405).json({ error: 'Method not allowed' });
  }
}
