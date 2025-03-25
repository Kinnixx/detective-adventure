const story = {
    0: {
      text: "La nuit est tombée sur la ville. Une silhouette se faufile dans la ruelle derrière ton bureau. Une voix t'appelle depuis l'ombre.",
      choices: [
        { text: "Répondre à la voix", next: 1 },
        { text: "Sortir ton arme et avancer prudemment", next: 2, effects: [{ stat: "charisme", value: -1 }] },
        { text: "Ignorer et retourner à l'intérieur", next: 3 }
      ]
    },
  
    1: {
      text: "La voix t’invite à t’approcher. Tu aperçois un jeune garçon, paniqué.",
      choices: [
        { text: "L’écouter attentivement", next: 4, effects: [{ stat: "deduction", value: 1 }] },
        { text: "Lui donner une potion de calme (objet requis)", next: 5, requiredObject: "Potion de calme" }
      ]
    },
  
    2: {
      text: "Tu avances, arme à la main. La silhouette recule et glisse un papier dans ta poche sans un mot.",
      choices: [
        { text: "Récupérer le papier", next: 6, items: [{ object: "Billet anonyme", type: "infos", content: "« Rendez-vous au quai 17 avant minuit. Seul. »" }] },
        { text: "Ignorer le papier et retourner au bureau", next: 3 }
      ]
    },
  
    3: {
      text: "Tu retournes au bureau. La pluie s’intensifie dehors. Quelque chose cloche.",
      choices: [
        { text: "Examiner ton bureau", next: 7 },
        { text: "Boire un verre pour te détendre", next: 7, effects: [{ stat: "deduction", value: -1 }] }
      ]
    },
  
    4: {
      text: "Le garçon te raconte qu’un homme étrange a emmené sa sœur. Il te tend un pendentif trouvé sur place.",
      choices: [
        { text: "Prendre le pendentif", next: 8, items: [{ object: "Pendentif" }] },
        { text: "Refuser et lui dire de voir la police", next: 3 }
      ]
    },
  
    5: {
      text: "Tu lui donnes la potion. Il se calme immédiatement et te murmure un nom : « Le Corbeau ».",
      choices: [
        { text: "Prendre des notes", next: 8, items: [{ object: "Note 'Le Corbeau'", type: "infos", content: "Nom d’un criminel notoire dans le réseau des docks. Quai 17." }] }
      ]
    },
  
    6: {
      text: "Le billet t’intrigue. Tu décides de suivre l’indice seul.",
      choices: [
        { text: "Aller au quai 17", next: 9, requiredStat: { stat: "charisme", value: 2 } },
        { text: "Chercher d’autres informations avant", next: 7 }
      ]
    },
  
    7: {
      text: "Rien de nouveau au bureau. Tu prends une décision.",
      choices: [
        { text: "Aller au quai 17", next: 9 },
        { text: "Mettre fin à l’enquête ici", next: 99 }
      ]
    },
  
    8: {
      text: "Grâce aux indices du garçon, tu traces une piste jusqu’aux anciens entrepôts.",
      choices: [
        { text: "Explorer discrètement", next: 9, effects: [{ stat: "deduction", value: 1 }] },
        { text: "Y aller de front, confiant", next: 9, effects: [{ stat: "charisme", value: -1 }] }
      ]
    },
  
    9: {
      text: "Tu arrives au quai 17. Un homme t’attend dans l’ombre. Il sourit.",
      choices: [
        { text: "L’affronter verbalement", next: 99, requiredStat: { stat: "charisme", value: 3 } },
        { text: "Lui montrer le pendentif", next: 99, requiredObject: "Pendentif" },
        { text: "Fuir discrètement", next: 99 }
      ]
    },
  
    99: {
      text: "Fin de la démo. Tu peux relancer l’histoire pour tester d’autres chemins.",
      choices: [
        { text: "Recommencer", next: 0 }
      ]
    }
  };
  
  export default story;
  