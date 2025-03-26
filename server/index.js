import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// API routes will go here
app.get('/api/projects', (req, res) => {
  // Placeholder for projects data
  const projects = [
    {
      id: 1,
      title: "Project 1",
      coverImage: "/images/project1.jpg",
      description: "Description of project 1"
    },
    // Add more projects here
  ];
  res.json(projects);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
