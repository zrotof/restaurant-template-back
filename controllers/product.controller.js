exports.recommendedProduct = async (req, res) =>{

    const recommendedProductArray = [
        {
          image: "../../../assets/menu/cotelettes.png",
          imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
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
            image: "../../../assets/menu/poulet.png",
            imageBg: "../../../assets/menu/poulet-bg.jpeg",
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
            image: "../../../assets/menu/viandes.png",
            imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
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
      image: "../../../assets/menu/cotelettes.png",
      imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
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
      image: "../../../assets/menu/poulet.png",
      imageBg: "../../../assets/menu/poulet-bg.jpeg",
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
      image: "../../../assets/menu/viandes.png",
      imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
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
      image: "../../../assets/menu/magret.png",
      imageBg: "../../../assets/menu/magret.png",
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
        image: "../../../assets/menu/poissons.png",
        name: "TIlapia braisé",
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
        image: "../../../assets/menu/poissons.png",
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
      }
  ];

  return res.json(fishProductArray)

}

//Getting data for Caire package tour
exports.saladProduct = async (req, res) =>{
  const saladProductArray = [
      {
        image: "../../../assets/menu/vegetables.png",
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
        image: "../../../assets/menu/vegetables.png",
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
        image: "../../../assets/menu/vegetables.png",
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
        image: "../../../assets/menu/vegetables.png",
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
        image: "../../../assets/menu/rice.png",
        name: "Riz cuit vapeur",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 3.99,
        combined: false,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        ref: 'fu_02'
      },
      {
        image: "../../../assets/menu/plantain.png",
        name: "Frites plantains mûrs",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 3.99,
        combined: false,
        ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
        ref: 'fu_02'
      },
      {
        image: "../../../assets/menu/pommes.png",
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
        image: "../../../assets/menu/breakfast.png",
        name: "Bol de mixte céréals fruits bio",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 8.50,
        combined: false,
        ref: 'fu_02'
      }
      ,{
        image: "../../../assets/menu/breakfast.png",
        name: "Bol de mixte céréals fruits bio",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 8.50,
        combined: false,
        ref: 'fu_02'
      },
      {
        image: "../../../assets/menu/breakfast.png",
        name: "Bol de mixte céréals fruits bio",
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
        image: "../../../assets/menu/juice.jpeg",
        name: "Jus d'orange frais",
        shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
        price: 1.50,
        combined: false,
        ref: 'fu_02'
      },
      {
        image: "../../../assets/menu/juice.jpeg",
        name: "Jus d'orange frais",
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
        image: "../../../assets/menu/icecream.jpeg",
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
        image: "../../../assets/menu/icecream.jpeg",
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
        image: "../../../assets/menu/icecream.jpeg",
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
        image: "../../../assets/menu/icecream.jpeg",
        name: "Glace aux myrtilles",
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