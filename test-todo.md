Stratégie de test

Outils
- Jest
- Supertest

Type de tests
- Unitaires
- Bout en bout

Arborescence des fichiers de tests
src/
  ├── auth
    ├── controllers
    ├── services
    └── modules
  └── tests/
    └── auth
      ├── controllers
      ├── services
      └── e2e/

Tests unitaires
- Tester les méthodes et fonctions de manière isolées
- S'approcher d'une couverture à 100% (Jest coverage)

Tests de bout en bout
- Avec Supertest, réaliser des tests à partir d'une requête HTTP jusqu'à sa réponse attendue
- Pour chaque test, initialiser la BDD de test avec un seeder et la nettoyer après execution du test

Ordre d'éxécution des tests
- Unitaires à éxecuter à chaque deploiement dans la pipeline CI/CD (Github actions)
- Bout en bout à éxecuter à chaque deploiement dans la pipeline CI/CD (Github actions)
