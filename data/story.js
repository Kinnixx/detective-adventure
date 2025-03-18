const story = {
    0: {
        text: "Après une journée des plus ennuyeuses, à traiter un énième conflit de voisinnage, te voilà assis dans ton bureau miteux, les jambes allongées sur le bureau, un verre de whisky bon marché dans la main. Quelqu'un toque à la porte, surement un client, à moins que ça ne soit encore un voisin agaçant.",
        choices: [
            { text: "Se lever et aller ouvrir la porte", next: 1 },
            { text: "Ignorer et continuer à boire jusqu'à l'heure du coucher", next: 2}
        ]
    },
    1: {
        text: "Tu ouvres la porte, un homme d'une trentaine d'années en trench-coat te regarde, visiblement un peu anxieux vu la manière dont il triture ses doigts. \"J'ai ... une affaire pour vous.\", dit-il d'une voix nerveuse. \"Mais elle est un peu dangereuse.\"",
        choices: [
            { text: "Accepter de l'écouter", next: 3 },
            { text: "Refuser (Charisme requis)", next: 4, requiredStat: { stat: "charisme", value: 3 } }
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
            { text: "Lui demander plus d'informations sur le bien dérobé", next: 5 },
            { text: "Accepter l'affaire et prendre une avance (Ajoute 50$)", next: 6, addItem: "50 dollars" }
        ]
    },
    4: {
        text: "L'homme écarquille les yeux, un peu paniqué face à ton refus instantané. \'Attendez ! Je peux payer, grassement ... je suis prêt à donner toutes mes économies !\" s'écria-t-il.",
        choices: [
            { text: "Être payé grassement vous intéresse, l'écouter.", next: 3 },
            { text: "Vous n'y croyez absolument pas, le mettre dehors", next: 2 }
        ]
    },
    5: {
        text: "Il s'agit d'une relique très ancienne ...",
        choices: [
            { text: "END", next: 0}
        ]
    },
    6: {
        text: "Il s'agit d'une relique très ancienne ...",
        choices: [
            { text: "END", next: 0}
        ]
    }
};

export default story;