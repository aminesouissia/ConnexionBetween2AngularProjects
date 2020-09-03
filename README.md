# ConnexionBetween2AngularProjects
je voulais partager avec vous ce projet qui fait la connexion entre 2 projets Angular séparés avec deux versions différentes .
Un projet avec la version 5 et l'autre avec la derniére version qui est la 10 .
je voulais partager ce projet avec vous car tout simplement j'avais ce probléme quand mon client ma demandé de lui faire un projet Angular from scratch version 8 et il veux connecter un autre projets Angular version 5 se sont 2 projets Angular Séparés j'insiste à ce terme car si c'était juste de faire des sous projets Angular dans un seul projets je peux vous dire que c'est simple mais cette demande et de garder tout les fichiers du projet et le connecter à un autre projet .
PS: J'ai demandé autour de moi et se sont plus experimenté que moi et ils m'ont dit que c'est pas possible !!
et bah c'est possible . Les Details ci-dessous:

1: Tout d'abord faut cloner  ou bien  telecharger le projet. 

2:avoir 2 version d'Angular Cli (pour le projet Angular 5 il faut la version 1.6 et pour le projet Angular 10 il faut la version > 10) ne pas faire -g !! il faut les installer en local pas en global.

3:dans le projet Angular 5 : npm install @angular/cli@1.6

4:dans le projet Angular 10 : npm install @angular/cli@latest ou npm install @angular/cli@10

5:Apres que les 2 versions installés faire npm install dans chaque projet pour télecharger les nodes modules 

6:sur le projet Angular 5 faire : ng serve --port 1200

7:sur le projet Angular 10 faire : ng serve --port 1100

8: la normalement vous aurez les 2 projets ouverts simultanément .

Voilà ! Vous aurez un buttom dans chaque projet pour aller au deuxiéme projet et vice versa .

==> J'éspere que j'étais clair et je suis disponible pour toute question .





