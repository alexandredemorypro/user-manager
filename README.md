## Pré-requis
  - Pouvoir utiliser docker-compose
  - Pouvoir utiliser Git
  - Pouvoir utiliser Yarn

## Installation
```bash
$ git clone https://github.com/alexandredemorypro/user-manager.git
$ cd user-manager
$ cp .env.exemple .env
$ yarn install
$ yarn prisma generate
$ docker-compose up -d
$ yarn prisma migrate dev
```

## Lancer l'app
```bash
$ yarn run start
```

## Désinstallation
```bash
$ docker-compose down
```
  - Supprimer le repertoire du projet cloné avec Git
  - supprimer le container docker créé

## Utilisation de l'API
  - Un fichier postman se trouve à la racine du projet, il contient une collection permettant l'utilisation complète de l'API. Pour la syntaxe des filtres de la méthode findAll(), l'utilisation est limité aux "where" et "orderBy". (https://www.prisma.io/docs/orm/prisma-client/queries/filtering-and-sorting)