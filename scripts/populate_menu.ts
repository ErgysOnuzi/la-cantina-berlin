import { InsertMenuItem } from "@shared/schema";

// Complete comprehensive menu extraction from PDF - cleaned and deduplicated
export const completeMenuData: InsertMenuItem[] = [
  // VORSPEISEN / APPETIZERS - Complete section from PDF
  {
    titleDe: "Vitello Tonnato", titleEn: "Vitello Tonnato",
    descriptionDe: "Dünne Kalbsschnitzel in Thunfisch-Creme", 
    descriptionEn: "Thin slices of veal in tuna cream",
    price: "16.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "D,G"
  },
  {
    titleDe: "Carpaccio vom Rind", titleEn: "Beef Carpaccio",
    descriptionDe: "Auf Rucola Bett mit Parmesanflocken",
    descriptionEn: "On rocket salad bed with parmesan flakes",
    price: "16.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "G,H"
  },
  {
    titleDe: "Ziegenkäse", titleEn: "Goat Cheese",
    descriptionDe: "Auf Rote-Bete-Carpaccio mit Walnüssen und Honig",
    descriptionEn: "On beetroot carpaccio with walnuts and honey",
    price: "16.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "G,H"
  },
  {
    titleDe: "Pulpo gegrillt", titleEn: "Grilled Pulpo",
    descriptionDe: "Gegrillt", descriptionEn: "Grilled pulpo",
    price: "18.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "D"
  },
  {
    titleDe: "Antipasto Misto", titleEn: "Mixed Antipasto",
    descriptionDe: "Nach Art des Hauses für 1 Person",
    descriptionEn: "House style for 1 person",
    price: "15.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "G,H"
  },
  {
    titleDe: "Baby Calamari", titleEn: "Baby Calamari",
    descriptionDe: "Gegrillt mit Rucola", descriptionEn: "Grilled with arugula",
    price: "17.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "D"
  },
  {
    titleDe: "Lachs-Tartar", titleEn: "Salmon Tartar",
    descriptionDe: "Mit Schnittlauch, Avocado und Gurke",
    descriptionEn: "With chives, avocado and cucumber",
    price: "17.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "D"
  },
  {
    titleDe: "Parmigiano Auberginen-Auflauf", titleEn: "Parmigiano Eggplant Casserole",
    descriptionDe: "Parmigiano Auberginen-Auflauf",
    descriptionEn: "Parmigiano eggplant casserole",
    price: "16.50", categoryDe: "Vorspeisen", categoryEn: "Appetizers",
    isAvailable: true, allergens: "G"
  },

  // SUPPEN / SOUPS - Complete section from PDF
  {
    titleDe: "Tomatensuppe", titleEn: "Tomato Soup",
    descriptionDe: "Mit Basilikumschaum", descriptionEn: "With basil foam",
    price: "8.50", categoryDe: "Suppen", categoryEn: "Soups",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Toskanische Gemüsesuppe", titleEn: "Tuscan Vegetable Soup",
    descriptionDe: "Mit Bohnen", descriptionEn: "With beans",
    price: "8.50", categoryDe: "Suppen", categoryEn: "Soups",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Fischsuppe", titleEn: "Fish Soup",
    descriptionDe: "Fischsuppe", descriptionEn: "Fish soup",
    price: "14.50", categoryDe: "Suppen", categoryEn: "Soups",
    isAvailable: true, allergens: "D"
  },

  // SALATE / SALADS - Complete section from PDF  
  {
    titleDe: "Italienischer Brotsalat (Panzanella)", titleEn: "Italian Bread Salad (Panzanella)",
    descriptionDe: "Mit Tomaten, Gurken, Zwiebeln, Oliven, Kapern und Basilikum",
    descriptionEn: "With tomatoes, cucumbers, onions, olives, capers and basil",
    price: "12.50", categoryDe: "Salate", categoryEn: "Salads",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Büffelmozzarella", titleEn: "Buffalo Mozzarella",
    descriptionDe: "Mit Cherrytomaten und Basilikum",
    descriptionEn: "With cherry tomatoes and basil",
    price: "12.50", categoryDe: "Salate", categoryEn: "Salads",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Tomatensalat", titleEn: "Tomato Salad",
    descriptionDe: "Mit Avocado und rote Zwiebel",
    descriptionEn: "With avocado and red onion",
    price: "13.50", categoryDe: "Salate", categoryEn: "Salads",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Cherrytomaten mit Burrata", titleEn: "Cherry Tomatoes with Burrata",
    descriptionDe: "Cherrytomaten mit Burrata",
    descriptionEn: "Cherry tomatoes with burrata",
    price: "16.50", categoryDe: "Salate", categoryEn: "Salads",
    isAvailable: true, allergens: "G,H"
  },
  {
    titleDe: "Insalata Scampi", titleEn: "Scampi Salad",
    descriptionDe: "Gemischter Salat mit Scampi und Fenchel",
    descriptionEn: "Mixed salad with scampi and fennel",
    price: "17.50", categoryDe: "Salate", categoryEn: "Salads",
    isAvailable: true, allergens: "D,G,H"
  },
  {
    titleDe: "Insalata Filetto", titleEn: "Fillet Salad",
    descriptionDe: "Gemischter Salat mit Filetstreifen und Parmesanflocken",
    descriptionEn: "Mixed salad with fillet strips and parmesan flakes",
    price: "18.50", categoryDe: "Salate", categoryEn: "Salads",
    isAvailable: true, allergens: "G"
  },

  // PIZZA (33cm) - Complete section from PDF
  {
    titleDe: "Bruschetta", titleEn: "Bruschetta",
    descriptionDe: "4 Stück", descriptionEn: "4 pieces",
    price: "7.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Focaccia", titleEn: "Focaccia",
    descriptionDe: "Mit Rosmarin", descriptionEn: "With rosemary",
    price: "7.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Focaccia Spezial", titleEn: "Focaccia Special",
    descriptionDe: "Mit Tomaten, Parmigiano, Rucola und Aceto Creme",
    descriptionEn: "With tomatoes, parmigiano, rocket and aceto cream",
    price: "13.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G,L"
  },
  {
    titleDe: "Pizza Tonno", titleEn: "Pizza Tuna",
    descriptionDe: "Mit Zwiebeln", descriptionEn: "With onions",
    price: "14.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,D,G"
  },
  {
    titleDe: "Pizza Diavola", titleEn: "Pizza Diavola",
    descriptionDe: "Mit scharfer Salami", descriptionEn: "With spicy salami",
    price: "14.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Artischocken", titleEn: "Pizza Artichokes",
    descriptionDe: "Mit Artischocken und scharfer Salami",
    descriptionEn: "With artichokes and spicy salami",
    price: "15.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Gorgonzola", titleEn: "Pizza Gorgonzola",
    descriptionDe: "Mit Gorgonzolakäse und Spinat",
    descriptionEn: "With gorgonzola cheese and spinach",
    price: "15.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Stracetti di Mozzarella", titleEn: "Pizza Stracetti di Mozzarella",
    descriptionDe: "Mit Rucola, Cherrytomaten und Acetocreme",
    descriptionEn: "With rocket, cherry tomatoes and aceto cream",
    price: "16.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G,L"
  },
  {
    titleDe: "Pizza Burrata", titleEn: "Pizza Burrata",
    descriptionDe: "Mit Burrata, Cherrytomaten und Pesto",
    descriptionEn: "With burrata, cherry tomatoes and pesto",
    price: "17.00", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G,H"
  },
  {
    titleDe: "Pizza Salsiccia", titleEn: "Pizza Salsiccia",
    descriptionDe: "Mit ital. Salami, Brokkoli, Cherrytomaten und Rucola",
    descriptionEn: "With Italian salami, broccoli, cherry tomatoes and rocket",
    price: "17.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Parma", titleEn: "Pizza Parma",
    descriptionDe: "Mit Schinken, Rucola und Parmesanflocken",
    descriptionEn: "With ham, rocket and parmesan flakes",
    price: "17.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Bresaola", titleEn: "Pizza Bresaola",
    descriptionDe: "Mit Bresaola, Rucola und Parmesanflocken",
    descriptionEn: "With bresaola, rocket and parmesan flakes",
    price: "18.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Trüffel", titleEn: "Pizza Truffle",
    descriptionDe: "Mit Piemont-Trüffel und Trüffelcreme",
    descriptionEn: "With Piedmont truffles and truffle cream",
    price: "19.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pizza Scampi", titleEn: "Pizza Scampi",
    descriptionDe: "Mit Creme Fraiche", descriptionEn: "With creme fraiche",
    price: "18.50", categoryDe: "Pizza", categoryEn: "Pizza",
    isAvailable: true, allergens: "A,D,G"
  },

  // PASTA - Complete section from PDF
  {
    titleDe: "Spaghetti Aglio e Olio", titleEn: "Spaghetti Aglio e Olio",
    descriptionDe: "Mit Knoblauch", descriptionEn: "With garlic",
    price: "12.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Spaghetti Carbonara", titleEn: "Spaghetti Carbonara",
    descriptionDe: "Mit Speck und Eigelb", descriptionEn: "With bacon and egg",
    price: "13.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Penne Arrabbiata", titleEn: "Penne Arrabbiata",
    descriptionDe: "Mit Mozzarella", descriptionEn: "Spicy penne with mozzarella",
    price: "15.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Penne Pollo", titleEn: "Penne Pollo",
    descriptionDe: "Mit Hähnchenbruststreifen und Champignons in Sahnesauce",
    descriptionEn: "With chicken breast strips and mushrooms in cream sauce",
    price: "16.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Pappardelle", titleEn: "Pappardelle",
    descriptionDe: "Mit Kalbsragout, Rucola und Parmesanflocken in eigener Sauce",
    descriptionEn: "With veal ragout, rocket and parmesan flakes in own sauce",
    price: "17.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Paccheri", titleEn: "Paccheri",
    descriptionDe: "Mit Meeresfrüchten in Weißweinsauce",
    descriptionEn: "With seafood in white wine sauce",
    price: "17.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,D,L"
  },
  {
    titleDe: "Linguine", titleEn: "Linguine",
    descriptionDe: "Mit Scampi und Fenchel in Weißwein-Cherrytomatensauce",
    descriptionEn: "With scampi and fennel in white wine-cherry tomato sauce",
    price: "19.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,D,L"
  },
  {
    titleDe: "Orecchiette", titleEn: "Orecchiette",
    descriptionDe: "Mit Salsiccia und Brokkoli in eigenem Sud",
    descriptionEn: "With salsiccia and broccoli in own broth",
    price: "18.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Tagliatelle", titleEn: "Tagliatelle",
    descriptionDe: "Mit Lachs und Zucchini in Hummersauce",
    descriptionEn: "With salmon and zucchini in lobster sauce",
    price: "18.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,D"
  },
  {
    titleDe: "Schwarze Linguine", titleEn: "Black Linguine",
    descriptionDe: "Mit Vongole in Weißweinsauce",
    descriptionEn: "With vongole in white wine sauce",
    price: "18.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,D,L"
  },
  {
    titleDe: "Penne mit Filetstreifen", titleEn: "Penne with Fillet Strips",
    descriptionDe: "Mit Filetstreifen und Champignons in Sahnesauce",
    descriptionEn: "With fillet strips and mushrooms in cream sauce",
    price: "18.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Tagliolini", titleEn: "Tagliolini",
    descriptionDe: "In cremiger Sauce mit Piemont Trüffel",
    descriptionEn: "In creamy sauce with Piedmont truffles",
    price: "23.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Gnocchi", titleEn: "Gnocchi",
    descriptionDe: "Gefüllt mit Ziegenkäse in Trüffelcreme",
    descriptionEn: "Filled with goat cheese in truffle cream",
    price: "21.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Lasagne Classic", titleEn: "Lasagne Classic",
    descriptionDe: "Mit Rinderhackfleisch und Bechamelsauce",
    descriptionEn: "With minced beef and bechamel sauce",
    price: "16.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Risotto mit Meeresfrüchten", titleEn: "Seafood Risotto",
    descriptionDe: "Mit Meeresfrüchten", descriptionEn: "With seafood",
    price: "19.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "D,G"
  },
  {
    titleDe: "Risotto mit Steinpilzen", titleEn: "Risotto with Porcini Mushrooms",
    descriptionDe: "Mit Steinpilzen", descriptionEn: "With porcini mushrooms",
    price: "19.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Risotto mit Trüffel", titleEn: "Truffle Risotto",
    descriptionDe: "Mit Trüffel", descriptionEn: "With truffle",
    price: "21.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Risotto mit Scampi und Safran", titleEn: "Scampi Saffron Risotto",
    descriptionDe: "Mit Scampi und Safran", descriptionEn: "With scampi and saffron",
    price: "22.50", categoryDe: "Pasta", categoryEn: "Pasta",
    isAvailable: true, allergens: "D,G"
  },

  // FISCH / FISH - Complete section from PDF
  {
    titleDe: "Doradenfilet", titleEn: "Sea Bream Fillet",
    descriptionDe: "Mit Oliven, Cherrytomaten und Kräuter dazu Tagesgemüse",
    descriptionEn: "Grilled with olives, cherry tomatoes and herbs with vegetables of the day",
    price: "24.50", categoryDe: "Fisch", categoryEn: "Fish",
    isAvailable: true, allergens: "D"
  },
  {
    titleDe: "Zanderfilet", titleEn: "Pike-Perch Fillet",
    descriptionDe: "Gegrillt in Zitronen-Buttersauce dazu Tagesgemüse",
    descriptionEn: "Grilled in lemon butter sauce with vegetables of the day",
    price: "24.50", categoryDe: "Fisch", categoryEn: "Fish",
    isAvailable: true, allergens: "D,G"
  },
  {
    titleDe: "Lachs", titleEn: "Salmon",
    descriptionDe: "Gegrillt in Zitronen-Buttersauce dazu Tagesgemüse",
    descriptionEn: "Grilled in lemon butter sauce with vegetables of the day",
    price: "26.50", categoryDe: "Fisch", categoryEn: "Fish",
    isAvailable: true, allergens: "D,G"
  },
  {
    titleDe: "Scampi", titleEn: "Scampi",
    descriptionDe: "Gegrillt in Safransauce dazu Tagesgemüse",
    descriptionEn: "Grilled in saffron sauce with vegetables of the day",
    price: "29.50", categoryDe: "Fisch", categoryEn: "Fish",
    isAvailable: true, allergens: "D"
  },

  // FLEISCH / MEAT - Complete section from PDF
  {
    titleDe: "Kalbsschnitzel", titleEn: "Veal Schnitzel",
    descriptionDe: "Paniert, dazu Tagesgemüse", descriptionEn: "Breaded, with vegetables of the day",
    price: "25.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "A,G"
  },
  {
    titleDe: "Kalbsmedaillons in Honig-Senfsauce", titleEn: "Veal Medallions in Honey-Mustard Sauce",
    descriptionDe: "In Honig-Senfsauce dazu Tagesgemüse",
    descriptionEn: "In honey-mustard sauce with vegetables of the day",
    price: "26.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Kalbsmedaillons in Marsalasauce", titleEn: "Veal Medallions in Marsala Sauce",
    descriptionDe: "In Marsalasauce dazu Tagesgemüse",
    descriptionEn: "In marsala sauce with vegetables of the day",
    price: "26.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G,L"
  },
  {
    titleDe: "Kalbs Saltimbocca Alla Romana", titleEn: "Veal Saltimbocca Alla Romana",
    descriptionDe: "In Weißwein-Salbeisauce dazu Tagesgemüse",
    descriptionEn: "In white wine-sage sauce with vegetables of the day",
    price: "25.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G,L"
  },
  {
    titleDe: "Rumpsteak mit grüner Pfeffersauce", titleEn: "Rump Steak with Green Pepper Sauce",
    descriptionDe: "Mit grüner Pfeffersauce dazu Tagesgemüse",
    descriptionEn: "With green pepper sauce and vegetables of the day",
    price: "27.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Rumpsteak mit Gorgonzolasauce", titleEn: "Rump Steak with Gorgonzola Sauce",
    descriptionDe: "Mit Gorgonzolasauce dazu Tagesgemüse",
    descriptionEn: "With gorgonzola sauce and vegetables of the day",
    price: "27.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Rinderfilet in Rotweinsauce", titleEn: "Beef Fillet in Red Wine Sauce",
    descriptionDe: "In Rotweinsauce dazu Tagesgemüse",
    descriptionEn: "In red wine sauce with vegetables of the day",
    price: "37.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G,L"
  },
  {
    titleDe: "Rinderfilet in Pfeffersauce", titleEn: "Beef Fillet in Pepper Sauce",
    descriptionDe: "In Pfeffersauce dazu Tagesgemüse",
    descriptionEn: "In pepper sauce with vegetables of the day",
    price: "36.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Rinderfilet mit Trüffelpasta", titleEn: "Beef Fillet with Truffle Pasta",
    descriptionDe: "Mit Trüffelpasta", descriptionEn: "With truffle pasta",
    price: "39.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Chateau Briand", titleEn: "Chateau Briand",
    descriptionDe: "Für 2 Personen", descriptionEn: "For 2 persons",
    price: "79.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Ossobuco alla Milanese", titleEn: "Ossobuco alla Milanese",
    descriptionDe: "Kalbshaxe geschmort mit Safran Risotto",
    descriptionEn: "Veal knuckle braised with saffron risotto",
    price: "29.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Lammkotelett aus Neuseeland", titleEn: "Lamb Chop from New Zealand",
    descriptionDe: "Mit Tagesgemüse", descriptionEn: "With vegetables of the day",
    price: "29.50", categoryDe: "Fleisch", categoryEn: "Meat",
    isAvailable: true, allergens: "G"
  },

  // DESSERTS - Complete section from PDF
  {
    titleDe: "Tiramisu Originale", titleEn: "Homemade Tiramisu",
    descriptionDe: "Hausgemachtes Tiramisu", descriptionEn: "Homemade tiramisu",
    price: "8.50", categoryDe: "Desserts", categoryEn: "Desserts",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Panna cotta mit Waldfrüchten", titleEn: "Panna Cotta with Wild Berries",
    descriptionDe: "Panna cotta mit Waldfrüchten",
    descriptionEn: "Panna cotta with wildberry sauce",
    price: "8.50", categoryDe: "Desserts", categoryEn: "Desserts",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Creme Brûlée", titleEn: "Creme Brulee",
    descriptionDe: "Creme Brûlée", descriptionEn: "Creme brulee",
    price: "8.50", categoryDe: "Desserts", categoryEn: "Desserts",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Tartufo Eis", titleEn: "Tartufo Ice Cream",
    descriptionDe: "Tartufo Eis", descriptionEn: "Tartufo ice cream",
    price: "9.50", categoryDe: "Desserts", categoryEn: "Desserts",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Cassata Eis", titleEn: "Cassata Ice Cream",
    descriptionDe: "Cassata Eis", descriptionEn: "Cassata ice cream",
    price: "9.50", categoryDe: "Desserts", categoryEn: "Desserts",
    isAvailable: true, allergens: "G"
  },
  
  // KÄSE / CHEESE
  {
    titleDe: "Käse-Mix für 2 Personen", titleEn: "Cheese Mix for 2 Persons",
    descriptionDe: "Käse-Mix für 2 Personen", descriptionEn: "Cheese mix for 2 persons",
    price: "22.50", categoryDe: "Käse", categoryEn: "Cheese",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Parmigiano Reggiano", titleEn: "Parmigiano Reggiano",
    descriptionDe: "Für 1 Person", descriptionEn: "For 1 person",
    price: "14.50", categoryDe: "Käse", categoryEn: "Cheese",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Gorgonzola mit Honig und Walnüssen", titleEn: "Gorgonzola with Honey and Walnuts",
    descriptionDe: "Für 1 Person", descriptionEn: "For 1 person",
    price: "12.50", categoryDe: "Käse", categoryEn: "Cheese",
    isAvailable: true, allergens: "G,H"
  },

  // HEIßGETRÄNKE / HOT DRINKS - Complete section
  {
    titleDe: "Kaffee", titleEn: "Coffee",
    descriptionDe: "Kaffee", descriptionEn: "Coffee",
    price: "3.20", categoryDe: "Heißgetränke", categoryEn: "Hot Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Espresso", titleEn: "Espresso",
    descriptionDe: "Espresso", descriptionEn: "Espresso",
    price: "2.90", categoryDe: "Heißgetränke", categoryEn: "Hot Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Doppelter Espresso", titleEn: "Double Espresso",
    descriptionDe: "Doppelter Espresso", descriptionEn: "Double espresso",
    price: "4.50", categoryDe: "Heißgetränke", categoryEn: "Hot Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Latte Macchiato", titleEn: "Latte Macchiato",
    descriptionDe: "Latte Macchiato", descriptionEn: "Latte macchiato",
    price: "5.50", categoryDe: "Heißgetränke", categoryEn: "Hot Drinks",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Cappuccino", titleEn: "Cappuccino", 
    descriptionDe: "Cappuccino", descriptionEn: "Cappuccino",
    price: "4.50", categoryDe: "Heißgetränke", categoryEn: "Hot Drinks",
    isAvailable: true, allergens: "G"
  },
  {
    titleDe: "Tee", titleEn: "Tea",
    descriptionDe: "Verschiedene Sorten", descriptionEn: "Different varieties",
    price: "4.00", categoryDe: "Heißgetränke", categoryEn: "Hot Drinks",
    isAvailable: true, allergens: ""
  },

  // SOFTDRINKS / SOFT DRINKS - Complete section
  {
    titleDe: "San Pellegrino", titleEn: "San Pellegrino",
    descriptionDe: "Mineralwasser still oder medium (0,25l / 0,75l)", 
    descriptionEn: "Sparkling or still mineral water (0.25l / 0.75l)",
    price: "3.50", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Acqua Panna", titleEn: "Acqua Panna",
    descriptionDe: "Still oder medium (0,25l / 0,75l)", 
    descriptionEn: "Sparkling or still water (0.25l / 0.75l)",
    price: "3.50", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Coca-Cola", titleEn: "Coca-Cola",
    descriptionDe: "Coca-Cola (0,2l / 0,4l)", descriptionEn: "Coca-Cola (0.2l / 0.4l)",
    price: "3.80", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Coca-Cola Light", titleEn: "Coca-Cola Light",
    descriptionDe: "Coca-Cola Light (0,2l / 0,4l)", descriptionEn: "Coca-Cola Light (0.2l / 0.4l)",
    price: "3.80", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Fanta", titleEn: "Fanta",
    descriptionDe: "Fanta (0,2l / 0,4l)", descriptionEn: "Fanta (0.2l / 0.4l)",
    price: "3.80", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Spezi", titleEn: "Spezi",
    descriptionDe: "Spezi (0,2l / 0,4l)", descriptionEn: "Spezi (0.2l / 0.4l)",
    price: "3.80", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Red Bull Energy Drink", titleEn: "Red Bull Energy Drink",
    descriptionDe: "Red Bull Energy Drink (0,25l)", descriptionEn: "Red Bull Energy Drink (0.25l)",
    price: "6.50", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Red Bull Sugarfree", titleEn: "Red Bull Sugarfree",
    descriptionDe: "Red Bull Sugarfree (0,25l)", descriptionEn: "Red Bull Sugarfree (0.25l)",
    price: "6.50", categoryDe: "Softdrinks", categoryEn: "Soft Drinks",
    isAvailable: true, allergens: ""
  },

  // FRUCHTSÄFTE / FRUIT JUICES
  {
    titleDe: "Apfelsaft", titleEn: "Apple Juice",
    descriptionDe: "Apfelsaft von Granini (0,2l / 0,4l)", descriptionEn: "Apple juice from Granini (0.2l / 0.4l)",
    price: "3.50", categoryDe: "Fruchtsäfte", categoryEn: "Fruit Juices",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Orangensaft", titleEn: "Orange Juice",
    descriptionDe: "Orangensaft von Granini (0,2l / 0,4l)", descriptionEn: "Orange juice from Granini (0.2l / 0.4l)",
    price: "3.50", categoryDe: "Fruchtsäfte", categoryEn: "Fruit Juices",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Kirschnektar", titleEn: "Cherry Nectar",
    descriptionDe: "Kirschnektar von Granini (0,2l / 0,4l)", descriptionEn: "Cherry nectar from Granini (0.2l / 0.4l)",
    price: "3.50", categoryDe: "Fruchtsäfte", categoryEn: "Fruit Juices",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Tomatensaft", titleEn: "Tomato Juice",
    descriptionDe: "Tomatensaft (0,2l / 0,4l)", descriptionEn: "Tomato juice (0.2l / 0.4l)",
    price: "3.50", categoryDe: "Fruchtsäfte", categoryEn: "Fruit Juices",
    isAvailable: true, allergens: ""
  },

  // BIER / BEER - Complete section
  {
    titleDe: "Königs Pils vom Fass", titleEn: "König's Pils Draft Beer",
    descriptionDe: "Königs Pils vom Fass (0,2l)", descriptionEn: "König's Pils draft beer (0.2l)",
    price: "4.00", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Königs Pils vom Fass", titleEn: "König's Pils Draft Beer",
    descriptionDe: "Königs Pils vom Fass (0,4l)", descriptionEn: "König's Pils draft beer (0.4l)",
    price: "5.50", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Benediktiner Weizen", titleEn: "Benediktiner Wheat Beer",
    descriptionDe: "Benediktiner Weizen (0,5l)", descriptionEn: "Benediktiner yeast beer (0.5l)",
    price: "5.50", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Benediktiner Weizen alkoholfrei", titleEn: "Benediktiner Wheat Beer Non-Alcoholic",
    descriptionDe: "Benediktiner Weizen alkoholfrei (0,5l)", descriptionEn: "Benediktiner yeast beer non-alcoholic (0.5l)",
    price: "5.50", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Erdinger Weizenbier Kristall", titleEn: "Erdinger Crystal Wheat Beer",
    descriptionDe: "Erdinger Weizenbier Kristall (0,5l)", descriptionEn: "Erdinger crystal yeast beer (0.5l)",
    price: "6.50", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Köstritzer Schwarzbier", titleEn: "Köstritzer Dark Beer",
    descriptionDe: "Köstritzer Schwarzbier (0,33l)", descriptionEn: "Köstritzer dark beer (0.33l)",
    price: "5.00", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },
  {
    titleDe: "Königs Pilsner alkoholfrei", titleEn: "König's Pilsner Non-Alcoholic",
    descriptionDe: "Königs Pilsner alkoholfrei (0,33l)", descriptionEn: "König's Pilsner non-alcoholic beer (0.33l)",
    price: "4.90", categoryDe: "Bier", categoryEn: "Beer",
    isAvailable: true, allergens: "A"
  },

  // WEIN / WINE - Complete sections
  {
    titleDe: "Primitivo", titleEn: "Primitivo",
    descriptionDe: "Primitivo Rotwein (0,2l)", descriptionEn: "Primitivo red wine (0.2l)",
    price: "7.50", categoryDe: "Rotwein", categoryEn: "Red Wine",
    isAvailable: true, allergens: "L"
  },
  {
    titleDe: "Nero D'Avola", titleEn: "Nero D'Avola",
    descriptionDe: "Nero D'Avola Rotwein (0,2l)", descriptionEn: "Nero D'Avola red wine (0.2l)",
    price: "7.50", categoryDe: "Rotwein", categoryEn: "Red Wine",
    isAvailable: true, allergens: "L"
  },
  {
    titleDe: "Pinot Grigio", titleEn: "Pinot Grigio",
    descriptionDe: "Pinot Grigio Weißwein (0,2l)", descriptionEn: "Pinot Grigio white wine (0.2l)",
    price: "7.50", categoryDe: "Weißwein", categoryEn: "White Wine",
    isAvailable: true, allergens: "L"
  },
  {
    titleDe: "Chardonnay", titleEn: "Chardonnay",
    descriptionDe: "Chardonnay Weißwein (0,2l)", descriptionEn: "Chardonnay white wine (0.2l)",
    price: "7.50", categoryDe: "Weißwein", categoryEn: "White Wine",
    isAvailable: true, allergens: "L"
  },

  // SPIRITUOSEN / SPIRITS - Complete section
  {
    titleDe: "Malteserkreuz Aquavit", titleEn: "Malteserkreuz Aquavit",
    descriptionDe: "Malteserkreuz Aquavit (2cl)", descriptionEn: "Malteserkreuz Aquavit (2cl)",
    price: "5.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Vodka 23", titleEn: "Vodka 23",
    descriptionDe: "Vodka 23 (2cl)", descriptionEn: "Vodka 23 (2cl)",
    price: "6.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Williamsbirne", titleEn: "Williams Pear Brandy",
    descriptionDe: "Williamsbirne (2cl)", descriptionEn: "Williams pear brandy (2cl)",
    price: "7.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Calvados X.O.", titleEn: "Calvados X.O.",
    descriptionDe: "Calvados X.O. (2cl)", descriptionEn: "Calvados X.O. (2cl)",
    price: "7.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Grappa Hausmarke", titleEn: "House Grappa",
    descriptionDe: "Grappa Hausmarke (2cl)", descriptionEn: "House grappa (2cl)",
    price: "5.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Grappa Scavi & Ray", titleEn: "Grappa Scavi & Ray",
    descriptionDe: "Grappa Scavi & Ray (2cl)", descriptionEn: "Grappa Scavi & Ray (2cl)",
    price: "13.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Baileys", titleEn: "Baileys",
    descriptionDe: "Baileys (2cl)", descriptionEn: "Baileys (2cl)",
    price: "7.50", categoryDe: "Spirituosen", categoryEn: "Spirits",
    isAvailable: true, allergens: "G"
  },

  // LIKÖRE / LIQUEURS
  {
    titleDe: "Averna", titleEn: "Averna",
    descriptionDe: "Averna (2cl)", descriptionEn: "Averna (2cl)",
    price: "5.50", categoryDe: "Liköre", categoryEn: "Liqueurs",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Limoncello", titleEn: "Limoncello",
    descriptionDe: "Limoncello (2cl)", descriptionEn: "Limoncello (2cl)",
    price: "5.50", categoryDe: "Liköre", categoryEn: "Liqueurs",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Ramazotti", titleEn: "Ramazotti",
    descriptionDe: "Ramazotti (2cl)", descriptionEn: "Ramazotti (2cl)",
    price: "5.50", categoryDe: "Liköre", categoryEn: "Liqueurs",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Sambuca", titleEn: "Sambuca",
    descriptionDe: "Sambuca (2cl)", descriptionEn: "Sambuca (2cl)",
    price: "6.50", categoryDe: "Liköre", categoryEn: "Liqueurs",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Amaretto", titleEn: "Amaretto",
    descriptionDe: "Amaretto (2cl)", descriptionEn: "Amaretto (2cl)",
    price: "4.50", categoryDe: "Liköre", categoryEn: "Liqueurs",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Sanbitter alkoholfrei", titleEn: "Sanbitter Non-Alcoholic",
    descriptionDe: "Sanbitter alkoholfrei (2cl)", descriptionEn: "Sanbitter non-alcoholic (2cl)",
    price: "4.00", categoryDe: "Liköre", categoryEn: "Liqueurs",
    isAvailable: true, allergens: ""
  },

  // WHISKY
  {
    titleDe: "Dalwhinnie Scotch Single Malt 15 Jahre", titleEn: "Dalwhinnie Scotch Single Malt 15 Years",
    descriptionDe: "Dalwhinnie Scotch Single Malt 15 Jahre alt (2cl)", 
    descriptionEn: "Dalwhinnie Scotch Single Malt 15 years old (2cl)",
    price: "11.50", categoryDe: "Whisky", categoryEn: "Whisky",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Chivas", titleEn: "Chivas",
    descriptionDe: "Chivas (2cl)", descriptionEn: "Chivas (2cl)",
    price: "12.50", categoryDe: "Whisky", categoryEn: "Whisky",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Glenfiddich", titleEn: "Glenfiddich",
    descriptionDe: "Glenfiddich (2cl)", descriptionEn: "Glenfiddich (2cl)",
    price: "12.50", categoryDe: "Whisky", categoryEn: "Whisky",
    isAvailable: true, allergens: ""
  },

  // LONGDRINKS
  {
    titleDe: "Vodka 23 - Goldberg Bitter Lemon", titleEn: "Vodka 23 - Goldberg Bitter Lemon",
    descriptionDe: "Vodka 23 - Goldberg Bitter Lemon (2cl)", 
    descriptionEn: "Vodka 23 - Goldberg Bitter Lemon (2cl)",
    price: "8.50", categoryDe: "Longdrinks", categoryEn: "Longdrinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Whisky Cola", titleEn: "Whisky Cola",
    descriptionDe: "Whisky Cola (2cl)", descriptionEn: "Whisky Cola (2cl)",
    price: "10.50", categoryDe: "Longdrinks", categoryEn: "Longdrinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Gin Tonic - Hendrick's Gin", titleEn: "Gin Tonic - Hendrick's Gin",
    descriptionDe: "Gin Tonic - Hendrick's Gin (2cl)", descriptionEn: "Gin Tonic - Hendrick's Gin (2cl)",
    price: "12.50", categoryDe: "Longdrinks", categoryEn: "Longdrinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Cuba Libre", titleEn: "Cuba Libre",
    descriptionDe: "Cuba Libre (2cl)", descriptionEn: "Cuba Libre (2cl)",
    price: "9.50", categoryDe: "Longdrinks", categoryEn: "Longdrinks",
    isAvailable: true, allergens: ""
  },
  {
    titleDe: "Aperol Spritz", titleEn: "Aperol Spritz", 
    descriptionDe: "Klassischer italienischer Aperitif", 
    descriptionEn: "Classic Italian aperitif",
    price: "8.50", categoryDe: "Longdrinks", categoryEn: "Longdrinks",
    isAvailable: true, allergens: ""
  }
];

// Updated comprehensive categories list
export const categories = [
  { de: "Vorspeisen", en: "Appetizers" },
  { de: "Suppen", en: "Soups" }, 
  { de: "Salate", en: "Salads" },
  { de: "Pizza", en: "Pizza" },
  { de: "Pasta", en: "Pasta" },
  { de: "Fisch", en: "Fish" },
  { de: "Fleisch", en: "Meat" },
  { de: "Desserts", en: "Desserts" },
  { de: "Käse", en: "Cheese" },
  { de: "Heißgetränke", en: "Hot Drinks" },
  { de: "Softdrinks", en: "Soft Drinks" },
  { de: "Fruchtsäfte", en: "Fruit Juices" },
  { de: "Bier", en: "Beer" },
  { de: "Rotwein", en: "Red Wine" },
  { de: "Weißwein", en: "White Wine" },
  { de: "Spirituosen", en: "Spirits" },
  { de: "Liköre", en: "Liqueurs" },
  { de: "Whisky", en: "Whisky" },
  { de: "Longdrinks", en: "Longdrinks" }
];