# Detective Quest 🕵️

**[EN COURS DE DÉVELOPPEMENT]**
*+ Les choix ne sont pas encore cohérents, et l'histoire non plus.*

Bienvenue dans **Detective Quest**, un jeu narratif où vous incarnez un détective fauché et peu investi dans son travail, plongé dans une enquête futuriste qui va rapidement tourner au **chaos** ! 🔎💼

## 🚀 Fonctionnalités
- **Scénario interactif** avec plusieurs choix et conséquences.
- **Système de compétences** influençant les décisions.
- **Inventaire dynamique** contenant des objets récupérés pendant l'enquête, qui peuvent être très utiles... ou au contraire, vous mettre des bâtons dans les roues !
- **Interface fluide et responsive** (Next.js + Tailwind CSS).
- **Animations et transitions modernes** avec Framer Motion.

## 🛠️ Technologies utilisées (d'autres à venir)
- **Next.js**
- **Tailwind CSS**
- **Zustand**
- **Supabase**

## 📦 Installation

1. **Clonez le repo** :
   ```sh
   git clone https://github.com/Kinnixx/detective-quest.git
   cd detective-quest
   ```
2. **Installez les dépendances** :
   ```sh
   npm install
   ```
3. **Lancez le projet en local** :
   ```sh
   npm run dev
   ```
4. **Accédez au jeu** via [http://localhost:3000](http://localhost:3000)

## 🎮 Comment jouer ?
- Lisez attentivement le scénario affiché.
- Faites des **choix stratégiques** qui influencent l'histoire.
- Surveillez vos **compétences** pour débloquer certaines options.
- Consultez votre **inventaire** pour voir vos objets récupérés.
- **Utilisez intelligemment** les objets consommables trouvés au cours de l'aventure.

## 📂 Architecture du projet
```
📂 detective-quest/
 ├── 📂 pages/         # Pages principales du jeu
 ├── 📂 components/    # Composants UI (HUD, boutons...)
 ├── 📂 store/         # Gestion de l'état avec Zustand
 ├── 📂 data/          # Scénario du jeu (WIP, bientôt en BDD)
 ├── 📜 tailwind.config.js  # Config Tailwind CSS
 ├── 📜 package.json   # Dépendances & scripts
 └── 📜 README.md      # Ce fichier !
```

## 💡 Améliorations futures
- 📜 **Ajout de nouvelles intrigues et fins alternatives**
- 🔄 **Sauvegarde des choix du joueur pour afficher des statistiques**
- 🎮 **Gestion avancée de l'inventaire et des objets consommables**
- 🌐 **Connexion API**
- Et bien d'autres à venir...

## 🤝 Conventions & Contribution

Même si ce projet est solo (pour l’instant 👀), il suit une structure claire :

### 🔀 Branches
- `main` : la branche stable, propre, toujours déployable.
- `dev` : la branche de développement active.
- ➕ **Chaque fonctionnalité** peut être développée sur une branche dédiée (`feat/tooltips`, `refactor/HUD`, etc.) puis mergée via une **PR propre vers `dev`**.

### 📝 Commits
Les messages de commit suivent ce format :

#### 🔖 Types de commit :

- `feat` : ajout d'une nouvelle fonctionnalité  
- `fix` : correction de bug  
- `refactor` : amélioration du code sans ajout de fonctionnalité  
- `style` : modification du style
- `docs` : modifications de documentation  
- `chore` : tâches diverses (MAJ dépendances, config…)

#### ✏️ Corps du message (optionnel) :
...

_✨ Grâce à un template de commit configuré, le format est pré-rempli automatiquement._

### 📋 Pull Requests
Chaque PR s’appuie sur un **template automatique**, avec :
- une description claire  
- une checklist à valider  
- des screenshots si besoin

### 🧾 Issues
Des modèles d’issues sont prêts pour :
- [x] Suggérer une **nouvelle fonctionnalité**
- [x] Déclarer un **bug**
- [x] Lister un **refacto ou une amélioration de code**

---

_Développé par **[@Kinnixx](https://github.com/Kinnixx)** 🎸💻_
