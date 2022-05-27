
class TourService{

    //Getting data for dubai package tour
    getDubaiTour(){
        return {
            title: "7 Jours et 8 Nuits à Dubaï",
            infos:[
                {
                    icon:"faMapMarkerAlt",
                    text:"Emirates Arabes Unis"
                },
                {
                    icon:"faUser",
                    text:"Voyage individuel"
                },
                {
                    icon:"faClock",
                    text:"7 jours et 8 Nuits"
                }
            ],
            images: [
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                }
            ],
            description :{
                title: "Description",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti porro officiis rem soluta magnam quaerat et, hic quo aliquid natus architecto vitae dolorum qui, expedita, fuga culpa dicta quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor inventore in perspiciatis, a, at doloremque numquam iure temporibus sunt incidunt mollitia labore dolorem harum illo cupiditate saepe assumenda rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quam nobis soluta."
            },
            includes:{
                title: "Compris dans le package",
                tags: [
                    {
                        icon:"faPassport",
                        text:"Visa et assurance voyage"
                        
                    },
                    {
                        icon:"faPlaneDeparture",
                        text:"Vol aller-retour Kenya Airways"
                    },
                    {
                        icon:"faShuttleVan",
                        text:"Navette aéroport arrivée et départ"
                    },
                    {
                        icon:"faBed",
                        text:"Hébergement Hôtel 4 étoiles"
                    },
                    {
                        icon:"faMugHot",
                        text:"Petit déjeuner journalier"
                    },
                    {
                        icon:"faMountain",
                        text:"Visite de lieux incontournables"
                    } 
                ]
            },
            program: {
                title:"Programme du séjour",
                teaser: "7 jours de pures plaisirs",
                days:[

                    {
                        header: "Jour 1 : Départ",
                        content:[
                            {text : "Jour d’embarquement, rendez vous à 11h00 dans le Hall de l'aéroport pour les formalités de départ. Départ à 17h25 à destination de Dubaï. Après une escale de 2h, vous arrivez à Dubaï le lendemain matin à 08H30 heure de Dubaï. À votre arrivée, vous êtes accueilli par votre guide, qui vous conduit à votre hôtel."}
                        ]
                    },
                    {
                        header: "Jour 2 : Arrivée à Dubaï + Croisière Marina",
                        content:[
                            {text: "Vous êtes accueilli(e) et conduit à l’hôtel, où vous faites votre Check-In et un petit déjeuner est disponible pour vous.16h00 Vous pouvez rester vous reposer à l’hôtel ou alors suivre le guide, qui vous emmènera explorer le quartier : Où changer son argent? Où trouver le distributeur, le supermarché et bien sûr répondre à vos nombreuses questions.19h00 départ en voiture pour votre première activité, Croisière sur la Marina de Dubaï . Vous embarquerez sur un bateau traditionnel pour une visite durant trois heures suivi d’un dîner et d’un spectacle de danse."}
                        ]
                    },
                    {
                        header: "Jour 3 : Safari au Désert",
                        content:[
                            {text: "Vous avez le temps de faire une grasse matinée pour récupérer du voyage ou de flemmarder au bord de la piscine après votre petit-déjeuner.A 15H00, une voiture vous récupère à l’hôtel, pour votre activité du jour: Le Safari Désert. Une balade en 4x4 où vous aurez l’opportunité d'affronter les dunes de désert, de monter sur un chameau ou de faire un tour en Quad (moto 4 roues, frais en plus).À la fin de la visite, vous serez accueilli(e) dans un camp traditionnel en plein désert, au programme: Menu Barbecue, Boissons, Spectacle de danseuses du ventre. À la fin du spectacle, vous êtes raccompagné à votre hôtel."}
                        ]
                    },
                    {
                        header: "Jour 4 : Tour De Ville",
                        content:[
                            {text: "Apres petit déjeuner, 9h00 visite guidé de la magnifique ville de Dubaï et tous ses joyaux. Le BURJ AL ARAB, Le BURJ KHALIFA (la plus haute tour du monde) – JUMEIRAH – le centre commercial mall of émirats, le marché des épices – balade."}
                        ]
                    },
                    {
                        header: "Jour 5 : Visite Guidée Du Marché",
                        content: [
                            {text:"Apres petit déjeuner – 10h00 direction le marché pour une visite guidé (occasion de découvrir les bons coins des affaires)"}
                        ]
                    },
                    {
                        header: "Jour 6 : Journée Libre",
                        content:[
                            {text: "Apres petit déjeuner à l’hôtel – prélèvement test covid – détente et balade"
                        }
                        ]},
                    {
                        header: "Jour 7 : Dernier jour",
                        content:[
                            {text: "Petit déjeuner – shopping pour nos visiteur – soirée aéroport Formalité d’enregistrement – fin du séjour."
                        }
                        ]}
                ]
            },
            bedrooms: [
                {
                    key: 1,
                    name: "Tarif chambre double",
                    price: 800000,
                    explain: "2 par chambre chacun son lit"
                },
                {
                    key: 2,
                    name: "Tarif chambre individuelle",
                    price: 850000,
                    explain: "seul dans une chambre"

                },
                {
                    key: 3,
                    name: "Tarif pour couple",
                    price: 1000000,
                    explain: "en couple dans une chambre sur un lit"

                }
            ],
            date:{
                editable: true,
                value: ""
            },
            couple:false
        }
    }

     //Getting data for Caire package tour
     getCaireTour(){
        return {
            title: "7 jours et 8 Nuits à Dubaï",
            infos:[
                {
                    icon:"faMapMarkerAlt",
                    text:"Emirates Arabes Unis"
                },
                {
                    icon:"faCalendarDay",
                    text:"Jan 2022 - Déc 2022"
                },
                {
                    icon:"faClock",
                    text:"7 jours et 8 Nuits"
                }
                
            ],
            images: [
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                }
            ],
            description :{
                title: "Description",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti porro officiis rem soluta magnam quaerat et, hic quo aliquid natus architecto vitae dolorum qui, expedita, fuga culpa dicta quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor inventore in perspiciatis, a, at doloremque numquam iure temporibus sunt incidunt mollitia labore dolorem harum illo cupiditate saepe assumenda rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quam nobis soluta."

            },
            includes:{
                title: "Compris dans le package",
                tags: [{
                    tag:{
                        icon:"faPassport",
                        text:"Visa et assurance voyage"
                    },
                    tag:{
                        icon:"faPlaneDeparture",
                        text:"Vol aller-retour Kenya Airways"
                    },
                    tag:{
                        icon:"faShuttleVan",
                        text:"Navette aéroport arrivée et départ"
                    },
                    tag:{
                        icon:"faBed",
                        text:"Hébergement Hôtel 4 étoiles"
                    },
                    tag:{
                        icon:"faMugHot",
                        text:"Petit déjeuner journalier"
                    },
                    tag:{
                        icon:"faMountain",
                        text:"Visite de lieux incontournables"
                    }
                }]
            },
            program: {
                title:"Programme du séjour",
                teaser: "7 jours de pures plaisirs",
                days:[
                    {
                        header: "Jour 1 : Départ",
                        content:"Jour d’embarquement, rendez vous à 11h00 dans le Hall de l'aéroport pour les formalités de départ. Départ à 17h25 à destination de Dubaï. Après une escale de 2h, vous arrivez à Dubaï le lendemain matin à 08H30 heure de Dubaï. À votre arrivée, vous êtes accueilli par votre guide, qui vous conduit à votre hôtel."
                    },
                    {
                        header: "Jour 2 : Arrivée à Dubaï + Croisière Marina",
                        content:" Vous êtes accueilli(e) et conduit à l’hôtel, où vous faites votre Check-In et un petit déjeuner est disponible pour vous.16h00 Vous pouvez rester vous reposer à l’hôtel ou alors suivre le guide, qui vous emmènera explorer le quartier : Où changer son argent? Où trouver le distributeur, le supermarché et bien sûr répondre à vos nombreuses questions.19h00 départ en voiture pour votre première activité, Croisière sur la Marina de Dubaï . Vous embarquerez sur un bateau traditionnel pour une visite durant trois heures suivi d’un dîner et d’un spectacle de danse."
                    },
                    {
                        header: "Jour 3 : Safari au Désert",
                        content:"Vous avez le temps de faire une grasse matinée pour récupérer du voyage ou de flemmarder au bord de la piscine après votre petit-déjeuner.A 15H00, une voiture vous récupère à l’hôtel, pour votre activité du jour: Le Safari Désert. Une balade en 4x4 où vous aurez l’opportunité d'affronter les dunes de désert, de monter sur un chameau ou de faire un tour en Quad (moto 4 roues, frais en plus).À la fin de la visite, vous serez accueilli(e) dans un camp traditionnel en plein désert, au programme: Menu Barbecue, Boissons, Spectacle de danseuses du ventre. À la fin du spectacle, vous êtes raccompagné à votre hôtel."
                    },
                    {
                        header: "Jour 4 : Tour De Ville",
                        content:"Apres petit déjeuner, 9h00 visite guidé de la magnifique ville de Dubaï et tous ses joyaux. Le BURJ AL ARAB, Le BURJ KHALIFA (la plus haute tour du monde) – JUMEIRAH – le centre commercial mall of émirats, le marché des épices – balade."
                    },
                    {
                        header: "Jour 5 : Visite Guidée Du Marché",
                        content:"Apres petit déjeuner – 10h00 direction le marché pour une visite guidé (occasion de découvrir les bons coins des affaires)"
                    },
                    {
                        header: "Jour 6 : Journée Libre",
                        content:"Apres petit déjeuner à l’hôtel – prélèvement test covid – détente et balade"
                    },
                    {
                        header: "Jour 7 : Dernier jour",
                        content:"Petit déjeuner – shopping pour nos visiteur – soirée aéroport Formalité d’enregistrement – fin du séjour."
                    }
                ],
                bedrooms: [
                    {
                        key: 1,
                        name: "Chambre double",
                        price: 800000,
                        explain: "2 par chambre chacun son lit"
                    },
                    {
                        key: 2,
                        name: "Chambre individuelle",
                        price: 850000,
                        explain: "seul dans une chambre"

                    },
                    {
                        key: 3,
                        name: "Chambre couple",
                        price: 1000000,
                        explain: "en couple dans une chambre sur un lit"

                    }
                ]
                
            },
            date:{
                editable: true,
                value: ""
            },
            couple: false
        }
    }

    getKribiTour(){

        return {
            title: "Voyage en Terre Sainte",
            infos:[
                {
                    icon:"faMapMarkerAlt",
                    text:"Kribi"
                },
                {
                    icon:"faHeart",
                    text:"Voyage de couple"
                },
                {
                    icon:"faClock",
                    text:"3 jours et 2 Nuits"
                }
                
            ],
            images: [
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                }
            ],
            description :{
                title: "Description",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti porro officiis rem soluta magnam quaerat et, hic quo aliquid natus architecto vitae dolorum qui, expedita, fuga culpa dicta quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor inventore in perspiciatis, a, at doloremque numquam iure temporibus sunt incidunt mollitia labore dolorem harum illo cupiditate saepe assumenda rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quam nobis soluta."

            },
            includes:{
                title: "Compris dans le package",
                tags: [
                    {
                        icon:"faBed",
                        text:"Logement Hôtel, Appartement"
                    },
                    {
                        icon:"faShuttleVan",
                        text:"Bus VIP Aller et Retour"
                    },
                    {
                        icon:"faMountain",
                        text:"Visite de lieux incontournables"
                    } ,
                    {
                        icon:"faCar",
                        text:"Déplacements dans la ville"
                    } 
                ]
            },
            program: {
                title:"Programme du séjour",
                teaser: "",
                days:[

                    {
                        header: "Jour 1 : Départ",
                        content:[
                            {text : "Départ du Cameroun pour Israel."},
                            {text: "Accueil et réception par notre équipe sur place, assistance des formalités douanières et de police, et direction Galilée"}
                        ]
                    },
                    {
                        header: "Jour 2 : Nazareth - Mont des Prépice - Cana",
                        content: [
                            {text: "Visite de Nazareth village (village reconstitué à l'époque de Jésus afin de découvrir la vie et l'enfance du Christ ."},
                            {text: "Visite de la Basilique de l'Annonciation et sa crypte (la grotte sacrée de la prophétie sur la naissance de Jésus, Luc &:26-28 ."},
                            {text: "Visite des églises de St Joseph, la Synagogue, de l'église St Gabriel ."},
                            {text: "Ascension du mont des Prépices, lieu où la population voulu jeter Jésus après sa déclaration messianique ."},
                            {text: "Visite du village de Cana et de l'église Franciscaine pour évoquer le premier miracle de la transformation de l'eau en vin lors des noces ."}
                        ]
                    },
    
                    {
                        header: "Jour 3 : Moment détente plage et aurevoir Kribi ",
                        content: [
                            {
                                text: "Visite du Mont des Béatitudes, colline sur laquelle Jésus pronoça le sermon de la montagne aux huits béatitudes"
                            },
                            {
                                text: "Visite de capharnaûm haut lieu du christianisme du fait que Jésus vécut dans ce village et en fit le centre de son ministèreine sur laquelle Jésus pronoça le sermon de la montagne aux huits béatitudes"
                            },
                            {
                                text: "Visite de Betsaida, village de pécheur maudit par Jésus du fait du manque de foi de ses habitants."
                            },
                            {
                                text: "Visite de Tabgha, site du miracle de la multiplication des pains et des poissons et l'apparition de Jésus après la résurrection ."
                            },
                            {
                                text: "Détente et promenade en bateau sur le lac de Tibériade ."
                            },
                            {
                                text: "Visite de Yardenit, pour un baptême à l'image de celui reçu par Jésus de Jean Le Baptiste."
                            }
                        ]
                    }

                ]
            },
            bedrooms: [
                {
                    key: 1,
                    name: "Hôtel",
                    price: 130000,
                    explain: "Chambre couple"
                },
                {
                    key: 2,
                    name: "Appartement meublé",
                    price: 205000,
                    explain: "Comme à la maison"
                }
            ],
            date:{
                editable: true,
                value: ""
            },
            couple: true
            
        }
    }

    getIsraelEgypteTour(){
        return {
            title: "Vers Les Hauts Lieux De La Chrétienté",
            infos:[
                {
                    icon:"faMapMarkerAlt",
                    text:"Emirates Arabes Unis"
                },
                {
                    icon:"faUsers",
                    text:"Voyage de groupe"
                },
                {
                    icon:"faClock",
                    text:"10 jours et 9 Nuits"
                }
                
            ],
            images: [
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                }
            ],
            description :{
                title: "Description",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti porro officiis rem soluta magnam quaerat et, hic quo aliquid natus architecto vitae dolorum qui, expedita, fuga culpa dicta quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor inventore in perspiciatis, a, at doloremque numquam iure temporibus sunt incidunt mollitia labore dolorem harum illo cupiditate saepe assumenda rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quam nobis soluta."

            },
            includes:{
                title: "Compris dans le package",
                tags: [
                    {
     
                        icon:"faPassport",
                        text:"Visa et assurance voyage"
                        
                    },
                    {
                        icon:"faPlaneDeparture",
                        text:"Vol aller-retour Kenya Airways"
                    },
                    {
                        icon:"faShuttleVan",
                        text:"Navette aéroport arrivée et départ"
                    },
                    {
                        icon:"faBed",
                        text:"Hébergement Hôtel 4 étoiles"
                    },
                    {
                        icon:"faMugHot",
                        text:"Petit déjeuner journalier"
                    },
                    {
                        icon:"faMountain",
                        text:"Visite de lieux incontournables"
                    } 
                ]
            },
            program: {
                title:"Programme du séjour",
                teaser: "7 jours de pures plaisirs",
                days:[
                    {
                        header: "Jour 2 : Départ",
                        content:[
                            {text : "Départ du Cameroun pour Israel. Accueil et réception par le guide et chauffeur qui vous conduiront à l'hôtel et vous assisteront dans les formalités de police et douanières . Un test PCR est à effectué à l'aéroport à l'arrivée. Dinner compris à l'hôtel ."}
                        ]
                    },
                    {
                        header: "Jour 3 : Nazareth - Mont des Prépice - Cana",
                        content: [
                            {
                                text: "Visite de Nazareth village (village reconstitué à l'époque de Jésus afin de découvrir la vie et l'enfance du Christ .",
                                text: "Visite de la Basilique de l'Annonciation et sa crypte (la grotte sacrée de la prophétie sur la naissance de Jésus, Luc &:26-28 .",
                                text: "Visite des églises de St Joseph, la Synagogue, de l'église St Gabriel .",
                                text: "Ascension du mont des Prépices, lieu où la population voulu jeter Jésus après sa déclaration messianique .",
                                text: "Visite du village de Cana et de l'église Franciscaine pour évoquer le premier miracle de la transformation de l'eau en vin lors des noces ."
                            }
                        ]
                    },
    
                    {
                        header: "Jour 4 : Capharnaûm - Primauté de Pierre, Mont des béatitudes - Beitsaida - Lac de Tibériade - Yardenit ",
                        content: [
                            {
                                text: "Visite du Mont des Béatitudes, colline sur laquelle Jésus pronoça le sermon de la montagne aux huits béatitudes"
                            },
                            {
                                text: "Visite de capharnaûm haut lieu du christianisme du fait que Jésus vécut dans ce village et en fit le centre de son ministèreine sur laquelle Jésus pronoça le sermon de la montagne aux huits béatitudes"
                            },
                            {
                                text: "Visite de Betsaida, village de pécheur maudit par Jésus du fait du manque de foi de ses habitants."
                            },
                            {
                                text: "Visite de Tabgha, site du miracle de la multiplication des pains et des poissons et l'apparition de Jésus après la résurrection ."
                            },
                            {
                                text: "Détente et promenade en bateau sur le lac de Tibériade ."
                            },
                            {
                                text: "Visite de Yardenit, pour un baptême à l'image de celui reçu par Jésus de Jean Le Baptiste."
                            }
                        ]
                    },
                    {
                        header: "Jour 5 : Mont Tabor - Jéricho - Mer Morte - Bethlehem",
                        content:[
                            {
                                text: "Visite du Mont Thabor, lieu de la transfiguration, vue panoramique sur la vallée de Yizre'el (l'une des plus fertile d'Israêl ."
                            },
                            {
                                text: "Visite de Jericho (la plus vielle ville au monde) et la Mer Morte . Jésus passa plusieurs fois à Jéricho durant son ministère, Il guérit deux aveugles et c'est là que Zachée promit de restituer au quadruple les sommes qu'il avait extorqué (Luc:19) ."
                            },
                            {
                                text: "Visite Qasar El Yahud, lieu réel du baptème de Jésus par Jean Baptiste et moment détente (baignade)dans la mer morte . "
                            }
                        ]
                    }
                ]
            },
            bedrooms: [
                {
                    key: 1,
                    name: "Tarif chambre double",
                    price: 2300000,
                    explain: "2 par chambre, chacun son lit"
                },
                {
                    key: 2,
                    name: "Tarif chambre individuelle",
                    price: 2500000,
                    explain: "seul dans une chambre"
                }
            ],
            date:{
                editable: false,
                value: "05-07-22 au 15 15-07-22"
            },
            couple: false

        }
    }

    getIsrael(){
        return {
            title: "Voyage en Terre Sainte",
            infos:[
                {
                    icon:"faMapMarkerAlt",
                    text:"Israêl"
                },
                {
                    icon:"faUsers",
                    text:"Voyage de groupe"
                },
                {
                    icon:"faClock",
                    text:"6 jours et 5 Nuits"
                }
                
            ],
            images: [
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/caire.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/home/tourism/kribi.jpeg",
                  "alt": "Description for Image 1",
                },
                {
                  "previewImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "thumbnailImageSrc": "../../../assets/img/tourism/dubai.jpeg",
                  "alt": "Description for Image 1",
                }
            ],
            description :{
                title: "Description",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut corrupti porro officiis rem soluta magnam quaerat et, hic quo aliquid natus architecto vitae dolorum qui, expedita, fuga culpa dicta quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis dolor inventore in perspiciatis, a, at doloremque numquam iure temporibus sunt incidunt mollitia labore dolorem harum illo cupiditate saepe assumenda rerum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quam nobis soluta."

            },
            includes:{
                title: "Compris dans le package",
                tags: [
                    {
     
                        icon:"faPassport",
                        text:"Visa et assurance voyage"
                        
                    },
                    {
                        icon:"faPlaneDeparture",
                        text:"Vol aller-retour Kenya Airways"
                    },
                    {
                        icon:"faShuttleVan",
                        text:"Navette aéroport arrivée et départ"
                    },
                    {
                        icon:"faBed",
                        text:"Hébergement Hôtel 4 étoiles"
                    },
                    {
                        icon:"faMugHot",
                        text:"Petit déjeuner journalier"
                    },
                    {
                        icon:"faMountain",
                        text:"Visite de lieux incontournables"
                    } 
                ]
            },
            program: {
                title:"Programme du séjour",
                teaser: "6 jours de découverte de sites biblique",
                days:[

                    {
                        header: "Jour 1 : Départ",
                        content:[
                            {text : "Départ du Cameroun pour Israel."},
                            {text: "Accueil et réception par notre équipe sur place, assistance des formalités douanières et de police, et direction Galilée"}
                        ]
                    },
                    {
                        header: "Jour 2 : Nazareth - Mont des Prépice - Cana",
                        content: [
                            {text: "Visite de Nazareth village (village reconstitué à l'époque de Jésus afin de découvrir la vie et l'enfance du Christ ."},
                            {text: "Visite de la Basilique de l'Annonciation et sa crypte (la grotte sacrée de la prophétie sur la naissance de Jésus, Luc &:26-28 ."},
                            {text: "Visite des églises de St Joseph, la Synagogue, de l'église St Gabriel ."},
                            {text: "Ascension du mont des Prépices, lieu où la population voulu jeter Jésus après sa déclaration messianique ."},
                            {text: "Visite du village de Cana et de l'église Franciscaine pour évoquer le premier miracle de la transformation de l'eau en vin lors des noces ."}
                        ]
                    },
    
                    {
                        header: "Jour 3 : Capharnaûm - Primauté de Pierre, Mont des béatitudes - Beitsaida - Lac de Tibériade - Yardenit ",
                        content: [
                            {
                                text: "Visite du Mont des Béatitudes, colline sur laquelle Jésus pronoça le sermon de la montagne aux huits béatitudes"
                            },
                            {
                                text: "Visite de capharnaûm haut lieu du christianisme du fait que Jésus vécut dans ce village et en fit le centre de son ministèreine sur laquelle Jésus pronoça le sermon de la montagne aux huits béatitudes"
                            },
                            {
                                text: "Visite de Betsaida, village de pécheur maudit par Jésus du fait du manque de foi de ses habitants."
                            },
                            {
                                text: "Visite de Tabgha, site du miracle de la multiplication des pains et des poissons et l'apparition de Jésus après la résurrection ."
                            },
                            {
                                text: "Détente et promenade en bateau sur le lac de Tibériade ."
                            },
                            {
                                text: "Visite de Yardenit, pour un baptême à l'image de celui reçu par Jésus de Jean Le Baptiste."
                            }
                        ]
                    },
                    {
                        header: "Jour 4 : Mont Tabor - Jéricho - Mer Morte - Bethlehem",
                        content:[
                            {
                                text: "Visite du Mont Thabor, lieu de la transfiguration, vue panoramique sur la vallée de Yizre'el (l'une des plus fertile d'Israêl ."
                            },
                            {
                                text: "Visite de Jericho (la plus vielle ville au monde) et la Mer Morte . Jésus passa plusieurs fois à Jéricho durant son ministère, Il guérit deux aveugles et c'est là que Zachée promit de restituer au quadruple les sommes qu'il avait extorqué (Luc:19) ."
                            },
                            {
                                text: "Visite Qasar El Yahud, lieu réel du baptème de Jésus par Jean Baptiste et moment détente (baignade)dans la mer morte . "
                            }
                        ]
                    },
                    {
                        header: "Jour 5 : Jérusalem - Mont Sion",
                        content:[
                            {
                                text: "Direction la vielle ville, le quartier Juif, visite du Mt du temple (esplanades des temples pour les musulmans) -emplacement des 2 temples de Jerusalem avant l’invasion musulmane et la construction de l’édifice du dôme d’or en lieu et place des temples."
                            },
                            {
                                text: "Descente vers le Mur Occidental (le Kotel), lieu le plus sacrée du Judaïsme, vestige du mur d'enceinte du 2ème temple avec lequel s’est tisse les liens entre Jérusalem et Jésus."
                            },
                            {
                                text: "Visite du cardo , de la place de la Hurva avec la grande synagogue ,puis direction le Mont Sion pour visiter le Tombeau de David ainsi que le lieu du Dernier repas de Jésus : le Cénacle. Visite de l'église de la Dormition, lieu de l’ascension de la Vierge. "
                            },
                            {
                                text: "A partir de la Porte des fleurs (ou porte d'Hérode), nous rejoindrons la piscine de Bethesda lieu ou les moutons étaient laver avant leurs sacrifices au Temple. Lieu ou jésus fit le miracle de la guérison du paralytique ."
                            },
                            {
                                text: "En remontant le calvaire du Christ (Chemin de la douleur) nous passerons devant la salle du prétoire, où Ponce Pilate a émis son jugement ;' Ecce homo' en remontant les 14 stations de la via Dolorosa un arrêt sera effectué a chaque station pour atteindre le Golgotha et l’église du St Sépulcre. (Construite par l'Empereur Constantin et vénérer par les catholiques comme le lieu du Golgotha la crucifixion et le tombeau de Jésus) "
                            },
                            {
                                text: "Puis nous nous dirigerons vers la porte de shrem en direction du tombeau du Jardin et du Golgotha (lieu du tombeau et de la crucifixion pour les Evangéliques et Protestants)."
                            },
                            {
                                text: "En remontant le calvaire du Christ (Chemin de la douleur) nous passerons devant la salle du prétoire, où Ponce Pilate a émis son jugement ;' Ecce homo' en remontant les 14 stations de la via Dolorosa un arrêt sera effectué a chaque station pour atteindre le Golgotha et l’église du St Sépulcre. (Construite par l'Empereur Constantin et vénérer par les catholiques comme le lieu du Golgotha la crucifixion et le tombeau de Jésus) "
                            }
                        ]
                    },
                    {
                        header: "Jour 6 : Jérusalem - Traversée du désert du Néguev - Eilat - Taba frontière",
                        content:[
                            {text: "Nous longerons la totalité de la mer morte en direction du sud d’Israel, passage par Qumran ( lieu où ont étés découvert les rouleaux de la mer morte ), puis Sodome (emplacement de la statue de sel de la femme de Lot), par Ein Gedi ( les sources du roi Salomon ) , de Massada (dernier bastion de la résistance juive contre l’oppression romaine )"},
                            {text:  "Traversée du désert du Néguev , nous longerons les Kibbutz ( fermes agricole communautaire ) pour se rendre a Eilat , ville balnéaire a l’extrême sud d’Israel"},
                            {text: "Moment de détente a la Mer Rouge Traversée de la frontière Israélo-Egyptienne a Taba"},
                            {text: "Assistance pour les formalités douanière et retour au Cameroun"},
                            {text: "fin !"}                            
                        ]
                    }
                ]
            },
            bedrooms: [
                {
                    key: 1,
                    name: "Tarif chambre double",
                    price: 1990000,
                    explain: "2 par chambre, chacun son lit"
                },
                {
                    key: 2,
                    name: "Tarif chambre individuelle",
                    price: 2294000,
                    explain: "seul dans une chambre"
                }
            ],
            date:{
                editable: false,
                value: "05-07-22 au 15 15-07-22"
            },
            couple: false



        }
    }
    

}

module.exports = TourService ;