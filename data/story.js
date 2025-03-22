const story = {
    0: {
        text: "Après une journée des plus ennuyeuses, à traiter un énième conflit de voisinnage, te voilà assis dans ton bureau miteux, les jambes allongées sur le bureau, un verre de whisky bon marché dans la main. Quelqu'un toque à la porte, surement un client, à moins que ça ne soit encore un voisin agaçant.",
        choices: [
            { text: "Se lever et aller ouvrir la porte", next: 1 },
            { text: "Ignorer et continuer à boire jusqu'à l'heure du coucher", next: 2, effects: [{ stat: "charisme", value: -1 }]}
        ]
    },
    1: {
        text: "Tu ouvres la porte, un homme d'une trentaine d'années en trench-coat te regarde, visiblement un peu anxieux vu la manière dont il triture ses doigts. \"J'ai ... une affaire pour vous.\", dit-il d'une voix nerveuse. \"Mais elle est un peu dangereuse.\"",
        choices: [
            { text: "Accepter de l'écouter", next: 3, effects: [{ stat: "deduction", value: +1 }] },
            { text: "Refuser, t'as pas le temps de ça", next: 4 }
        ]
    },
    2: {
        text: "Tu décides d'ignorer la porte et tu termines ton whisky. Le lendemain, tu te réveilles avec la pire gueule de bois de ta vie... et une facture impayée.",
        choices: [
            { text: "Recommencer", next: 0 }
        ]
    },
    3: {
        text: "Tu retournes t'asseoir, l'invitant à faire de même et tu l'écoute attentivement. \"Un bien précieux m'a été dérobé ... et avant de me dire d'aller voir la police, je préfère éviter. J'ai toutes les raisons de croire que ma femme bien aimée est impliquée et j'ai besoin que vous enquêtiez sur elle ... et que vous trouviez à qui elle a pu apporter cet objet.\" expliqua-t-il.",
        choices: [
            { text: "Lui demander plus d'informations sur le bien dérobé", next: 5, effects: [{ stat: "deduction", value: 1 }] },
            { text: "Accepter l'affaire et prendre une avance", next: 5, effects: [{ stat: "charisme", value: 1 }], items: [{ object: "Potion de réflexion", type: "affectStats", use: { stat: "deduction", value: 2} }] }
        ]
    },
    4: {
        text: "L'homme écarquille les yeux, un peu paniqué face à ton refus instantané. \'Attendez ! Je peux payer, grassement ... je suis prêt à donner toutes mes économies ! Tenez, je vous donne même une avance de 100 crédits !\" s'écria-t-il.",
        choices: [
            { text: "Être payé grassement t'intéresse, tu l'écoutes.", next: 3, items: [{ object: "100 crédits"}] },
            { text: "Tu n'y crois absolument pas, le mettre dehors", next: 2, effects: [{ stat: "charisme", value: -1 }] }
        ]
    },
    5: {
        text: "\"Il s'agit d'une relique très ancienne ... quelque chose qui comporte un grand pouvoir. Ecoutez attentivement : il ne faudra surtout pas que vous la touchiez, elle pourrait vous ... tuer. Vous devrez être très prudent.\" dit-il, le regard sérieux. Il te tend notamment un document, sur laquelle est affichée une photo de sa femme et quelques informations.",
        choices: [
            { text: "Tu prends le document, tu te lèves et tu quittes le bureau sans attendre.", next: 7, items: [{ object: "Document du client", type: "infos" }]},
            { text: "Tu prends le document, tu le ranges, et tu demandes plus d'informations sur cette relique si dangereuse.", next: 8, items: [{ object: "Document du client", type: "infos" }]},
            { text: "Tu ouvres un tiroir et prend ton carnet, hors de question de toucher ce document.", next: 6, items: [{ object: "Carnet" }]}
        ]
    },
    6: {
        text: "Tu prends ton carnet poussiéreux puisque tu n'as pas les moyens de t'acheter la tablette dernier cri, et tu notes tout ça.",
        choices: [
            { text: "END", next: 0}
        ]
    },
    7: {
        text: "Tu quittes le bureau sans attendre, prêt à te lancer dans cette enquête...",
        choices: [
            { text: "Mais pas avant un verre. Tu te diriges vers le bar le plus proche.", next: 0 },
        ]
    },
    8: {
        text: "\"La relique ... écoutez, moi-même je ne sais pas trop ce qu'elle contient. Je sais seulement qu'elle ne vient pas de notre planète. C'est très délicat...\"",
        choices: [
            { text: "Tu n'as jamais aimé les autorités. Tu acceptes l'affaire et tu te lèves, prêt à partir.", next: 7 },
            { text: "Sortir un contrat et exiger la somme de 5000 crédits en paiement", next: 0, requiredStat: { stat: "charisme", value: 2 },effects: [{ stat: "chance", value: +1 }] },
            { text: "Sortir un contrat et exiger la somme de 8000 crédits en paiement", next: 0, requiredStat: { stat: "charisme", value: 4 }, effects: [{ stat: "chance", value: +2 }] },
            { text: "Sortir un contrat et exiger la somme de 1000 crédits en paiement", next: 0, requiredStat: { stat: "charisme", value: 1 }},
        ]
    }
};

export default story;