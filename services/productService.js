
class ProductService{

    getRecommandedProducts(){
        return [
          {
            image: "../../../assets/menu/cotelettes.png",
            imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
            name: "Côtelettes de boeuf braisées",
            shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
            price: 29.99,
            ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
            accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
            sauces : [
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
            ]
          },
            {
              image: "../../../assets/menu/poulet.png",
              imageBg: "../../../assets/menu/poulet-bg.jpeg",
              name: "Poulet Braisé",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 19.99,
              ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
              accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
              sauces : [
                {
                  name: "Kechup",
                  checked: false
                },
                {
                  name: "Piment",
                  checked: false
                }
              ]
            },
            {
              image: "../../../assets/menu/viandes.png",
              imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
              name: "Steak grillé",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 19.99,
              ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
              accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
              sauces : [
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
              ]
            },
        ];
    }

    getMealProducts(){
        return [
          {
            image: "../../../assets/menu/cotelettes.png",
            imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
            name: "Côtelettes de boeuf braisées",
            shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
            price: 29.99,
            ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
            accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
            sauces : [
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
            ]
          },
            {
              image: "../../../assets/menu/poulet.png",
              imageBg: "../../../assets/menu/poulet-bg.jpeg",
              name: "Épaule d'agneau braisé",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 19.99,
              ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
              accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
              sauces : [
                {
                  name: "Kechup",
                  checked: false
                },
                {
                  name: "Piment",
                  checked: false
                }
              ]
            },
            {
              image: "../../../assets/menu/viandes.png",
              imageBg: "../../../assets/menu/cotelettes-bg.jpeg",
              name: "Épaule d'agneau braisé",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 19.99,
              ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
              accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
              sauces : [
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
              ]
            },
            {
              image: "../../../assets/menu/magret.png",
              imageBg: "../../../assets/menu/magret.png",
              name: "Magret de cannard",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 29.99,
              ingredients : ["agneaux", "patte d'arachide", "épices", "banane plantain", "tomate", "ail"],
              accompaniments : ["Frites banane plantain", "riz", "Frites pommes de terre", "Batton de manioc"],
              sauces : [
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
              ]
            }
            
        ];
    }

    //Getting data for dubai package tour
    getFishProducts(){
        return [
            {
              image: "../../../assets/menu/poissons.png",
              name: "TIlapia braisé",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 17.99
            },
            {
              image: "../../../assets/menu/poissons.png",
              name: "Tilapia braisé",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 17.99
            }
        ];
    }

    //Getting data for Caire package tour
    getVegetableProducts(){
        return [
            {
              image: "../../../assets/menu/vegetables.png",
              name: "Salade verte",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 12.99
            },
            {
              image: "../../../assets/menu/vegetables.png",
              name: "Salade verte",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 12.99
            },
            {
              image: "../../../assets/menu/vegetables.png",
              name: "Salade verte",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 12.99
            },
            {
              image: "../../../assets/menu/vegetables.png",
              name: "Salade verte",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 12.99
            }
            
        ];
    }

    getAccompanimentProducts(){
        return [
            {
              image: "../../../assets/menu/rice.png",
              name: "Riz cuit vapeur",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 3.99
            },
            {
              image: "../../../assets/menu/plantain.png",
              name: "Frites plantains mûrs",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 3.99
            },
            {
              image: "../../../assets/menu/pommes.png",
              name: "Frites pommes",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout .",
              price: 3.99
            }
          ];
    }

    getBreakfastProducts(){
        return [
      
            {
              image: "../../../assets/menu/breakfast.png",
              name: "Bol de mixte céréals fruits bio",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            }
            ,{
              image: "../../../assets/menu/breakfast.png",
              name: "Bol de mixte céréals fruits bio",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            },
            {
              image: "../../../assets/menu/breakfast.png",
              name: "Bol de mixte céréals fruits bio",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            }
            
          ];
    }

    getDrinkProducts(){
        return [
            {
              image: "../../../assets/menu/juice.jpeg",
              name: "Jus d'orange frais",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            },
            {
              image: "../../../assets/menu/juice.jpeg",
              name: "Jus d'orange frais",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            }
            
          ];
    }

    getDesertProducts(){
        return [
            {
              image: "../../../assets/menu/icecream.jpeg",
              name: "Glace aux myrtilles",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            },
            {
              image: "../../../assets/menu/icecream.jpeg",
              name: "Glace aux myrtilles",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            },
            {
              image: "../../../assets/menu/icecream.jpeg",
              name: "Glace aux myrtilles",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            },
            {
              image: "../../../assets/menu/icecream.jpeg",
              name: "Glace aux myrtilles",
              shortDescription: "Des céréales avec du lait ou bien des tartines pain-beurre-confiture, le tout ."
            }
            
          ];
    }

    
}

module.exports = ProductService ;