TODO
- securite: retirer les informations de l'utilisateur du token JWT et laisser uniquement l'ID
  - Compenser la perte d'information en faisant une requete en BDD sur l'id qui se trouve dans le token

- Implementer la deconnection
  - Ecrire le dernier token attribué des utilisateurs en BDD
  - Verifier que l'utilisateur utilise le dernier token attribué et qu'il n'a pas la valeur null
  - Lors d'une demande de deconnection, mettre à jour le dernier token utilisé à null

- Découper les models de l'ORM Prisma
  - Recherche à faire sur les possibilités réalisables 
  - La possibilité doit permettre une validation fine des champs
  - Si aucune possibilités réalisables permet une validation des champs, passer par des DTO avec JOI
  - Mise en place de la possibilité la plus adaptée
  - Mise en place de la validation fine des champs
  - Mise en place de Swagger

- Gérer les erreurs Prisma
  - Possibilité retenue (https://aashishpeepra-ap.medium.com/what-if-you-just-wrap-your-entire-db-layer-in-one-giant-try-catch-649138bd2109)
  - mettre en place la possibilité retenue

- Ajouter la gestion des bad request quand le format du body n'est pas valide

- Mettre l'application NestJS dans un container Docker
- Ajouter la fonctionnalité de refresh token
