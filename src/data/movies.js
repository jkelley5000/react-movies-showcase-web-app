const movies = [{
    "id": 1,
    "title": "Elvis Meets Nixon",
    "genre": "Comedy|Drama",
    "description": "aliquam quis turpis eget elit sodales scelerisque mauris sit amet"
}, {
    "id": 2,
    "title": "Petals on the Wind",
    "genre": "Drama|Romance|Thriller",
    "description": "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at"
}, {
    "id": 3,
    "title": "Iraq for Sale: The War Profiteers",
    "genre": "Documentary",
    "description": "commodo vulputate justo in blandit ultrices enim lorem ipsum dolor sit"
}, {
    "id": 4,
    "title": "Dr. Who and the Daleks",
    "genre": "Adventure|Children|Sci-Fi",
    "description": "sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque"
}, {
    "id": 5,
    "title": "Perfect Sisters",
    "genre": "Drama|Mystery",
    "description": "nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in"
}, {
    "id": 6,
    "title": "Sh! The Octopus",
    "genre": "Comedy|Mystery",
    "description": "erat tortor sollicitudin mi sit amet lobortis sapien sapien non"
}, {
    "id": 7,
    "title": "Wild One, The",
    "genre": "Drama",
    "description": "aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac habitasse"
}, {
    "id": 8,
    "title": "Lay of the Land, The",
    "genre": "Comedy|Drama",
    "description": "ornare consequat lectus in est risus auctor sed tristique in tempus sit"
}, {
    "id": 9,
    "title": "About Alex",
    "genre": "Drama",
    "description": "aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac"
}, {
    "id": 10,
    "title": "Welcome to the Rileys",
    "genre": "Drama",
    "description": "nam nulla integer pede justo lacinia eget tincidunt eget tempus vel"
}, {
    "id": 11,
    "title": "Goodbye, South, Goodbye (Nan guo zai jian, nan guo)",
    "genre": "Crime|Drama",
    "description": "nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in hac"
}, {
    "id": 12,
    "title": "Movie, A",
    "genre": "Documentary",
    "description": "accumsan felis ut at dolor quis odio consequat varius integer"
}, {
    "id": 13,
    "title": "Merchants of Doubt",
    "genre": "Documentary",
    "description": "donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id"
}, {
    "id": 14,
    "title": "Deadly Companions, The",
    "genre": "Western",
    "description": "neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus"
}, {
    "id": 15,
    "title": "Brother of Sleep (Schlafes Bruder)",
    "genre": "Drama",
    "description": "in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum"
}, {
    "id": 16,
    "title": "Matrix Reloaded, The",
    "genre": "Action|Adventure|Sci-Fi|Thriller|IMAX",
    "description": "nam dui proin leo odio porttitor id consequat in consequat ut nulla"
}, {
    "id": 17,
    "title": "Marooned",
    "genre": "Drama|Sci-Fi",
    "description": "luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam"
}, {
    "id": 18,
    "title": "Signal, The",
    "genre": "Horror|Sci-Fi|Thriller",
    "description": "a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla"
}, {
    "id": 19,
    "title": "Meeting Evil",
    "genre": "Crime|Drama|Mystery|Thriller",
    "description": "luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at"
}, {
    "id": 20,
    "title": "Mozart and the Whale",
    "genre": "Comedy|Drama|Romance",
    "description": "felis sed interdum venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu"
}, {
    "id": 21,
    "title": "Frozen",
    "genre": "Drama|Horror|Thriller",
    "description": "ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci"
}, {
    "id": 22,
    "title": "Kit Kittredge: An American Girl",
    "genre": "Children|Comedy|Drama|Mystery",
    "description": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac"
}, {
    "id": 23,
    "title": "Exposed",
    "genre": "Drama",
    "description": "ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus"
}, {
    "id": 24,
    "title": "Distant Drums",
    "genre": "Action|Romance|Western",
    "description": "id consequat in consequat ut nulla sed accumsan felis ut at"
}, {
    "id": 25,
    "title": "Condo Painting",
    "genre": "Documentary",
    "description": "ipsum ac tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum"
}, {
    "id": 26,
    "title": "Seven Days to Noon",
    "genre": "Drama|Thriller",
    "description": "mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac"
}, {
    "id": 27,
    "title": "All at Sea",
    "genre": "Comedy",
    "description": "aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate"
}, {
    "id": 28,
    "title": "Grandmother",
    "genre": "Drama",
    "description": "sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus at diam nam tristique tortor"
}, {
    "id": 29,
    "title": "Breakheart Pass",
    "genre": "Western",
    "description": "adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis orci"
}, {
    "id": 30,
    "title": "Stitch! The Movie",
    "genre": "Animation|Children|Comedy",
    "description": "odio justo sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi"
}, {
    "id": 31,
    "title": "Electroma",
    "genre": "Drama|Sci-Fi",
    "description": "in congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut"
}, {
    "id": 32,
    "title": "Edge of Madness",
    "genre": "Drama",
    "description": "pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti"
}, {
    "id": 33,
    "title": "History of Future Folk, The",
    "genre": "Adventure|Comedy|Musical|Sci-Fi",
    "description": "in felis eu sapien cursus vestibulum proin eu mi nulla ac enim in"
}, {
    "id": 34,
    "title": "Food Matters",
    "genre": "Documentary",
    "description": "pharetra magna ac consequat metus sapien ut nunc vestibulum ante"
}, {
    "id": 35,
    "title": "Rare Birds",
    "genre": "Comedy|Drama",
    "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio"
}, {
    "id": 36,
    "title": "Trailer Park Boys: Countdown to Liquor Day",
    "genre": "Comedy|Crime",
    "description": "congue etiam justo etiam pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut"
}, {
    "id": 37,
    "title": "War Made Easy: How Presidents & Pundits Keep Spinning Us to Death",
    "genre": "Documentary|War",
    "description": "posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor"
}, {
    "id": 38,
    "title": "Great Outdoors, The",
    "genre": "Comedy",
    "description": "ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio"
}, {
    "id": 39,
    "title": "Hamlet (Gamlet)",
    "genre": "Drama",
    "description": "hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget"
}, {
    "id": 40,
    "title": "Big Sur",
    "genre": "Drama",
    "description": "donec ut mauris eget massa tempor convallis nulla neque libero"
}, {
    "id": 41,
    "title": "Wondrous Oblivion",
    "genre": "Children|Comedy|Drama",
    "description": "consequat morbi a ipsum integer a nibh in quis justo maecenas"
}, {
    "id": 42,
    "title": "Sisterhood of the Traveling Pants 2, The",
    "genre": "Adventure|Comedy|Drama|Romance",
    "description": "odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel"
}, {
    "id": 43,
    "title": "Year My Parents Went on Vacation, The (O Ano em Que Meus Pais Saíram de Férias)",
    "genre": "Drama",
    "description": "tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed"
}, {
    "id": 44,
    "title": "Summit, The",
    "genre": "Documentary",
    "description": "sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum"
}, {
    "id": 45,
    "title": "My Son John",
    "genre": "Drama",
    "description": "at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes"
}, {
    "id": 46,
    "title": "Foreigner, The",
    "genre": "Drama",
    "description": "augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in"
}, {
    "id": 47,
    "title": "Joyful Noise",
    "genre": "Comedy|Musical",
    "description": "eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus"
}, {
    "id": 48,
    "title": "Big Trouble in Little China",
    "genre": "Action|Adventure|Comedy|Fantasy",
    "description": "eget congue eget semper rutrum nulla nunc purus phasellus in felis"
}, {
    "id": 49,
    "title": "Bon Cop, Bad Cop",
    "genre": "Action|Comedy|Crime|Thriller",
    "description": "diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue"
}, {
    "id": 50,
    "title": "Open Season",
    "genre": "Comedy",
    "description": "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis"
}, {
    "id": 51,
    "title": "Electric Shadows (Meng ying tong nian)",
    "genre": "Drama",
    "description": "eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut"
}, {
    "id": 52,
    "title": "Young Victoria, The",
    "genre": "Drama|Romance",
    "description": "curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi"
}, {
    "id": 53,
    "title": "Finger, The (Dedo, El)",
    "genre": "Comedy",
    "description": "cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat"
}, {
    "id": 54,
    "title": "Magic Mike",
    "genre": "Drama|Romance",
    "description": "ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna"
}, {
    "id": 55,
    "title": "Eye for an Eye, An (Oeil pour oeil) (Eyes of the Sahara)",
    "genre": "Drama",
    "description": "justo lacinia eget tincidunt eget tempus vel pede morbi porttitor"
}, {
    "id": 56,
    "title": "California Split",
    "genre": "Comedy|Drama",
    "description": "lectus in est risus auctor sed tristique in tempus sit amet sem fusce"
}, {
    "id": 57,
    "title": "Valiant",
    "genre": "Adventure|Animation|Children|Comedy|Fantasy|War",
    "description": "ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus"
}, {
    "id": 58,
    "title": "Numb",
    "genre": "Comedy|Drama|Romance",
    "description": "ligula pellentesque ultrices phasellus id sapien in sapien iaculis congue vivamus metus arcu adipiscing"
}, {
    "id": 59,
    "title": "Jab We Met",
    "genre": "Comedy|Drama|Romance",
    "description": "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh"
}, {
    "id": 60,
    "title": "Glass Menagerie, The",
    "genre": "Drama",
    "description": "quisque ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer"
}, {
    "id": 61,
    "title": "The Little Rascals Save the Day",
    "genre": "Comedy",
    "description": "amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi"
}, {
    "id": 62,
    "title": "Room 237",
    "genre": "Documentary",
    "description": "id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit"
}, {
    "id": 63,
    "title": "Other Side of Heaven, The",
    "genre": "Adventure|Drama",
    "description": "morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam"
}, {
    "id": 64,
    "title": "Timeline",
    "genre": "Action|Adventure|Sci-Fi",
    "description": "facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt"
}, {
    "id": 65,
    "title": "James Dean",
    "genre": "Drama",
    "description": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in"
}, {
    "id": 66,
    "title": "Cab for Three, A (Taxi para tres)",
    "genre": "Action|Comedy|Crime|Drama",
    "description": "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam"
}, {
    "id": 67,
    "title": "Dear Brigitte",
    "genre": "Comedy",
    "description": "in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat non pretium quis lectus suspendisse"
}, {
    "id": 68,
    "title": "Red Salute",
    "genre": "Comedy|Romance",
    "description": "tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam"
}, {
    "id": 69,
    "title": "Angel Face",
    "genre": "Crime|Drama|Film-Noir",
    "description": "nulla dapibus dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros"
}, {
    "id": 70,
    "title": "Caged",
    "genre": "Crime|Drama",
    "description": "libero non mattis pulvinar nulla pede ullamcorper augue a suscipit"
}, {
    "id": 71,
    "title": "Dragon Fist (Long quan)",
    "genre": "Action|Drama",
    "description": "erat vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla integer pede"
}, {
    "id": 72,
    "title": "Big Nothing",
    "genre": "Comedy|Crime|Thriller",
    "description": "posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci"
}, {
    "id": 73,
    "title": "Trial of Joan of Arc, The (Procès de Jeanne d'Arc)",
    "genre": "Drama|War",
    "description": "sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere"
}, {
    "id": 74,
    "title": "Invasion of Astro-Monster (Godzilla vs. Monster Zero) (Kaijû daisensô)",
    "genre": "Action|Adventure|Sci-Fi",
    "description": "nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie"
}, {
    "id": 75,
    "title": "American Crude",
    "genre": "Comedy|Drama",
    "description": "potenti cras in purus eu magna vulputate luctus cum sociis"
}, {
    "id": 76,
    "title": "Bobcat Goldthwait: You Don't Look the Same Either",
    "genre": "Comedy",
    "description": "ante vivamus tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor"
}, {
    "id": 77,
    "title": "Star Is Born, A",
    "genre": "Drama",
    "description": "tellus nulla ut erat id mauris vulputate elementum nullam varius"
}, {
    "id": 78,
    "title": "Something Wild",
    "genre": "Comedy|Crime|Drama",
    "description": "sollicitudin ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare"
}, {
    "id": 79,
    "title": "Firstborn",
    "genre": "Drama|Thriller",
    "description": "at velit eu est congue elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium"
}, {
    "id": 80,
    "title": "Tinker Bell and the Lost Treasure",
    "genre": "Adventure|Animation|Children|Fantasy",
    "description": "varius ut blandit non interdum in ante vestibulum ante ipsum"
}, {
    "id": 81,
    "title": "Madagascar",
    "genre": "Adventure|Animation|Children|Comedy",
    "description": "semper rutrum nulla nunc purus phasellus in felis donec semper sapien a"
}, {
    "id": 82,
    "title": "Strange Cargo",
    "genre": "Drama",
    "description": "venenatis turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at velit eu"
}, {
    "id": 83,
    "title": "Promise Me This (Zavet)",
    "genre": "Comedy",
    "description": "tortor duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque"
}, {
    "id": 84,
    "title": "Cast A Deadly Spell",
    "genre": "Comedy|Fantasy|Horror",
    "description": "nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at feugiat"
}, {
    "id": 85,
    "title": "Hustle & Flow",
    "genre": "Crime|Drama",
    "description": "volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in"
}, {
    "id": 86,
    "title": "The Last Outpost",
    "genre": "Western",
    "description": "non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in"
}, {
    "id": 87,
    "title": "Iron Eagle II",
    "genre": "Action|War",
    "description": "etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit"
}, {
    "id": 88,
    "title": "Broadway Damage",
    "genre": "Comedy",
    "description": "nibh fusce lacus purus aliquet at feugiat non pretium quis"
}, {
    "id": 89,
    "title": "Lake City",
    "genre": "Drama",
    "description": "turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis"
}, {
    "id": 90,
    "title": "Crime After Crime",
    "genre": "Documentary",
    "description": "erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim"
}, {
    "id": 91,
    "title": "Shanghai Dreams (Qing hong)",
    "genre": "Drama",
    "description": "in quam fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer aliquet massa id lobortis"
}, {
    "id": 92,
    "title": "Story of Vernon and Irene Castle, The",
    "genre": "Musical|Romance|War",
    "description": "est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium"
}, {
    "id": 93,
    "title": "The Challenge",
    "genre": "Drama|War",
    "description": "a odio in hac habitasse platea dictumst maecenas ut massa quis"
}, {
    "id": 94,
    "title": "Leila",
    "genre": "Drama|Romance",
    "description": "ligula vehicula consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus"
}, {
    "id": 95,
    "title": "Joyful Noise",
    "genre": "Comedy|Musical",
    "description": "mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus"
}, {
    "id": 96,
    "title": "Source Code",
    "genre": "Action|Drama|Mystery|Sci-Fi|Thriller",
    "description": "non sodales sed tincidunt eu felis fusce posuere felis sed lacus"
}, {
    "id": 97,
    "title": "The Captains",
    "genre": "Documentary|Sci-Fi",
    "description": "nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin"
}, {
    "id": 98,
    "title": "Lana Turner... a Daughter's Memoir",
    "genre": "Documentary",
    "description": "faucibus accumsan odio curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus"
}, {
    "id": 99,
    "title": "Split Second",
    "genre": "Action|Sci-Fi|Thriller",
    "description": "ut suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet"
}, {
    "id": 100,
    "title": "Holy Land, The",
    "genre": "Drama",
    "description": "quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae"
}]

export default movies