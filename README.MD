#  :seedling:  DryField  :ear_of_rice:
*Farmer simulation game*

It was a school project. 
Main goal : Make an autonomous javascript application that communicates with a REST web API.

On the other hand, the game goal is to make as many crops as possible.

Furthor more explanation are available below, in English & in French (yeah, we are French :sunglasses: !!).

---

### English

## Needs

The principle is to fill the water tanks of 3 fields that need to be irrigated every day (seconds in the game) to push.

The player has a global water reserve that can be filled by buying water. He then irrigates his fields from this global reserve. The player sells mature fields to recover money for reinvestment in water.

If a field is out of water (more water in the tank of the field), its harvest is lost. When the tank is refueled, the field maturity count resets to 0.

The consumption of the fields will increase to simulate an aridity. The pace of games will accelerate until the three fields without water in their tanks. The game is over. The number of harvests made is the score of the game.

The score is sent to a server that provides a REST Service web API to receive the new scores and make available the scores already saved. The player can check the scores of everyone.

The goal of average game time is 10 minutes and the maximum time is 15 minutes.

## Management rules

* Initial money: $ 50
* Initial reserve: 3 L / tank + 3 liters overall
* Initial consumption: 1l / second
* Maximum consumption: 2L / second
* You need to find a rule of increasing consumption to achieve game time goals.
* Number of seconds for a field to mature: 20 seconds
* Price of water: $ 1 / L
* Price of a harvest: $ 40
* A field ready to harvest does not consume water.

---

### French

## Besoin

Le principe est de devoir remplir les citernes d’eau de 3 champs qui ont besoin d’être irrigué tous les jours (secondes dans le jeux) pour pousser.

Le joueur à une réserve d’eau globale qu’il peut remplir en achetant de l’eau. Il irrigue ensuite ses champs en puisant dans cette réserve globale. Le joueur vend les champs arrivés à maturité pour récupérer de l’argent qu’il réinvestira dans de l’eau.

Si un champ est en rupture d’eau (plus d’eau dans la citerne du champ), sa récolte est perdue. Quand la citerne sera réalimentée, le décompte de maturité du champ repart à 0.

La consommation des champs va augmenter pour simuler une aridité. Le rythme de jeux va donc s’accélérer jusqu'à avoir les trois champs sans eau dans leurs citernes. La partie est alors terminée. Le nombre de récoltes effectuées est le score de la partie.

Le score est envoyé sur un serveur qui met à disposition une API web Service REST pour recevoir les nouveaux scores et mettre à disposition les scores déjà enregistrés. Le joueur peut consulter les scores de tout le monde.

L’objectif de temps moyen de jeu est de 10 minutes et le temps maximum 15 minutes.

## Règles de gestion

* Argent initial : 50$
* Réserve initiale : 3 L / citerne + 3 litres globale
* Consommation initiale : 1l / seconde
* Consommation maximum : 2L / seconde
* Vous devez trouver une règle d’augmentation de la consommation pour atteindre les objectifs de temps de jeu.
* Nombre de secondes pour qu’un champ soit mûr : 20 secondes
* Prix de l’eau : 1$ / L
* Prix d’une récolte : 40$
* Un champ prêt à récolter ne consomme pas d’eau.

---

## How to play ?  :leaves:

### Game Environment


### Here we go :mushroom: ! During the simulation
* While the game is running, ...

## Credits :beer: :trophy: 
It was a school project realized by :
- [Guillaume Bonhommeau]()
- [Louis Gautier]()
