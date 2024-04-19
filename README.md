## Pré-requis
  - Pouvoir utiliser docker-compose
  - Pouvoir utiliser Git
  - Pouvoir utiliser Yarn

## Installation
```bash
$ git clone https://github.com/alexandredemorypro/user-manager.git
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
