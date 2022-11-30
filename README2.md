# TP : Romain PANI

## Structure du code

Mon code suit une structure pages/components.

### Les pages

- Une page est composé de components
- Une page possède toujours le suffixe Page afin de le reconnaitre facilement
- Une page est jamais utilisé en tant que composant (sauf router ou retour conditionnel)

###Les composants
Un composant doit être le plus abstrait possible

- DRY (Don't Repeat Yourself) : si le code se répète c'est qu'un composant est nécessaire
- Open/Close Principle : Un composant est fermé à la modification/ouvert aux ajouts

### les autres dossiers

####apiCalls
contient tous les appels api et la logique derriere
####images
dossier parlant de lui même
####utils
Le dossier utils contient les constantes (currencies et baseCurrencies) ainsi que les fonctions générales (générateur d'ID crypté)

##Programmation Fonctionnelle
Si dessous les exemples de PF

###High Order Component
Dans le dossier page se trouve un sous-dossier template. Dans celui ci se trouve la fonction addAppBarToComponent qui rajoute l'app bar au composant rentré en paramètre (ne modifie pas le composant initial mais en crée un nouveau)

###Récursivité
La fonction removeUseless0 est une fonction récursive (NDLR: une fonction récursive n'est probablement pas le meilleur moyen d'arriver à la finalité attendue de la fonction. Mais c'était le seul endroit oùil y avait un sens dans faire une)

###Compose
Utilisation de la fonction compose à de multiples endroits
