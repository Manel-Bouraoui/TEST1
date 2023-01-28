
# Worthy Challenge

Hello! 👋

Welcome to your entry challenge in D-SAP. This exercice is specifically designed for you to challenge yourself and to prove your worthiness to join our Team.

## Submission

You 60 hours to deliver this challenge. To submit your work, make sure you:
- [ ]  Clone this repository
- [ ]  Create a new branch under your name
- [ ]  Make the changes for this challenge locally
- [ ]  Commit your work whenever a task is done with a message Task X done
- [ ]  Push your local branch
- [ ]  Put node_modules in the .gitignore file

## Challenge

Projet React et NodeJs Gestion de machineries dans une usine industrielle

### Fonctionnalités: 
- S'authetifier en tant qu'admin : Login (username password)
- S'authetifier en tant que client industriel (propriètaire de l'usine) : Login + Signup [FirstName, Lastname, email, Password]

- Ajouter une usine + CRUD:
	- Nom
	- Addresse ou localisation
	- liste des machines dans cette usine

- Ajouter une machine + CRUD: 
	- nom de la machine (obligatoire)
	- numéro de série ou référence à la machine physique (obligatoire, validation alphanumérique)
	- catégorie du process (obligatoire)
	- image de la machine
	- Statut; en marche ou en arrêt ( on peut mettre des valeurs statiques pour chaque machine, valeur par défaut en marche == 1)
NB: On peut faire: Create, Read, Update, Delete et Disable (disable est une valeur booléenne). Seulement l'admin peut activer ou désactiver une machine.

- Lister les usines pour chaque client
- Lister les machines par usine

- Envoyer un email au client quand plus que 2 machines de la même usine et de la même catégorie sont en arrêt. Le contenu de l'email doit contenir les informations suivantes: nom, numéro de série de la machine, usine à la quelle la machine existe, instant ou chaque machine a été détecté en statut arrêt.(Je propose qu'on teste ca en modifiant manuellement du marche à l'arrêt)

### Permissions:
Chaque client ne peut consulter que ses données (relatifs à l'usine et machines).
L'admin peut voir les données de tous les clients. 
### Forumulaires
Pour les formulaires afficher les erreurs sous chaque champ input: Si le champ est obligatoire alors il faut afficher une erreur tel que : Ce champ est obligatoire !

### Exemples données de test
```json
Usine 1: {"id": "ZIEÇ56SZ92DKD5J001EHM", "usine_nom": "Jella Gas 1", "addresse": "Mahdia XXKD 45 RPOE EKEHS", "machines": [...]}

MAchine 1: {"machine_id": "DLKZÇ403D6F52QSS869DK", "usine_id": "ZIEÇ56SZ92DKD5J001EHM", "machine_nom": "methaniseur", "reference": "ZI3012847KDJ248", 
		"catégorie": "micro-méthanisation", "image": null, "status": 1}
```

### Stack technique: 
- [ ]  Intégrer une Template dans le projet.
- [ ]  Utiliser Bootstrap pour le design.
- [ ]  Utiliser les packages Node JS Et Reactjs  nécessaire pour réaliser ce projet.
- [ ]  Choix libre de bases de données.

## Best of luck 🤞
