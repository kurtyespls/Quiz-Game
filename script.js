// Shuffle function to randomize array elements (Fisher-Yates shuffle algorithm)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const quizData = {
    
    "Countries": shuffle ([
        { question: "What is the capital of France?", choices: ["Berlin", "Madrid", "Paris", "Lisbon"], answer: "Paris" },
        { question: "Which country is known as the Land of the Rising Sun?", choices: ["China", "Japan", "Korea", "Vietnam"], answer: "Japan" },
        { question: "Which country has the largest population?", choices: ["India", "USA", "China", "Russia"], answer: "China" },
        { question: "What is the capital of Australia?", choices: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
        { question: "Which country is famous for tulips?", choices: ["Belgium", "Netherlands", "Denmark", "Sweden"], answer: "Netherlands" },
        { question: "Which country is known for the Eiffel Tower?", choices: ["France", "Italy", "Germany", "Spain"], answer: "France" },
        { question: "What is the capital of Canada?", choices: ["Toronto", "Ottawa", "Vancouver", "Montreal"], answer: "Ottawa" },
        { question: "Which country is known for its maple syrup?", choices: ["USA", "Canada", "Russia", "Australia"], answer: "Canada" },
        { question: "Which country is known as the Land Down Under?", choices: ["New Zealand", "South Africa", "Australia", "Argentina"], answer: "Australia" },
        { question: "What is the capital of Italy?", choices: ["Milan", "Rome", "Venice", "Naples"], answer: "Rome" },
        { question: "Which country is home to the ancient city of Petra?", choices: ["Jordan", "Egypt", "Syria", "Iraq"], answer: "Jordan" },
        { question: "What is the capital of Brazil?", choices: ["Sao Paulo", "Brasilia", "Rio de Janeiro", "Salvador"], answer: "Brasilia" },
        { question: "Which country is known as the 'Land of Fire and Ice'?", choices: ["Norway", "Iceland", "Finland", "Denmark"], answer: "Iceland" },
        { question: "What is the currency of Japan?", choices: ["Yuan", "Yen", "Dollar", "Won"], answer: "Yen" },
        { question: "Which country's flag features a maple leaf?", choices: ["USA", "Canada", "Australia", "New Zealand"], answer: "Canada" },
        { question: "What is the capital of Spain?", choices: ["Barcelona", "Madrid", "Seville", "Valencia"], answer: "Madrid" },
        { question: "Which country is known for the Great Wall?", choices: ["China", "India", "Russia", "Mongolia"], answer: "China" },
        { question: "What is the largest country by land area?", choices: ["Canada", "Russia", "China", "USA"], answer: "Russia" },
        { question: "Which country is known for its fjords?", choices: ["Sweden", "Norway", "Denmark", "Finland"], answer: "Norway" },
    { question: "SINO ANG PINAKA POGI SA LAHAT?", choices: ["KURT", "KURT", "KURT", "KURT"], answer: "KURT" }
    ]),

    "Fruits":  shuffle ([
        { question: "Which fruit is known as the king of fruits?", choices: ["Apple", "Banana", "Mango", "Pineapple"], answer: "Mango" },
        { question: "Which fruit has the most Vitamin C?", choices: ["Orange", "Kiwi", "Strawberry", "Grapefruit"], answer: "Kiwi" },
        { question: "Which fruit is known for its red color and heart shape?", choices: ["Apple", "Cherry", "Strawberry", "Raspberry"], answer: "Strawberry" },
        { question: "Which fruit is known as the fruit of the vine?", choices: ["Apple", "Banana", "Grape", "Mango"], answer: "Grape" },
        { question: "Which fruit is yellow and known for its potassium content?", choices: ["Apple", "Banana", "Orange", "Pineapple"], answer: "Banana" },
        { question: "Which fruit is green on the outside and red on the inside with black seeds?", choices: ["Apple", "Watermelon", "Kiwi", "Strawberry"], answer: "Watermelon" },
        { question: "Which fruit is used to make wine?", choices: ["Apple", "Banana", "Grape", "Cherry"], answer: "Grape" },
        { question: "Which fruit is known for its prickly skin and sweet yellow flesh?", choices: ["Mango", "Pineapple", "Banana", "Papaya"], answer: "Pineapple" },
        { question: "Which fruit is red or green and used to make cider?", choices: ["Apple", "Grape", "Pear", "Plum"], answer: "Apple" },
        { question: "Which fruit is known for being a tropical fruit and has a hard outer shell and white flesh inside?", choices: ["Banana", "Coconut", "Pineapple", "Mango"], answer: "Coconut" },
        { question: "Which fruit is known as the 'king of fruits' in Southeast Asia?", choices: ["Durian", "Mangosteen", "Lychee", "Longan"], answer: "Durian" },
        { question: "Which fruit is known as the 'queen of fruits'?", choices: ["Mango", "Pineapple", "Pomegranate", "Kiwi"], answer: "Pomegranate" },
        { question: "Which fruit is known for its high potassium content?", choices: ["Banana", "Orange", "Apple", "Grapes"], answer: "Banana" },
        { question: "What fruit is dried to make prunes?", choices: ["Plum", "Apricot", "Fig", "Date"], answer: "Plum" },
        { question: "Which fruit is also known as a 'custard apple'?", choices: ["Papaya", "Cherimoya", "Guava", "Lychee"], answer: "Cherimoya" },
        { question: "Which fruit is known as 'nature's candy'?", choices: ["Grapes", "Strawberries", "Blueberries", "Apples"], answer: "Grapes" },
        { question: "What fruit is famously associated with New Zealand?", choices: ["Kiwi", "Passionfruit", "Feijoa", "Tamarillo"], answer: "Kiwi" },
        { question: "Which fruit is considered an aphrodisiac?", choices: ["Peach", "Pineapple", "Fig", "Mango"], answer: "Fig" },
        { question: "What fruit is used to make grenadine syrup?", choices: ["Pomegranate", "Cranberry", "Cherry", "Raspberry"], answer: "Pomegranate" },
        { question: "Which fruit is known for its vibrant purple color and antioxidants?", choices: ["Blueberry", "Blackberry", "Acai", "Bilberry"], answer: "Acai" }
    ]),

    "Vegetables": shuffle ([
        { question: "Which vegetable is known for being orange and good for your eyes?", choices: ["Carrot", "Broccoli", "Tomato", "Spinach"], answer: "Carrot" },
        { question: "Which vegetable is used to make French fries?", choices: ["Potato", "Carrot", "Beetroot", "Parsnip"], answer: "Potato" },
        { question: "Which vegetable is known for its strong smell and often used in cooking?", choices: ["Garlic", "Onion", "Ginger", "Leek"], answer: "Onion" },
        { question: "Which vegetable is green and looks like a small tree?", choices: ["Spinach", "Broccoli", "Cabbage", "Kale"], answer: "Broccoli" },
        { question: "Which vegetable is red and often used in salads?", choices: ["Tomato", "Cucumber", "Radish", "Pepper"], answer: "Tomato" },
        { question: "Which vegetable is often used to make pickles?", choices: ["Cucumber", "Carrot", "Cabbage", "Radish"], answer: "Cucumber" },
        { question: "Which vegetable is known for its long shape and often used in stir-fries?", choices: ["Carrot", "Bean", "Asparagus", "Zucchini"], answer: "Asparagus" },
        { question: "Which vegetable is used to make guacamole?", choices: ["Avocado", "Artichoke", "Eggplant", "Okra"], answer: "Avocado" },
        { question: "Which vegetable is known for its round shape and can be red, green, or yellow?", choices: ["Pepper", "Pumpkin", "Eggplant", "Squash"], answer: "Pepper" },
        { question: "Which vegetable is known for its bitter taste and is often blanched before cooking?", choices: ["Spinach", "Kale", "Brussels sprout", "Arugula"], answer: "Brussels sprout" },
        { question: "Which vegetable is often used to make coleslaw?", choices: ["Cabbage", "Kale", "Lettuce", "Arugula"], answer: "Cabbage" },
        { question: "Which vegetable is known for its high vitamin C content and is often used in salads?", choices: ["Spinach", "Lettuce", "Broccoli", "Bell pepper"], answer: "Bell pepper" },
        { question: "Which vegetable is known for its purple skin and white flesh inside?", choices: ["Eggplant", "Beetroot", "Turnip", "Radish"], answer: "Eggplant" },
        { question: "Which vegetable is known for its crunchy texture and often used in Asian cuisine?", choices: ["Bok choy", "Swiss chard", "Collard greens", "Mustard greens"], answer: "Bok choy" },
        { question: "Which vegetable is known for its purple color and often used as a garnish?", choices: ["Radish", "Cabbage", "Red onion", "Purple potato"], answer: "Red onion" },
        { question: "Which vegetable is known for its delicate flavor and often used in Mediterranean cuisine?", choices: ["Artichoke", "Asparagus", "Okra", "Fennel"], answer: "Fennel" },
        { question: "Which vegetable is known for its sweet taste and is often used in desserts?", choices: ["Pumpkin", "Sweet potato", "Butternut squash", "Acorn squash"], answer: "Sweet potato" },
        { question: "Which vegetable is known for its spicy flavor and is often used in Mexican dishes?", choices: ["Jalapeno", "Cayenne pepper", "Poblano", "Anaheim pepper"], answer: "Jalapeno" },
        { question: "Which vegetable is known for its distinct aroma and is often used in Indian cuisine?", choices: ["Fenugreek", "Curry leaf", "Cardamom", "Cumin"], answer: "Fenugreek" },
        { question: "Which vegetable is known for its peppery flavor and is often used in salads?", choices: ["Arugula", "Watercress", "Endive", "Radicchio"], answer: "Arugula" }
    ]),

    "Filipino Bayani": shuffle ([
        { question: "Who is considered the national hero of the Philippines?", choices: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"], answer: "Jose Rizal" },
        { question: "Who is known as the 'Father of Philippine Revolution'?", choices: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"], answer: "Andres Bonifacio" },
        { question: "Who is the first President of the Philippines?", choices: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Manuel Quezon"], answer: "Emilio Aguinaldo" },
        { question: "Who is known as the 'Brains of the Revolution'?", choices: ["Andres Bonifacio", "Jose Rizal", "Emilio Aguinaldo", "Apolinario Mabini"], answer: "Apolinario Mabini" },
        { question: "Who is the first Filipino saint?", choices: ["San Pedro Calungsod", "San Lorenzo Ruiz", "San Juan Diego", "San Sebastian"], answer: "San Lorenzo Ruiz" },
        { question: "Who is known as the 'Mother of Philippine Revolution'?", choices: ["Melchora Aquino", "Tandang Sora", "Gregoria de Jesus", "Josefa Llanes Escoda"], answer: "Melchora Aquino" },
        { question: "Who is the first Filipino Cardinal of the Catholic Church?", choices: ["Jaime Cardinal Sin", "Luis Antonio Cardinal Tagle", "Orlando Cardinal Quevedo", "Gaudencio Cardinal Rosales"], answer: "Jaime Cardinal Sin" },
        { question: "Who is the first Filipino astronaut?", choices: ["Ferdinand Marcos", "Cory Aquino", "Benigno Aquino Jr.", "Chel Diokno"], answer: "Chel Diokno" },
        { question: "Who is known as the 'Father of Philippine Typhoons'?", choices: ["Tatang", "Maring", "Yolanda", "Pepito"], answer: "Yolanda" },
        { question: "Who is the first President of the Philippines to be removed from office?", choices: ["Ferdinand Marcos", "Joseph Estrada", "Gloria Macapagal Arroyo", "Noy Noy Aquino"], answer: "Joseph Estrada" },
        { question: "Who is the first Filipino Miss Universe?", choices: ["Gloria Diaz", "Margie Moran", "Pia Wurtzbach", "Catriona Gray"], answer: "Gloria Diaz" },
        { question: "Who is the first Filipino to set foot on Mount Everest?", choices: ["Carla Villamor", "Leo Oracion", "Rommel Cruz", "Erwin Emata"], answer: "Leo Oracion" },
        { question: "Who is known as the 'Father of Philippine Pharmacy'?", choices: ["Jose Rizal", "Leon Ma. Guerrero III", "Claudio Teehankee", "Apolinario Mabini"], answer: "Jose Rizal" },
        { question: "Who is the first Filipino to make a documentary film?", choices: ["Ferdinand Marcos", "Manuel L. Quezon", "Ramon Magsaysay", "Jose Burgos"], answer: "Ferdinand Marcos" },
        { question: "Who is the first Filipino scientist?", choices: ["Jose Rizal", "Luis Taruc", "Manuel L. Quezon", "Leon Ma. Guerrero III"], answer: "Jose Rizal" },
        { question: "Who is known as the 'Father of Philippine Radio'?", choices: ["Jose Rizal", "Jesse Robredo", "Eddie Garcia", "Ramon Magsaysay"], answer: "Jose Rizal" },
        { question: "Who is the first Filipino-American to win a Grammy Award?", choices: ["Lea Salonga", "Apl.de.ap", "Billy Crawford", "Lani Misalucha"], answer: "Lea Salonga" },
        { question: "Who is known as the 'Father of Philippine TV'?", choices: ["Ramon Revilla Sr.", "Dolphy", "Tito Sotto", "Juan Ponce Enrile"], answer: "Ramon Revilla Sr." },
        { question: "Who is the first Filipino to win the Nobel Prize for Literature?", choices: ["Jose Rizal", "Miguel de la Cruz", "Leonor Orosa", "Jose Luna"], answer: "Jose Rizal" },
        { question: "Who is the first Filipino to win the Man Booker International Prize?", choices: ["F. Sionil Jose", "Juan Luna", "Tanghalang Pilipino", "Bayanihan"], answer: "F. Sionil Jose" }
    ]),

    "Filipino Foods":  shuffle ([
        { question: "What is the Filipino version of rice porridge?", choices: ["Lugaw", "Goto", "Arroz Caldo", "Champorado"], answer: "Arroz Caldo" },
        { question: "What is the Filipino term for egg rolls?", choices: ["Lumpia", "Turon", "Puto", "Kutsinta"], answer: "Lumpia" },
        { question: "What is the Filipino version of chicken stew?", choices: ["Afritada", "Adobo", "Menudo", "Sinigang"], answer: "Afritada" },
        { question: "What is the Filipino term for stewed pork belly?", choices: ["Lechon Kawali", "Bagnet", "Crispy Pata", "Humba"], answer: "Humba" },
        { question: "What is the Filipino version of caramelized plantains?", choices: ["Maruya", "Turon", "Banana-Q", "Cassava Cake"], answer: "Banana-Q" },
        { question: "What is the Filipino term for coconut rice cake?", choices: ["Puto", "Bibingka", "Suman", "Espasol"], answer: "Bibingka" },
        { question: "What is the Filipino version of sticky rice cakes?", choices: ["Biko", "Espasol", "Palitaw", "Kutsinta"], answer: "Palitaw" },
        { question: "What is the Filipino term for chicken cooked in vinegar and soy sauce?", choices: ["Sinampalukang Manok", "Paksiw na Lechon", "Pininyahang Manok", "Adobo"], answer: "Adobo" },
        { question: "What is the Filipino version of shaved ice dessert?", choices: ["Sorbetes", "Halo-halo", "Taho", "Ginataang Halo-halo"], answer: "Halo-halo" },
        { question: "What is the Filipino term for coconut milk stew?", choices: ["Kare-Kare", "Laing", "Bicol Express", "Ginataang Gulay"], answer: "Laing" },
        { question: "What is the Filipino version of savory rice cakes?", choices: ["Kutsinta", "Puto", "Suman", "Espasol"], answer: "Kutsinta" },
        { question: "What is the Filipino term for spicy pork stew?", choices: ["Bicol Express", "Lechon Paksiw", "Kare-Kare", "Dinuguan"], answer: "Bicol Express" },
        { question: "What is the Filipino version of sticky rice with coconut milk?", choices: ["Suman", "Biko", "Palitaw", "Espasol"], answer: "Suman" },
        { question: "What is the Filipino term for coconut meat salad?", choices: ["Ginataang Halo-halo", "Buko Salad", "Turon", "Halo-halo"], answer: "Buko Salad" },
        { question: "What is the Filipino version of rice cakes wrapped in banana leaves?", choices: ["Suman", "Puto", "Bibingka", "Espasol"], answer: "Bibingka" },
        { question: "What is the Filipino term for fermented shrimp paste?", choices: ["Bagoong", "Patis", "Suka", "Toyo"], answer: "Bagoong" },
        { question: "What is the Filipino version of coconut vinegar?", choices: ["Suka", "Bagoong", "Patis", "Toyo"], answer: "Suka" },
        { question: "What is the Filipino term for fish sauce?", choices: ["Patis", "Bagoong", "Suka", "Toyo"], answer: "Patis" },
        { question: "What is the Filipino version of sweetened banana fritters?", choices: ["Turon", "Maruya", "Puto", "Kutsinta"], answer: "Turon" },
        { question: "What is the Filipino term for caramelized cassava cake?", choices: ["Bibingka", "Cassava Cake", "Puto", "Kutsinta"], answer: "Cassava Cake" }
    ]),
    
    "Animals": shuffle ([
{ question: "What is the largest land animal?", choices: ["Elephant", "Giraffe", "Hippo", "Rhino"], answer: "Elephant" },
        { question: "Which animal can change its color to match its surroundings?", choices: ["Chameleon", "Octopus", "Cuttlefish", "Flounder"], answer: "Chameleon" },
        { question: "What is the fastest land animal?", choices: ["Cheetah", "Lion", "Gazelle", "Leopard"], answer: "Cheetah" },
        { question: "Which animal sleeps standing up?", choices: ["Horse", "Cow", "Goat", "Flamingo"], answer: "Flamingo" },
        { question: "What is the only mammal capable of sustained flight?", choices: ["Bat", "Swan", "Dragonfly", "Owl"], answer: "Bat" },
        { question: "Which animal is known as the 'King of the Jungle'?", choices: ["Lion", "Tiger", "Leopard", "Cheetah"], answer: "Lion" },
        { question: "Which animal can live the longest without water?", choices: ["Camel", "Kangaroo", "Desert Tortoise", "Armadillo"], answer: "Camel" },
        { question: "What is the fastest marine animal?", choices: ["Blue Whale", "Orca", "Sailfish", "Dolphin"], answer: "Sailfish" },
        { question: "Which animal is known for its ability to mimic human speech?", choices: ["Parrot", "Raven", "Cockatoo", "Myna"], answer: "Parrot" },
        { question: "What is the largest living fish species?", choices: ["Whale Shark", "Great White Shark", "Manta Ray", "Basking Shark"], answer: "Whale Shark" },
        { question: "Which animal can sleep for up to three years at a time?", choices: ["Koala", "Sloth", "Armadillo", "Hamster"], answer: "Sloth" },
        { question: "What is the largest species of bear?", choices: ["Polar Bear", "Grizzly Bear", "Black Bear", "Brown Bear"], answer: "Polar Bear" },
        { question: "Which animal is known for its ability to camouflage itself on tree bark?", choices: ["Gecko", "Tree Frog", "Mantis", "Leaf-tailed Gecko"], answer: "Leaf-tailed Gecko" },
        { question: "What is the smallest mammal in the world?", choices: ["Shrew", "Bat", "Mouse", "Squirrel"], answer: "Shrew" },
        { question: "Which animal can run faster than a horse?", choices: ["Ostrich", "Kangaroo", "Springbok", "Impala"], answer: "Ostrich" },
        { question: "What is the only continent where giraffes live in the wild?", choices: ["Africa", "Asia", "Australia", "South America"], answer: "Africa" },
        { question: "Which animal has the longest tongue relative to its body size?", choices: ["Chameleon", "Anteater", "Woodpecker", "Giraffe"], answer: "Anteater" },
        { question: "What is the fastest bird in level flight?", choices: ["Peregrine Falcon", "Golden Eagle", "Swift", "Swallow"], answer: "Peregrine Falcon" },
        { question: "Which animal is known for its ability to roll into a ball as a defense mechanism?", choices: ["Armadillo", "Hedgehog", "Pangolin", "Porcupine"], answer: "Hedgehog" },
        { question: "What is the heaviest flying bird?", choices: ["Albatross", "Bald Eagle", "Condor", "Mute Swan"], answer: "Albatross" }
    ]),
    
     "History": shuffle([
        { question: "Which war was fought between the North and South regions of the United States?", choices: ["Civil War", "Revolutionary War", "World War II", "Vietnam War"], answer: "Civil War" },
        { question: "Who was the first President of the United States?", choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
        { question: "In which year did the Titanic sink after hitting an iceberg?", choices: ["1912", "1905", "1920", "1915"], answer: "1912" },
        { question: "Which city was the capital of the Roman Empire?", choices: ["Rome", "Athens", "Alexandria", "Constantinople"], answer: "Rome" },
        { question: "Who discovered America?", choices: ["Christopher Columbus", "Amerigo Vespucci", "Marco Polo", "Vasco da Gama"], answer: "Christopher Columbus" },
        { question: "Which ancient civilization built the pyramids?", choices: ["Egyptians", "Greeks", "Romans", "Mayans"], answer: "Egyptians" },
        { question: "When did World War I begin?", choices: ["1914", "1918", "1920", "1910"], answer: "1914" },
        { question: "Who was the first man to step on the moon?", choices: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins", "Alan Shepard"], answer: "Neil Armstrong" },
        { question: "Which country was divided into East and West Germany during the Cold War?", choices: ["Germany", "Russia", "France", "Italy"], answer: "Germany" },
        { question: "Who was the first female Prime Minister of the United Kingdom?", choices: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Jacinda Ardern"], answer: "Margaret Thatcher" },
        { question: "When did the Great Depression begin?", choices: ["1929", "1933", "1910", "1945"], answer: "1929" },
        { question: "Which famous document begins with the words 'When in the Course of human events...'?", choices: ["Declaration of Independence", "Magna Carta", "Bill of Rights", "Constitution"], answer: "Declaration of Independence" },
        { question: "Who painted the Mona Lisa?", choices: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Titian"], answer: "Leonardo da Vinci" },
        { question: "In which year did India gain independence from British rule?", choices: ["1947", "1950", "1935", "1920"], answer: "1947" },
        { question: "Who was the first Emperor of unified China?", choices: ["Qin Shi Huang", "Han Wudi", "Emperor Taizong", "Kublai Khan"], answer: "Qin Shi Huang" },
        { question: "Which American President is associated with the New Deal program during the Great Depression?", choices: ["Franklin D. Roosevelt", "Herbert Hoover", "Woodrow Wilson", "Harry S. Truman"], answer: "Franklin D. Roosevelt" },
        { question: "Which ancient civilization built the Colosseum in Rome?", choices: ["Romans", "Greeks", "Persians", "Egyptians"], answer: "Romans" },
        { question: "Who was the last Tsar of Russia?", choices: ["Nicholas II", "Alexander II", "Ivan the Terrible", "Peter the Great"], answer: "Nicholas II" },
        { question: "When did the Berlin Wall fall, marking the end of the Cold War?", choices: ["1989", "1991", "1985", "1990"], answer: "1989" },
        { question: "Which English king was forced to sign the Magna Carta in 1215?", choices: ["King John", "King Henry VIII", "King Richard the Lionheart", "King Edward I"], answer: "King John" }
    ]),
    
    "Science": shuffle([
        { question: "What is the chemical symbol for water?", choices: ["H2O", "CO2", "NaCl", "O2"], answer: "H2O" },
        { question: "Which planet is known as the Red Planet?", choices: ["Mars", "Venus", "Jupiter", "Saturn"], answer: "Mars" },
        { question: "What is the powerhouse of the cell?", choices: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic reticulum"], answer: "Mitochondria" },
        { question: "What force keeps us on the ground?", choices: ["Gravity", "Magnetism", "Friction", "Buoyancy"], answer: "Gravity" },
        { question: "Which scientist developed the theory of relativity?", choices: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"], answer: "Albert Einstein" },
        { question: "What is the largest organ in the human body?", choices: ["Skin", "Heart", "Liver", "Lungs"], answer: "Skin" },
        { question: "What gas do plants absorb from the atmosphere?", choices: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Carbon dioxide" },
        { question: "What is the process by which plants make their own food?", choices: ["Photosynthesis", "Respiration", "Digestion", "Circulation"], answer: "Photosynthesis" },
        { question: "Which element has the chemical symbol 'Fe'?", choices: ["Iron", "Gold", "Silver", "Copper"], answer: "Iron" },
        { question: "What is the smallest unit of matter?", choices: ["Atom", "Molecule", "Cell", "Electron"], answer: "Atom" },
        { question: "What is the Earth's primary source of energy?", choices: ["Sun", "Moon", "Stars", "Galaxy"], answer: "Sun" },
        { question: "Which gas do humans need to breathe in to survive?", choices: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"], answer: "Oxygen" },
        { question: "What is the process of liquid turning into vapor?", choices: ["Evaporation", "Condensation", "Sublimation", "Melting"], answer: "Evaporation" },
        { question: "What is the hardest natural substance on Earth?", choices: ["Diamond", "Gold", "Platinum", "Quartz"], answer: "Diamond" },
        { question: "Who is known as the father of modern physics?", choices: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"], answer: "Albert Einstein" },
        { question: "What is the largest planet in our solar system?", choices: ["Jupiter", "Saturn", "Neptune", "Uranus"], answer: "Jupiter" },
        { question: "Which process releases energy from food?", choices: ["Cellular respiration", "Photosynthesis", "Digestion", "Circulation"], answer: "Cellular respiration" },
        { question: "What is the study of the universe known as?", choices: ["Astronomy", "Biology", "Geology", "Physics"], answer: "Astronomy" },
        { question: "Which type of energy is stored in food?", choices: ["Chemical energy", "Solar energy", "Wind energy", "Nuclear energy"], answer: "Chemical energy" },
        { question: "What is the main component of the Earth's atmosphere?", choices: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"], answer: "Nitrogen" },
        { question: "Which famous scientist proposed the theory of gravity?", choices: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Galileo Galilei"], answer: "Isaac Newton" },
    ]),

};

// Exporting the questions for access in other files
if (typeof module != 'undefined') {
    module.exports = questions;
}


let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let playerName = '';
let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

const mainMenu = document.getElementById('main-menu');
const quizContainer = document.getElementById('quiz-container');
const leaderboardContainer = document.getElementById('leaderboard');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const startGameBtn = document.getElementById('start-game-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const exitGameBtn = document.getElementById('exit-game-btn');
const backBtn = document.getElementById('back-btn');
const playerNameInput = document.getElementById('player-name');
const categorySelect = document.getElementById('category-select');
const leaderboardList = document.getElementById('leaderboard-list');

startGameBtn.addEventListener('click', startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentCategory].length) {
        setNextQuestion();
    } else {
        endGame();
    }
});
leaderboardBtn.addEventListener('click', showLeaderboard);
exitGameBtn.addEventListener('click', () => window.close());
backBtn.addEventListener('click', showMainMenu);

function startGame() {
    playerName = playerNameInput.value;
    currentCategory = categorySelect.value;
    if (playerName === '') {
        alert('Please enter your name.');
        return;
    }
    mainMenu.classList.add('hide');
    quizContainer.classList.remove('hide');
    currentQuestionIndex = 0;
    score = 0;
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(quizData[currentCategory][currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.textContent = question.question;
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('choice');
        if (choice === question.answer) {
            button.dataset.correct = true;
        }
        button.addEventListener('click', selectAnswer);
        choicesEl.appendChild(button);
    });
}


function resetState() {
    nextBtn.classList.add('hide');
    while (choicesEl.firstChild) {
        choicesEl.removeChild(choicesEl.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('incorrect');
    }
    Array.from(choicesEl.children).forEach(button => {
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    
    // Disable next button until choices are shown
    nextBtn.disabled = true;
    
    // Delay showing next question for 1 second
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData[currentCategory].length) {
            setNextQuestion();
        } else {
            endGame();
        }
        // Enable next button after showing choices
        nextBtn.disabled = false;
    }, 500);
}



function endGame() {
    quizContainer.classList.add('hide');
    leaderboard.push({ name: playerName, score: score });
    leaderboard.sort((a, b) => b.score - a.score);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
    showLeaderboard();
}


function showLeaderboard() {
    mainMenu.classList.add('hide');
    quizContainer.classList.add('hide');
    leaderboardContainer.classList.remove('hide');
    leaderboardList.innerHTML = leaderboard.map((entry, index) => `<div>${index + 1}. ${entry.name} - ${entry.score}</div>`).join('');
}

function showMainMenu() {
    leaderboardContainer.classList.add('hide');
    mainMenu.classList.remove('hide');
}

const howToPlayModal = document.getElementById('how-to-play-modal');
const howToPlayBtn = document.getElementById('how-to-play-btn');
const closeHowToPlayBtn = document.querySelector('.close');

// Show How to Play modal
howToPlayBtn.addEventListener('click', () => {
    howToPlayModal.style.display = 'block';
});

// Close How to Play modal
closeHowToPlayBtn.addEventListener('click', () => {
    howToPlayModal.style.display = 'none';
});

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === howToPlayModal) {
        howToPlayModal.style.display = 'none';
    }
});

// Existing JavaScript code continues...
