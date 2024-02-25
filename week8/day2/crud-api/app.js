const express = require('express');
const app = express();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});


const express = require('express');
const { fetchPosts } = require('./data/dataService'); 

const app = express();
app.get('/posts', async (req, res) => {
    try {
      const posts = await fetchPosts();
      console.log('Posts récupérés avec succès');
      res.json(posts);
    } catch (error) {

      console.error('Erreur lors de la récupération des posts:', error);
      res.status(500).send('Erreur interne du serveur');
    }
  });
  const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

  