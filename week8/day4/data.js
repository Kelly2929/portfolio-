const knex = require('knex')({
    client: 'pg', 
    connection: {
      host: '127.0.0.1',
      user: 'votre_utilisateur',
      password: 'votre_mot_de_passe',
      database: 'nom_de_la_base_de_donnees'
    }
  });
  