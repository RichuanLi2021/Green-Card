# Geriatric Psychotropic Green Card

A Geriatric Psychotropic Drug Reference Card which brings together practice guideline recommendations, drug safety
information and practical medication data informed by expert opinion, into a quick reference guide

## Table of Contents
* [Getting Started](#getting-started)
* [Development](#development)
  * [Pre-requisites](#pre-requisites)
  * [Installation](#installation)
* [Versions](#versions)

## Getting Started

To get started with developing the application, follow the steps found in the [Installation](#installation) section.

## Development

### Pre-requisites

* [GitBash](https://git-scm.com/downloads) (Windows only)
* MySQL instance and DBMS
  * [Laragon](https://laragon.org/) (includes HeidiSQL DBMS) (**Recommended**)
  * [MAMP](https://www.mamp.info/en/) (includes PHPMyAdmin DBMS)
* [Node.js](https://nodejs.org/en/)

### Installation

1. Clone the repository

```
git clone https://git.cs.dal.ca/courses/csci-x691/geriatric-psychiatry-green-card.git
```

2. Navigate into the repository **root** **directory** by and **install project dependencies** by running the custom npm command:

   * **Note:** If the npm command isn't working for you, run the command, `npm install` in **each** of the **root**, ***frontend***, and ***backend*** directories.

```
npm run dev:install
```

3. After the dependencies have been installed, navigate into the ***/backend*** directory and **create a copy** of the
   `.env.sample` file, then name it to `.env`.

   * Edit this file to include your **API port**, **frontend URL**, **JWT secret string**, and **database credentials**. DB_DIALECT is defaulted to 'mysql'.

```
NODE_ENV=development

API_PORT=8887
FRONTEND_URL=http://localhost:3000
JWT_SECRET=
JWT_LENGTH_MS=604800000

DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=gpgc
DB_USERNAME=root
DB_PASSWORD=
DB_DIALECT=
```

4. Navigate to the ***/frontend*** directory and **create a copy** of the `.env.sample` file, then name it to `.env`.

   * Edit this file to include your **backend URL and port**.
```
NODE_ENV=development

REACT_APP_DEV_API_URL=http://localhost:8887
```

5. Navigate back to the root directory, and create and seed the database by running the command:
   * Note: This command also works in the */backend* directory.
```
npm run db:reset
```

5. Start the application by running the command:
```
npm run dev
```

## Versions

All source code versions can be found in the [tags](https://git.cs.dal.ca/courses/csci-x691/geriatric-psychiatry-green-card/-/tags)
section of the repository.
