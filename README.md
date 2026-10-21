# Unique — Location de voitures à Abidjan

Site vitrine d'un loueur de véhicules premium à Abidjan : SUV, berlines de
direction et collection prestige, avec ou sans chauffeur. Entièrement en
français, tarifs en francs CFA, réalisé en **HTML, CSS et JavaScript vanilla** —
aucun framework, aucune étape de build.

Conception & développement : [Damiti Ouattara](https://damiti-ouattara.vercel.app/)

## Pages

| Fichier | Contenu |
| --- | --- |
| `index.html` | Accueil : héros, réservation en 3 étapes, carrousel de la flotte, garanties, appel à l'action |
| `voitures.html` | Catalogue de 8 véhicules avec tarifs, cautions et conditions, plus la collection prestige sur demande |
| `services.html` | Formules courantes, location avec chauffeur, contrats entreprises, événementiel, prestations incluses |
| `a-propos.html` | Histoire depuis 2017, atelier intégré, chiffres clés, engagements |
| `reservation.html` | Les 4 étapes, demande de rappel, pièces à fournir, caution et paiement |
| `contact.html` | Trois points de retrait, coordonnées, formulaire e-mail, 8 questions fréquentes |

## Ce qui a été fait

- **Barre de navigation fixe** sur toutes les tailles d'écran. Elle était déjà
  fixe sur mobile ; elle l'est désormais aussi sur ordinateur et devient blanche
  dès le défilement pour rester lisible au-dessus du contenu.
- **Traduction intégrale en français** : contenus, métadonnées, titres de pages,
  `lang="fr"`, code et commentaires.
- **Cinq pages ajoutées** pour que tous les liens du modèle aboutissent.
- **Adaptation à la Côte d'Ivoire** : siège boulevard VGE à Marcory, comptoir à
  l'aéroport Félix-Houphouët-Boigny, point de livraison à Cocody Riviera,
  indicatif **+225**, domaine `.ci`, tarifs en **FCFA**, paiements Wave / Orange
  Money / MTN MoMo, trajets vers Bouaké, Korhogo, Man et San-Pédro.
- **Flotte nommée correctement** d'après les photos fournies : Toyota Land
  Cruiser 300, Range Rover Velar, Mercedes-Benz Classe E, BMW Série 7,
  Mercedes-Maybach Classe S, Mercedes-AMG EQS, Cadillac CT5, Aston Martin DB12,
  Ferrari SF90, BMW Z4, Toyota GR Supra et Porsche 718 Boxster.
- **Formulaires fonctionnels côté client** : champs requis validés par le
  navigateur, puis le titre au-dessus du champ affiche la confirmation avant de
  revenir à son état initial.
- **Mentions de propriété** : le crédit d'origine est remplacé par
  « © 2026 Unique Abidjan » et le crédit de conception.

## Le design n'a pas été modifié

Aucun composant, aucune couleur, aucune police et aucune section n'ont été
inventés : les nouvelles pages sont assemblées uniquement à partir des blocs
existants (`header`, `.about__container`, `.fleet__wrapper` + carrousel,
`.feature__grid` + `.feature__card`, `.banner__container`, `.footer__col` et son
champ, `footer`).

Quatre ajustements CSS ont été nécessaires, tous destinés à **préserver**
l'apparence existante :

| Ajustement | Pourquoi |
| --- | --- |
| `nav` fixe au-dessus de 768 px, centré par `padding-inline` | La navbar fixe demandée, sans toucher au balisage |
| `nav.scrolled { background-color: var(--white) }` | Sans fond, les liens sombres deviendraient illisibles sur le contenu qui défile |
| `header { padding-block: 6.5rem 3rem }` (> 768 px) | La barre étant hors du flux, le titre retrouve sa position d'origine (à 1 px près) |
| `.footer__bar a { color: var(--text-dark) }` | Éviter le bleu de lien par défaut sur le crédit, avec la couleur déjà utilisée par les liens du pied de page |

Le bouton `.btn` n'a pas été touché : un `<a class="btn">` s'affiche déjà à
l'identique (mesuré : 144 × 41 px, Poppins 500, fond noir, rayon 80 px).

## Trois décisions à valider

1. **`assets/about.png` n'est plus utilisé.** Cette maquette de téléphone
   contient du texte anglais incrusté dans l'image (« Vehicle Checking »,
   « Check My Car », « Total Distance », « No Result »), incompatible avec un
   site entièrement en français. La section correspondante utilise désormais une
   photo de la flotte. Fournissez une maquette en français et je la remets.
2. **Le bouton « Download App » est devenu « Réserver ».** Il n'existe pas
   d'application, et les trois occurrences ne menaient nulle part. Le composant
   est identique, seuls le libellé, l'icône et la destination changent.
3. **Pas de formulaire de réservation multi-champs.** Le design d'origine ne
   comporte aucun système de formulaire (labels, champs, sélecteurs) : en créer
   un aurait signifié ajouter au design. La réservation passe donc par WhatsApp,
   le téléphone et le champ « Être rappelé sous une heure », qui réutilise
   exactement le champ de la lettre d'information. Dites-le si vous préférez un
   formulaire complet, j'ajouterai les styles correspondants.

## Structure

```
.
├── index.html          ├── a-propos.html
├── voitures.html       ├── reservation.html
├── services.html       └── contact.html
├── styles.css          # feuille de styles d'origine + 4 ajustements
├── main.js             # menu mobile, barre au défilement, formulaires, carrousel, animations
└── assets/             # photos de la flotte et logos
```

## Dépendances (via CDN)

- [Remix Icon](https://remixicon.com/) — icônes
- [ScrollReveal](https://scrollrevealjs.org/) — animations d'apparition
- Google Fonts — *Poppins*

## Lancer le projet

Ouvrez `index.html` dans un navigateur, ou servez le dossier :

```bash
python -m http.server 5179
```

## Déploiement

Site statique : le dossier se déploie tel quel, sans configuration.

```bash
npx vercel --prod
```
