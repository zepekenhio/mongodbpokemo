# Poké-MongoDB (Back-end uniquement)

Tu vas construire une **API Pokémon** avec Node, Express et MongoDB. Ton API permettra d’effectuer des opérations CRUD sur les  Pokémon originaux.

## Démarrer l’application

- `npm install`
- `npm start`


### Back-end

En utilisant le code existant dans `server/`, suis les étapes ci-dessous pour construire l’API Pokémon :

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/pokemon     |    GET     |      vide          |                    Retourne le JSON de tous les Pokémon                     |
|     /api/pokemon     |    POST    |      JSON          | Crée un Pokémon et retourne le JSON du Pokémon créé                         |
|     /api/pokemon     |   DELETE   |      vide          | Supprime tous les Pokémon et retourne le JSON des éléments supprimés        |
| /api/pokemon/:number |    GET     |      vide          | Retourne le JSON d’un seul Pokémon correspondant au `number`                |
| /api/pokemon/:number |    PUT     |      JSON          | Met à jour le Pokémon correspondant au `number` et retourne le JSON mis à jour |
| /api/pokemon/:number |   DELETE   |      vide          | Supprime le Pokémon correspondant au `number` et retourne le JSON supprimé   |

- [ ] Connecter Mongoose à ta base Mongo locale dans `db/index.js`.
- [ ] Créer un modèle Pokémon dans `model/Pokemon.js` et l’enregistrer auprès de Mongoose sous la collection `Pokemon` avec les propriétés suivantes :
  - [ ] `number`, un numéro unique
  - [ ] `name`, une chaîne unique
  - [ ] `types`, un tableau de chaînes
  - [ ] `imageUrl`, une chaîne
- [ ] Remplir la base Mongo avec les 151 Pokémon de `data/pokemon.json` en exécutant `npm run seed:db` (FAIRE CETTE ÉTAPE APRÈS AVOIR IMPLÉMENTÉ TON SCHEMA).
- [ ] Créer un contrôleur dans `controller/pokemonController.js` qui interagit avec ton modèle Pokémon.
- [ ] Créer un router dans `router/pokemonRouter.js` qui utilise chaque méthode du contrôleur. Gérer correctement les erreurs.
- [ ] Importer `pokemonRouter` dans `server/index.js` et l’affecter à la route appropriée.

### Middleware

> **Important :** Termine d’abord **back-end** avant de passer ici.

Dans `server/middleware/rateLimiter.js`, crée un middleware personnalisé implémentant le rate limiting avec les règles suivantes :

- [ ] Exiger que chaque requête vers `/api/pokemon` contienne la propriété `User` dans les headers (le serveur doit rejeter les requêtes qui n’ont pas ce header).
- [ ] Autoriser uniquement 100 requêtes par heure par utilisateur.
- [ ] Monter le middleware à l’emplacement approprié dans `server/server.js`.

# Poké-MongoDB (Version Avancée)

Tu vas améliorer ton **API Pokémon** avec **des relations et un middleware supplémentaire**, avant d’ajouter plus tard une authentification.  
L’objectif est de rendre ton projet plus structuré et réaliste.

---

## ⚙️ Étape 1 : Relation One-to-Many (Trainer → Pokémon)

Ajoute un système de **dresseurs (Trainer)** dans ton application.

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/trainers     |    GET     |      vide          | Retourne la liste de tous les dresseurs                                    |
|     /api/trainers     |    POST    |      JSON          | Crée un nouveau dresseur et retourne son JSON                              |
| /api/trainers/:id/add-pokemon/:pokemonId | POST | vide | Ajoute un Pokémon à un dresseur donné                                      |
| /api/trainers/:id/pokemons | GET | vide | Retourne tous les Pokémon appartenant à un dresseur donné                 |

### À faire :
- [ ] Créer le modèle `Trainer` dans `trainer/Trainer.js` avec les propriétés :
  - `name` : string (unique, requis)
  - `age` : number
  - `pokemons` : tableau d’ObjectId (`ref: "Pokemon"`)
- [ ] Ajouter une référence `trainer` dans le modèle `Pokemon` (`ref: "Trainer"`)
- [ ] Créer un contrôleur et un router `trainerRouter.js`
- [ ] Gérer l’ajout d’un Pokémon à un dresseur (et mise à jour des deux côtés)
- [ ] Utiliser `populate()` pour afficher les Pokémon d’un dresseur

---

## ⚙️ Étape 2 : Relation Many-to-Many (Pokémon ↔ Zones)

Ajoute une nouvelle collection **Zone**, qui représente des zones où vivent plusieurs Pokémon.  
Un Pokémon peut vivre dans **plusieurs zones**, et une zone peut contenir **plusieurs Pokémon**.

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/zones     |    GET     |      vide          | Retourne la liste des zones                                                |
|     /api/zones     |    POST    |      JSON          | Crée une nouvelle zone                                                     |
| /api/zones/:zoneId/add-pokemon/:pokemonId | POST | vide | Ajoute un Pokémon à une zone                                               |
| /api/zones/:id/pokemons | GET | vide | Retourne tous les Pokémon d’une zone donnée                                |

### À faire :
- [ ] Créer le modèle `Zone` avec :
  - `name` : string (unique)
  - `region` : string
  - `pokemons` : tableau d’ObjectId (`ref: "Pokemon"`)
- [ ] Dans `Pokemon`, ajouter un champ `zones` : tableau d’ObjectId (`ref: "Zone"`)
- [ ] Créer un contrôleur et un router `zoneRouter.js`
- [ ] Gérer l’ajout et la récupération des Pokémon dans chaque zone
- [ ] Utiliser `populate()` dans les deux sens (pour afficher les relations)

---

## ⚙️ Étape 3 : Nouveau Middleware Personnalisé

Crée un middleware global `server/middleware/logger.js` pour **enregistrer chaque requête** dans la console (ou dans un fichier plus tard).

### Règles :
- [ ] Le middleware doit afficher :
  - Le verbe HTTP (`req.method`)
  - L’URL (`req.originalUrl`)
  - L’heure de la requête
- [ ] Monter ce middleware avant les routes dans `server/index.js`
- [ ] Exemple de log :

## ⚙️ Étape 4 : Authentification JWT

Ajoute une **authentification JWT** pour sécuriser certaines routes de ton API.

|         URL          | Verbe HTTP | Body de la requête |                                  Résultat                                  |
| :------------------: | :--------: | :----------------: | :-------------------------------------------------------------------------: |
|     /api/register     |    POST    | { "username", "password" } | Crée un utilisateur et retourne un token JWT                               |
|     /api/login        |    POST    | { "username", "password" } | Vérifie les identifiants et retourne un token JWT                          |
|     /api/pokemon      | (GET, POST, DELETE) | vide ou JSON | Accessible seulement avec un JWT valide dans le header `Authorization`      |
|     /api/trainers     | (POST, GET) | JSON | Accessible seulement avec JWT valide                                       |
|     /api/zones        | (POST, GET) | JSON | Accessible seulement avec JWT valide                                       |

### À faire :
- [ ] Installer `jsonwebtoken` et `bcrypt` pour le hash des mots de passe
- [ ] Créer un modèle `User` avec `username` et `password` hashé
- [ ] Créer les routes `/register` et `/login` pour générer les JWT
- [ ] Créer un middleware `authMiddleware.js` pour :
  - Vérifier la présence du header `Authorization: Bearer <token>`
  - Valider le token
  - Attacher les informations de l’utilisateur à `req.user`
- [ ] Protéger les routes sensibles (`POST /api/pokemon`, `/api/trainers`, `/api/zones`) avec ce middleware

