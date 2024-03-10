const user_accounts = [
    {
        "name": "Rick Sanchez",
        "username": "rick_sanchez_00", "password": "rs00",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/1JJgL0I97eeFZPaZqJvtSb/48b8c2ca777a324dc606e651f255472c/rick-sanchez.png",
        "description": "Genius, scientist, interdimensional explorer. Wubba lubba dub dub!",

        "is_business": false,

        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a851fd",
            "65dd8ae7bb0f9ad533a85202",
            "65dd8ae7bb0f9ad533a85207",
            "65dd8ae7bb0f9ad533a8520c",
            "65dd8ae7bb0f9ad533a85211"
        ]
    },
    {
        "name": "Morty Smith",
        "username": "morty_smith_01", "password": "ms01",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/1bDMXyx9BSJjx9fOMiaxmM/3cb01a13dddab23fadb4a5a787b26cdb/morty-smith.png",
        "description": "Just your average high school kid... dragged into insane adventures across the multiverse by his grandpa. Oh jeez!",

        "is_business": true, "restaurant_owned": "65dd60496a83dc5af0833992",

        "review_count": 0, "reviews": [],
        "comment_count": 0, "comments": []
    },
    {
        "name": "Muscle Man",
        "username": "muscle_man_02", "password": "mm02",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/3HzWioSnxUM1rWzjKRMFuD/a8e85a186b27d51f4209a087abc4da62/muscle-man.png",
        "description": "Muscle Man here, living the dream at a park. Bro-ing out and making sure to keep it swole. MY MOM!",

        "is_business": false,

        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a851fe",
            "65dd8ae7bb0f9ad533a85203",
            "65dd8ae7bb0f9ad533a85208",
            "65dd8ae7bb0f9ad533a8520d",
            "65dd8ae7bb0f9ad533a85212"
        ]
    },
    {
        "name": "Pops Maellard",
        "username": "pops_maellard_03", "password": "pm03",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/3f6tOaTm82exI1XAFpBVxG/0d265310b4eaa0a42041c5e6baa0f2b8/pops-maellard.png",
        "description": "Greetings, friends! I'm Pops, the eternally optimistic and somewhat naive owner of a park. Cheers to friendship and good vibes!",

        "is_business": true, "restaurant_owned": "65dd60496a83dc5af0833994",

        "review_count": 0, "reviews": [],
        "comment_count": 0, "comments": []
    },
    {
        "name": "Ice King",
        "username": "ice_king_04", "password": "ik04",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/5VmlzV0mzQ6bsqTEGVFZ3M/362a348a672b760b9dde9df118e88be8/ice-king.png",
        "description": "Emotionally complex wizard seeking princess bride (or any kind of companionship, really). Obsessed with ice and penguins.",

        "is_business": false,

        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a851ff",
            "65dd8ae7bb0f9ad533a85204",
            "65dd8ae7bb0f9ad533a85209",
            "65dd8ae7bb0f9ad533a8520e",
            "65dd8ae7bb0f9ad533a85213"
        ]
    },
    {
        "name": "Peppermint Butler",
        "username": "peppermint_butler_05", "password": "pb05",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/57H13hniuAPbHo1MSzlChz/50beb9e7e35d314d86c3a823381ae6c4/peppermint-butler.png",
        "description": "Mysterious butler with a sweet tooth and a dark side. Serving up magic and mischief at the Candy Kingdom.",

        "is_business": true, "restaurant_owned": "65dd60496a83dc5af0833990",

        "review_count": 0, "reviews": [],
        "comment_count": 0, "comments": []
    },
    {
        "name": "Bojack Horseman",
        "username": "bojack_horseman_06", "password": "bh06",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/6yC2EBYyllLpXnVaJsCHRd/0a5a2586b33ceccb4e3b8171740dc6f0/bojack-horseman.png",
        "description": "Washed-up actor, struggling with life, love, and the meaning of it all. Trying to find redemption, or at least a decent drink.",

        "is_business": false,

        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a85200",
            "65dd8ae7bb0f9ad533a85205",
            "65dd8ae7bb0f9ad533a8520a",
            "65dd8ae7bb0f9ad533a8520f",
            "65dd8ae7bb0f9ad533a85214"
        ]
    },
    {
        "name": "Todd Chavez",
        "username": "todd_chavez_07", "password": "tc07",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/1s8mqA57sIaBbYBxMpVmh0/130599e131bd1b970dfab509c6edc288/todd-chavez.png",
        "description": "Free-spirited slacker with a heart of gold. Always stumbling into bizarre schemes and accidentally changing the world.",

        "is_business": true, "restaurant_owned": "65dd60496a83dc5af0833993",

        "review_count": 0, "reviews": [],
        "comment_count": 0, "comments": []
    },
    {
        "name": "Homer Simpson",
        "username": "homer_simpson_08", "password": "hs08",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/3cZGQrUkWwTc10pR5EAnU/97d0b500fa74e11ca074abd48eba0da3/homer-simpson.png",
        "description": "D'oh! Just your average guy with a love for donuts, beer, and... did I mention donuts?",

        "is_business": false,

        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a85201",
            "65dd8ae7bb0f9ad533a85206",
            "65dd8ae7bb0f9ad533a8520b",
            "65dd8ae7bb0f9ad533a85210",
            "65dd8ae7bb0f9ad533a85215"
        ]
    },
    {
        "name": "Ned Flanders",
        "username": "ned_flanders_09", "password": "nf09",
        "avatar_url": "https://images.ctfassets.net/pof3zafcks92/183JqcQzNtYVfvgv5RMiSL/8ed6c8ed9b594ad4f7c5b555ab569207/ned-flanders.png",
        "description": "Howdily-doodily, neighborinos! Just a friendly churchgoer and devoted family man spreading love and cheer to everyone!",

        "is_business": true, "restaurant_owned": "65dd60496a83dc5af0833991",

        "review_count": 0, "reviews": [],
        "comment_count": 0, "comments": []
    }
]

const restaurants = [
    {
        "name": "McDonald's",
        "description": "A global fast-food chain known for its burgers, fries, and other classic American comfort foods, McDonald's is a popular destination for quick and convenient meals, offering a diverse menu of breakfast, lunch, and dinner options.",
        "address": "2399 Taft Ave, Malate, Manila, 1004 Metro Manila",
        "phone": "(02) 8888 6236",
        "hours": [
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
        ],
        "cover_url": "https://images.ctfassets.net/pof3zafcks92/7wwCllZbjKLrl6m8l4S6iv/50113474839dc1d5b923e03e03c03454/mcdo.png",

        "review_average": 3.6,
        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a851fd",
            "65dd8ae7bb0f9ad533a851fe",
            "65dd8ae7bb0f9ad533a851ff",
            "65dd8ae7bb0f9ad533a85200",
            "65dd8ae7bb0f9ad533a85201"
        ],

        "owner_id": "65dd7b85bb0f9ad533a851f8"
    },
    {
        "name": "Zark's Burgers",
        "description": "A burger haven, Zark's Burgers boasts towering creations packed with bold flavors and premium ingredients, satisfying every burger lover's cravings.",
        "address": "2464 Taft Ave, Malate, Manila, 1000 Metro Manila",
        "phone": "(02) 3392 1211",
        "hours": [
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
            ["10:00", "22:00"],
        ],
        "cover_url": "https://images.ctfassets.net/pof3zafcks92/101xkxjIFLwek5fQvZsyLx/b3552078037e1a4c5ff4ecf80076aebe/zarks.png",

        "review_average": 3.6,
        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a85202",
            "65dd8ae7bb0f9ad533a85203",
            "65dd8ae7bb0f9ad533a85204",
            "65dd8ae7bb0f9ad533a85205",
            "65dd8ae7bb0f9ad533a85206"
        ],

        "owner_id": "65dd7b85bb0f9ad533a851fc"
    },
    {
        "name": "Army Navy",
        "description": "At Army Navy, enjoy hearty burgers and Mexican-inspired dishes made with fresh, flavorful ingredients, igniting your taste buds for a culinary adventure like no other.",
        "address": "Burgundy Transpacific Place, Unit G-6, No. 2456 Taft Ave, Malate, Manila, 1004",
        "phone": "(02) 8526 5252",
        "hours": [
            ["07:30", "04:30"],
            ["07:30", "04:30"],
            ["07:30", "04:30"],
            ["07:30", "04:30"],
            ["07:30", "04:30"],
            ["07:30", "04:30"],
            ["07:30", "04:30"],
        ],
        "cover_url": "https://images.ctfassets.net/pof3zafcks92/7dMfmt1KgFOJ55jzYCZKSo/1bc1ed277506c1e12813fe99106bc99c/army-navy.png",

        "review_average": 3.6,
        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a85207",
            "65dd8ae7bb0f9ad533a85208",
            "65dd8ae7bb0f9ad533a85209",
            "65dd8ae7bb0f9ad533a8520a",
            "65dd8ae7bb0f9ad533a8520b"
        ],

        "owner_id": "65dd7b85bb0f9ad533a851f4"
    },
    {
        "name": "Pepper Lunch",
        "description": "Pepper Lunch offers interactive dining with sizzling hot plates cooking customized meals before your eyes, featuring high-quality meats, seafood, and veggies for a Japanese-inspired culinary experience.",
        "address": "R Square Mall, Taft Ave. cor. Pablo Ocampo St 5F-6F 5F, Malate, Manila, 1004, Malate, Manila, 1004 Metro Manila",
        "phone": "",
        "hours": [
            ["11:00", "21:00"],
            ["11:00", "21:00"],
            ["11:00", "21:00"],
            ["11:00", "21:00"],
            ["11:00", "21:00"],
            ["11:00", "21:00"],
            ["11:00", "21:00"],
        ],
        "cover_url": "https://images.ctfassets.net/pof3zafcks92/5kDR3WlNo1jYkZ5akkuxnH/2760916d409131fcbe0c64babb0880b1/pepper-lunch.png",

        "review_average": 3.6,
        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a8520c",
            "65dd8ae7bb0f9ad533a8520d",
            "65dd8ae7bb0f9ad533a8520e",
            "65dd8ae7bb0f9ad533a8520f",
            "65dd8ae7bb0f9ad533a85210"
        ],

        "owner_id": "65dd7b85bb0f9ad533a851fa"
    },
    {
        "name": "Jollibee",
        "description": "At Jollibee, savor the taste of joy with their iconic Chickenjoy, juicy burgers, and delectable Filipino-inspired dishes, crafted with a blend of savory flavors that'll leave you craving for more, bringing smiles to every bite.",
        "address": "2284 Taft Ave, Malate, Manila, 1004 Metro Manila",
        "phone": "(02) 8241 0973",
        "hours": [
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
            "Open 24 hours",
        ],
        "cover_url": "https://images.ctfassets.net/pof3zafcks92/1zeyTml68Tn0u9fhOr6qoL/06bb9ccff8ba7e80d10e122a1ceb5186/jollibee.png",

        "review_average": 3.6,
        "review_count": 5, "reviews": [
            "65dd8ae7bb0f9ad533a85211",
            "65dd8ae7bb0f9ad533a85212",
            "65dd8ae7bb0f9ad533a85213",
            "65dd8ae7bb0f9ad533a85214",
            "65dd8ae7bb0f9ad533a85215"
        ],

        "owner_id": "65dd7b85bb0f9ad533a851f6"
    },
]

const reviews = [
    {
        "user_id": "65dd7b85bb0f9ad533a851f3",
        "restaurant_id": "65dd60496a83dc5af0833990",

        "rating": 4,
        "date": "2024-02-27",
        "review_title": "Great Fast Food Experience",
        "review_body": "McDonald's never disappoints! Quick service, tasty food, and convenient locations. Always a go-to for a satisfying meal on the go.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": "65e9c996171ab09da487e225"
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f5",
        "restaurant_id": "65dd60496a83dc5af0833990",

        "rating": 3,
        "date": "2024-02-27",
        "review_title": "Average Experience",
        "review_body": "McDonald's is okay, but nothing extraordinary. Food quality is consistent, but sometimes service can be slow during peak hours.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f7",
        "restaurant_id": "65dd60496a83dc5af0833990",

        "rating": 5,
        "date": "2024-02-27",
        "review_title": "Always Dependable",
        "review_body": "I love McDonald's! Delicious burgers, crispy fries, and friendly staff. It's my favorite place to grab a quick meal with friends.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f9",
        "restaurant_id": "65dd60496a83dc5af0833990",

        "rating": 2,
        "date": "2024-02-27",
        "review_title": "Disappointing Experience",
        "review_body": "McDonald's let me down this time. Food was cold, and the order was incorrect. Service was slow, and the staff seemed indifferent.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851fb",
        "restaurant_id": "65dd60496a83dc5af0833990",

        "rating": 4,
        "date": "2024-02-27",
        "review_title": "Consistently Good",
        "review_body": "McDonald's is my reliable choice for a quick bite. The food is always fresh, and the prices are reasonable. Never had a bad experience here.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },

    {
        "user_id": "65dd7b85bb0f9ad533a851f3",
        "restaurant_id": "65dd60496a83dc5af0833991",

        "rating": 5,
        "date": "2024-02-26",
        "review_title": "Best Burgers Ever!",
        "review_body": "Zark's Burgers never disappoints! Juicy patties, delicious toppings, and generous portions. Always worth the visit.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": "65e9c996171ab09da487e226"
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f5",
        "restaurant_id": "65dd60496a83dc5af0833991",

        "rating": 4,
        "date": "2024-02-26",
        "review_title": "Great Selection, Tasty Burgers",
        "review_body": "Zark's Burgers offers a wide variety of burger options to choose from. The burgers are always cooked perfectly and packed with flavor.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f7",
        "restaurant_id": "65dd60496a83dc5af0833991",

        "rating": 3,
        "date": "2024-02-26",
        "review_title": "Decent Burgers, Slow Service",
        "review_body": "While the burgers at Zark's are tasty, the service can be quite slow during peak hours. It's worth the wait if you have the time.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f9",
        "restaurant_id": "65dd60496a83dc5af0833991",

        "rating": 2,
        "date": "2024-02-26",
        "review_title": "Disappointing Experience",
        "review_body": "My recent visit to Zark's was disappointing. The burger was overcooked, and the fries were soggy. Not worth the price.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851fb",
        "restaurant_id": "65dd60496a83dc5af0833991",

        "rating": 4,
        "date": "2024-02-26",
        "review_title": "Good Burgers, Casual Atmosphere",
        "review_body": "Zark's Burgers offers a casual dining experience with delicious burgers. Perfect for a quick meal with friends or family.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },

    {
        "user_id": "65dd7b85bb0f9ad533a851f3",
        "restaurant_id": "65dd60496a83dc5af0833992",

        "rating": 4,
        "date": "2024-02-25",
        "review_title": "Great Burritos!",
        "review_body": "Army Navy serves up some delicious burritos! Fresh ingredients and bold flavors make each bite enjoyable. Definitely recommend!",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": "65e9c996171ab09da487e227"
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f5",
        "restaurant_id": "65dd60496a83dc5af0833992",

        "rating": 3,
        "date": "2024-02-25",
        "review_title": "Decent Food, Slow Service",
        "review_body": "The food at Army Navy is decent, but the service can be quite slow, especially during busy times. It's best to go when it's not too crowded.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f7",
        "restaurant_id": "65dd60496a83dc5af0833992",

        "rating": 5,
        "date": "2024-02-25",
        "review_title": "Love Their Tacos!",
        "review_body": "Army Navy's tacos are fantastic! Generous portions, flavorful fillings, and a variety of options to choose from. Always a satisfying meal.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f9",
        "restaurant_id": "65dd60496a83dc5af0833992",

        "rating": 2,
        "date": "2024-02-25",
        "review_title": "Disappointing Experience",
        "review_body": "Had a disappointing experience at Army Navy. The food was bland, and the portions were smaller than expected. Not worth the price.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851fb",
        "restaurant_id": "65dd60496a83dc5af0833992",

        "rating": 4,
        "date": "2024-02-25",
        "review_title": "Good Burgers, Casual Atmosphere",
        "review_body": "Army Navy offers tasty burgers in a casual atmosphere. It's a great place to grab a quick bite with friends or family.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },

    {
        "user_id": "65dd7b85bb0f9ad533a851f3",
        "restaurant_id": "65dd60496a83dc5af0833993",

        "rating": 5,
        "date": "2024-02-24",
        "review_title": "Amazing Food Experience",
        "review_body": "Pepper Lunch never disappoints! The sizzling plates are always flavorful, and the DIY concept adds a fun twist to the dining experience.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": "65e9c996171ab09da487e228"
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f5",
        "restaurant_id": "65dd60496a83dc5af0833993",

        "rating": 4,
        "date": "2024-02-24",
        "review_title": "Delicious and Fun",
        "review_body": "Pepper Lunch offers delicious meals cooked right in front of you! It's a fun and interactive dining experience that I always enjoy.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f7",
        "restaurant_id": "65dd60496a83dc5af0833993",

        "rating": 3,
        "date": "2024-02-24",
        "review_title": "Decent Food, Slow Service",
        "review_body": "The food at Pepper Lunch is decent, but the service can be quite slow during peak hours. It's best to go when it's not too crowded.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f9",
        "restaurant_id": "65dd60496a83dc5af0833993",

        "rating": 2,
        "date": "2024-02-24",
        "review_title": "Disappointing Experience",
        "review_body": "Had a disappointing experience at Pepper Lunch. The food was bland, and the service was poor. Not worth the price.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851fb",
        "restaurant_id": "65dd60496a83dc5af0833993",

        "rating": 4,
        "date": "2024-02-24",
        "review_title": "Fun Dining Experience",
        "review_body": "Pepper Lunch offers a unique dining experience with sizzling plates and customizable meals. It's always a fun time with friends!",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },

    {
        "user_id": "65dd7b85bb0f9ad533a851f3",
        "restaurant_id": "65dd60496a83dc5af0833994",

        "rating": 5,
        "date": "2024-02-23",
        "review_title": "Delicious Chickenjoy!",
        "review_body": "Jollibee's Chickenjoy never fails to satisfy! Crispy on the outside, juicy on the inside, and always full of flavor. Love it!",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": "65e9c996171ab09da487e229"
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f5",
        "restaurant_id": "65dd60496a83dc5af0833994",

        "rating": 4,
        "date": "2024-02-23",
        "review_title": "Great Value Meals",
        "review_body": "Jollibee offers great value meals that are perfect for satisfying hunger on a budget. The taste is always consistent and delicious.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f7",
        "restaurant_id": "65dd60496a83dc5af0833994",

        "rating": 3,
        "date": "2024-02-23",
        "review_title": "Decent Food, Long Lines",
        "review_body": "The food at Jollibee is decent, but the long lines can be frustrating, especially during peak hours. It's best to go during off-peak times.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851f9",
        "restaurant_id": "65dd60496a83dc5af0833994",

        "rating": 2,
        "date": "2024-02-23",
        "review_title": "Disappointing Service",
        "review_body": "Had a disappointing experience at Jollibee. The service was slow, and the staff seemed disorganized. Food was also cold upon arrival.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    },
    {
        "user_id": "65dd7b85bb0f9ad533a851fb",
        "restaurant_id": "65dd60496a83dc5af0833994",

        "rating": 4,
        "date": "2024-02-23",
        "review_title": "Childhood Favorite",
        "review_body": "Jollibee has been my childhood favorite, and it still holds up! Their signature dishes bring back fond memories and never disappoint.",
        "review_media_url": [],

        "likes_count": 0,
        "likes": [],
        "dislikes_count": 0,
        "dislikes": [],

        "owners_comments": ""
    }
]

const comments = [
    { // Owner of McDonald's
        "user_id": "65dd7b85bb0f9ad533a851f8",
        "review_id": "65dd8ae7bb0f9ad533a851fd",

        "date": "2024-02-28",
        "comment_body": "Thank you for your glowing review! At McDonald's, we're dedicated to providing quick service, delicious food, and convenient locations for our valued customers like you. We're thrilled to be your go-to choice for a satisfying meal on the go. Looking forward to serving you again soon!"
    },
    { // Owner of Zark's Burgers
        "user_id": "65dd7b85bb0f9ad533a851fc",
        "review_id": "65dd8ae7bb0f9ad533a85202",

        "date": "2024-02-27",
        "comment_body": "Thank you for the wonderful feedback! We're delighted that you think we serve the best burgers ever at Zark's Burgers. Juicy patties, delicious toppings, and generous portions are our specialties. We can't wait to see you again for another mouthwatering meal!"
    },
    { // Owner of Army Navy
        "user_id": "65dd7b85bb0f9ad533a851f4",
        "review_id": "65dd8ae7bb0f9ad533a85207",

        "date": "2024-02-26",
        "comment_body": "Thank you for the kind words! We're thrilled to hear that you enjoyed our burritos. We take pride in using fresh ingredients to create bold and flavorful dishes. Looking forward to serving you again soon!"
    },
    { // Owner of Pepper Lunch
        "user_id": "65dd7b85bb0f9ad533a851fa",
        "review_id": "65dd8ae7bb0f9ad533a8520c",

        "date": "2024-02-25",
        "comment_body": "Thank you for your amazing review! We're thrilled that you enjoyed your dining experience at Pepper Lunch. Our sizzling plates and DIY concept are indeed what sets us apart. Can't wait to welcome you back for more flavorful adventures!"
    },
    { // Owner of Jollibee
        "user_id": "65dd7b85bb0f9ad533a851f6",
        "review_id": "65dd8ae7bb0f9ad533a85211",

        "date": "2024-02-24",
        "comment_body": "Thank you for your kind words! We're thrilled to hear that you enjoyed our Chickenjoy. Looking forward to serving you again soon!"
    }
]

module.exports = {
    user_accounts,
    restaurants,
    reviews,
    comments
};