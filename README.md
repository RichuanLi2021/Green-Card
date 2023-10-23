# Geriatric Psychotropic Green Card

A Geriatric Psychotropic Drug Reference Card which brings together practice guideline recommendations, drug safety
information and practical medication data informed by expert opinion, into a quick reference guide

## Table of Contents
* [Getting Started](#getting-started)
* [Development](#development)
  * [Pre-requisites](#pre-requisites)
  * [Installation](#installation)
* [Deployment](#deployment)
* [Versions](#versions)

## Getting Started

To get started with developing the application, follow the steps found in the [Installation](#installation) section.

## Development

### Pre-requisites

* [GitBash](https://git-scm.com/downloads)
* MySQL/MariaDB Database and DBMS
  * **Recommended**: [Laragon](https://laragon.org/) (includes HeidiSQL DBMS)
  * [MAMP](https://www.mamp.info/en/) (includes PHPMyAdmin DBMS)
* [Node.js](https://nodejs.org/en/)

### Installation

1. Clone the repository
```
git clone https://git.cs.dal.ca/courses/csci-x691/geriatric-psychiatry-green-card.git
```

2. Navigate into the repository directory and open a terminal window to install the dependencies
```
npm install
```

3. After the dependencies have been installed, navigate into the ***/backend*** directory and create a copy of the
   `.env.sample` file, then name it to `.env`. Edit this file to include your database information, frontend URL, and backend port.
```
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=green_card
DB_USERNAME=root
DB_PASSWORD=

FRONTEND_URL=http://localhost:3000
API_PORT=8887
```

4. Navigate to the ***/frontend*** directory and create a copy of the `.env.sample` file, then name it to `.env`. Edit
   this file to include your backend URL and port.
```
REACT_APP_BACKEND_URL=http://localhost:8887
```

5. Navigate back to the root directory and start the application
```
npm run dev
```

## Deployment

## Versions

All source code versions can be found in the [tags](https://git.cs.dal.ca/courses/csci-x691/geriatric-psychiatry-green-card/-/tags)
section of the repository.

### 2023F_Sprint_2 *(10/18/2021)*
* Changes here.