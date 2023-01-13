exports.recommendedProduct = async (req, res) =>{

    const recommendedProductArray = [
        {
          image: "../../../assets/img/menu/cotelettes.png",
          imageBg: "../../../assets/img/menu/cotelettes-bg.jpeg",
          name: "Côtelettes de boeuf braisées",
          shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
          price: 29.99,
          ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
          mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
          optionals : [
            {
              name: "Piment",
              checked: false
            },
            {
              name: "Mayo",
              checked: false
            },
            {
              name: "Kechup",
              checked: false
            },
            {
              name: "Condiments vert",
              checked: false
            }
          ],
          combined: true,
          ref: 'fu_01'
        },
          {
            image: "../../../assets/img/menu/poulet.png",
            imageBg: "../../../assets/img/menu/poulet-bg.jpeg",
            name: "Poulet Braisé",
            shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
            price: 19.99,
            ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
            mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
            optionals : [
              {
                name: "Kechup",
                checked: false
              },
              {
                name: "Piment",
                checked: false
              }
            ],
          combined: true,
          ref: 'fu_01'
          },
          {
            image: "../../../assets/img/menu/viandes.png",
            imageBg: "../../../assets/img/menu/viandes-bg.jpeg",
            name: "Steak grillé",
            shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
            price: 19.99,
            ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
            mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
            optionals : [
              {
                name: "Piment",
                checked: false
              },
              {
                name: "Mayo",
                checked: false
              },
              {
                name: "Kechup",
                checked: false
              },
              {
                name: "Condiments vert",
                checked: false
              }
            ],
            combined: true,
            ref: 'fu_01'
          },
      ];

    return res.json(recommendedProductArray)
}


exports.mealProduct = async (req, res) =>{
  const mealProductArray = [
    {
      image: "../../../assets/img/menu/cotelettes.png",
      imageBg: "../../../assets/img/menu/cotelettes-bg.jpeg",
      name: "Côtelettes de boeuf braisées",
      shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
      price: 29.99,
      ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
      mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
      optionals : [
        {
          name: "Piment",
          checked: false
        },
        {
          name: "Mayo",
          checked: false
        },
        {
          name: "Kechup",
          checked: false
        },
        {
          name: "Condiments vert",
          checked: false
        }
      ],
      combined: true,
      ref: 'fu_01'
    },
    {
      image: "../../../assets/img/menu/poulet.png",
      imageBg: "../../../assets/img/menu/poulet-bg.jpeg",
      name: "Épaule d'agneau braisé",
      shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
      price: 19.99,
      ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
      mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
      optionals : [
        {
          name: "Kechup",
          checked: false
        },
        {
          name: "Piment",
          checked: false
        }
      ],
      combined: true,
      ref: 'fu_01'
    },
    {
      image: "../../../assets/img/menu/viandes.png",
      imageBg: "../../../assets/img/menu/viandes-bg.jpeg",
      name: "Épaule d'agneau braisé",
      shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
      price: 19.99,
      ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
      mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
      optionals : [
        {
          name: "Piment",
          checked: false
        },
        {
          name: "Mayo",
          checked: false
        },
        {
          name: "Kechup",
          checked: false
        },
        {
          name: "Condiments vert",
          checked: false
        }
      ],
      combined: true,
      ref: 'fu_01'
    },
    {
      image: "../../../assets/img/menu/magret.png",
      imageBg: "../../../assets/img/menu/magret-bg.jpeg",
      name: "Magret de cannard",
      shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
      price: 29.99,
      ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
      mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
      optionals : [
        {
          name: "Piment",
          checked: false
        },
        {
          name: "Mayo",
          checked: false
        },
        {
          name: "Kechup",
          checked: false
        },
        {
          name: "Condiments vert",
          checked: false
        }
      ],
      combined: true,
      ref: 'fu_01'
    }
  ];

  return res.json(mealProductArray)
}

//Getting data for dubai package tour
exports.fishProduct = async (req, res) =>{
  const fishProductArray = [
      {
        image: "../../../assets/img/menu/poissons.png",
        imageBg: "../../../assets/img/menu/tilapia-bg.jpeg",
        name: "Tilapia braisé",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 17.99,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
        optionals : [
          {
            name: "Piment",
            checked: false
          },
          {
            name: "Mayo",
            checked: false
          },
          {
            name: "Kechup",
            checked: false
          },
          {
            name: "Condiments vert",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_01'
      },
      {
        image: "../../../assets/img/menu/sardines.png",
        imageBg: "../../../assets/img/menu/sardines-bg.jpeg",
        name: "Sardines braisées",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 17.99,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
        optionals : [
          {
            name: "Piment",
            checked: false
          },
          {
            name: "Mayo",
            checked: false
          },
          {
            name: "Kechup",
            checked: false
          },
          {
            name: "Condiments vert",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_01'
      }
  ];

  return res.json(fishProductArray)

}

//Getting data for Caire package tour
exports.saladProduct = async (req, res) =>{
  const saladProductArray = [
      {
        image: "../../../assets/img/menu/vegetables.png",
        name: "Salade verte",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 12.99,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        mandatories : ["Pain au frommage", "Pain traditionnel"],
        optionals : [
          {
            name: "Béchamel",
            checked: false
          },
          {
            name: "Fromagère",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_01'
      },
      {
        image: "../../../assets/img/menu/vegetables.png",
        name: "Salade verte",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 12.99,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        mandatories : ["Pain au frommage", "Pain traditionnel"],
        optionals : [
          {
            name: "Béchamel",
            checked: false
          },
          {
            name: "Fromagère",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_01'
      },
      {
        image: "../../../assets/img/menu/vegetables.png",
        name: "Salade verte",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 12.99,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
        mandatories : ["Pain au frommage", "Pain traditionnel"],
        optionals : [
          {
            name: "Béchamel",
            checked: false
          },
          {
            name: "Fromagère",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_01'
      },
      {
        image: "../../../assets/img/menu/vegetables.png",
        name: "Salade verte",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 12.99,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        mandatories : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
        mandatories : ["Pain au frommage", "Pain traditionnel"],
        optionals : [
          {
            name: "Béchamel",
            checked: false
          },
          {
            name: "Fromagère",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_01'
      }
  ];

  return res.json(saladProductArray);
}

exports.accompanimentProduct = async (req, res) =>{
  const accompanimentProductArray = [
      {
        image: "../../../assets/img/menu/rice.png",
        imageBg: "../../../assets/img/menu/rice-bg.jpeg",
        name: "Riz cuit vapeur",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 3.99,
        combined: false,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        ref: 'fu_02'
      },
      {
        image: "../../../assets/img/menu/plantain.png",
        imageBg: "../../../assets/img/menu/plantain-bg.jpeg",
        name: "Frites plantains mûrs",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 3.99,
        combined: false,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        ref: 'fu_02'
      },
      {
        image: "../../../assets/img/menu/pommes.png",
        imageBg: "../../../assets/img/menu/frites-bg.jpeg",
        name: "Frites pommes",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 3.99,
        combined: false,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        ref: 'fu_02'
      }
    ];

    return res.json(accompanimentProductArray);
}

exports.breakfastProduct = async (req, res) =>{
  const breakfastProductArray = [

      {
        image: "../../../assets/img/menu/breakfast.png",
        imageBg: "../../../assets/img/menu/fruits-bg.jpeg",
        name: "Bol de fruits mixte bio",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 8.50,
        combined: false,
        ref: 'fu_02'
      }
      ,{
        image: "../../../assets/img/menu/banane.png",
        imageBg: "../../../assets/img/menu/cereales-bg.jpeg",
        name: "Bol de Fraises et Bananes",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 8.50,
        combined: false,
        ref: 'fu_02'
      },
      {
        image: "../../../assets/img/menu/flocon.png",
        imageBg: "../../../assets/img/menu/flocon-bg.jpeg",
        name: "Flocon d'avoine fruité",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 8.50,
        combined: false,
        ref: 'fu_02'
      }
      
    ];

    return res.json(breakfastProductArray)
}

exports.drinkProdut = async(req, res) => {
  const drinkProdutArray = [
      {
        image: "../../../assets/img/menu/orange.png",
        imageBg: "../../../assets/img/menu/orange-bg.jpeg",
        name: "Jus d'orange frais",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 1.50,
        combined: false,
        ref: 'fu_02'
      },
      {
        image: "../../../assets/img/menu/papaye.png",
        imageBg: "../../../assets/img/menu/papaye-bg.jpeg",
        name: "Jus de papaye",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 1.50,
        combined: false,
        ref: 'fu_02'
      }
      
    ];
    return res.json(drinkProdutArray);
}

exports.desertProduct = async (req, res) =>{
  const desertProductArray = [
      {
        image: "../../../assets/img/menu/myrtilles.png",
        imageBg: "../../../assets/img/menu/myrtilles-bg.jpeg",
        name: "Glace aux myrtilles",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 2.99,
        mandatories : ["Pot", "Cornet"],
        optionals : [
          {
            name: "Caramel",
            checked: false
          },
          {
            name: "Oréo",
            checked: false
          },
          {
            name: "Chocolat",
            checked: false
          },
          {
            name: "Haribo",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_03'
      },
      {
        
        image: "../../../assets/img/menu/chocolat.png",
        imageBg: "../../../assets/img/menu/chocolat-bg.jpeg",
        name: "Glace au chocolat",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 2.99,
        mandatories : ["Pot", "Cornet"],
        optionals : [
          {
            name: "Caramel",
            checked: false
          },
          {
            name: "Oréo",
            checked: false
          },
          {
            name: "Chocolat",
            checked: false
          },
          {
            name: "Haribo",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_03'
      },
      {
        image: "../../../assets/img/menu/menthe.webp",
        imageBg: "../../../assets/img/menu/menthe-bg.webp",
        name: "Glace saveur menthe",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 2.99,
        mandatories : ["Pot", "Cornet"],
        optionals : [
          {
            name: "Caramel",
            checked: false
          },
          {
            name: "Oréo",
            checked: false
          },
          {
            name: "Chocolat",
            checked: false
          },
          {
            name: "Haribo",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_03'
      },
      {
        image: "../../../assets/img/menu/fraise.png",
        imageBg: "../../../assets/img/menu/fraise-bg.jpeg",
        name: "Glace à la fraise",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout",
        price: 2.99,
        mandatories : ["Pot", "Cornet"],
        optionals : [
          {
            name: "Caramel",
            checked: false
          },
          {
            name: "Oréo",
            checked: false
          },
          {
            name: "Chocolat",
            checked: false
          },
          {
            name: "Haribo",
            checked: false
          }
        ],
        combined: true,
        ref: 'fu_03'
      }
    ];
    return res.json(desertProductArray)
}