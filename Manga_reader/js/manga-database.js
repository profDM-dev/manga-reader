/**
 * Popular Manga Database
 * 
 * Contains 500+ curated manga titles organized by genre
 * Each entry includes: title and primary genre
 * These are searchable via the MangaDex API
 */

const POPULAR_MANGA = {
    action: [
        "One Piece", "Naruto", "Bleach", "Dragon Ball", "Dragon Ball Z",
        "Attack on Titan", "My Hero Academia", "Demon Slayer", "Jujutsu Kaisen",
        "Chainsaw Man", "Hunter x Hunter", "Fullmetal Alchemist", "One Punch Man",
        "Tokyo Ghoul", "Fairy Tail", "Black Clover", "Vinland Saga", "Berserk",
        "Vagabond", "Kingdom", "Hajime no Ippo", "Kengan Ashura", "The Breaker",
        "God of High School", "Tower of God", "Solo Leveling", "The Beginning After The End",
        "Omniscient Reader's Viewpoint", "Second Life Ranker", "Overgeared",
        "Blue Lock", "Haikyuu", "Kuroko's Basketball", "Slam Dunk", "Eyeshield 21",
        "Fire Force", "Soul Eater", "Akame ga Kill", "Claymore", "D.Gray-man",
        "Magi", "Beelzebub", "Toriko", "World Trigger", "Promised Neverland",
        "Dr. Stone", "Assassination Classroom", "Gintama", "Rurouni Kenshin",
        "Yu Yu Hakusho", "Fist of the North Star", "JoJo's Bizarre Adventure",
        "Record of Ragnarok", "Kenichi: The Mightiest Disciple", "Air Gear",
        "Katekyo Hitman Reborn", "Flame of Recca", "Law of Ueki", "GetBackers"
    ],
    
    romance: [
        "Kaguya-sama: Love is War", "Horimiya", "My Dress-Up Darling",
        "Rent-A-Girlfriend", "Quintessential Quintuplets", "Komi Can't Communicate",
        "Tonikawa: Over the Moon for You", "Boarding School Juliet", "Nisekoi",
        "Toradora", "My Little Monster", "Say I Love You", "Orange", "Ao Haru Ride",
        "Kamisama Kiss", "Fruits Basket", "Ouran High School Host Club", "Maid Sama",
        "Skip Beat", "Special A", "Lovely Complex", "Itazura na Kiss", "Nodame Cantabile",
        "Honey and Clover", "Nana", "Paradise Kiss", "Peach Girl", "Mars",
        "The World is Still Beautiful", "Snow White with the Red Hair", "Yona of the Dawn",
        "Akatsuki no Yona", "Soredemo Sekai wa Utsukushii", "Last Game",
        "Ore Monogatari", "ReLife", "ReLIFE", "Wotakoi", "Sweat and Soap",
        "A Sign of Affection", "That Wolf-Boy Is Mine", "Daytime Shooting Star",
        "Love Me, Love Me Not", "Blue Spring Ride", "My Love Story",
        "Monthly Girls' Nozaki-kun", "Yamada-kun and the Seven Witches",
        "Domestic Girlfriend", "Good Ending", "Suzuka", "Fuuka", "A Town Where You Live",
        "Hitman", "I Sold My Life for Ten Thousand Yen per Year"
    ],
    
    comedy: [
        "Grand Blue", "Gintama", "Saiki K", "Nichijou", "Daily Lives of High School Boys",
        "Asobi Asobase", "Hinamatsuri", "The Way of the Househusband", "Spy x Family",
        "Sleepy Princess in the Demon Castle", "One Punch Man", "Mob Psycho 100",
        "Haven't You Heard? I'm Sakamoto", "Beelzebub", "School Rumble", "Sket Dance",
        "Cromartie High School", "Great Teacher Onizuka", "Gokusen", "Ouran High School Host Club",
        "The Devil is a Part-Timer", "KonoSuba", "Combatants Will Be Dispatched",
        "Aho-Girl", "Gabriel DropOut", "Miss Kobayashi's Dragon Maid", "Blend S",
        "Servant x Service", "Working!!", "Dagashi Kashi", "Tanaka-kun is Always Listless",
        "Barakamon", "Silver Spoon", "Sweetness and Lightning", "My Senpai is Annoying",
        "Uzaki-chan Wants to Hang Out", "Teasing Master Takagi-san", "Please Don't Bully Me, Nagatoro",
        "Kaguya-sama: Love is War", "Love is War", "Love After World Domination",
        "100 Girlfriends Who Really Love You", "Pseudo Harem", "Shikimori's Not Just a Cutie"
    ],
    
    fantasy: [
        "Berserk", "Vinland Saga", "Magi", "Fairy Tail", "Seven Deadly Sins",
        "Black Clover", "Re:Zero", "Overlord", "That Time I Got Reincarnated as a Slime",
        "Mushoku Tensei", "Sword Art Online", "Is It Wrong to Pick Up Girls in a Dungeon",
        "Goblin Slayer", "Gate", "The Rising of the Shield Hero", "Arifureta",
        "Solo Leveling", "The Beginning After The End", "Omniscient Reader",
        "Tower of God", "God of High School", "Noblesse", "The Gamer",
        "Dice", "Hardcore Leveling Warrior", "The Legendary Moonlight Sculptor",
        "Dungeon Defense", "Dungeon Reset", "Kill the Hero", "Tomb Raider King",
        "SSS-Class Suicide Hunter", "Overgeared", "Return of the Disaster-Class Hero",
        "I Am the Sorcerer King", "Max Level Returner", "A Returner's Magic Should Be Special",
        "The Tutorial Is Too Hard", "Survival Story of a Sword King",
        "Solo Bug Player", "Mercenary Enrollment", "Legend of the Northern Blade",
        "Nano Machine", "The Great Mage Returns After 4000 Years", "Eleceed",
        "Chronicles of Heavenly Demon", "Volcanic Age", "Peerless Dad"
    ],
    
    psychological: [
        "Death Note", "Monster", "Psycho-Pass", "Parasyte", "Tokyo Ghoul",
        "The Promised Neverland", "Erased", "Another", "Higurashi", "Umineko",
        "Steins;Gate", "Mirai Nikki", "Deadman Wonderland", "Elfen Lied",
        "Liar Game", "Kaiji", "Akagi", "One Outs", "Tomodachi Game",
        "Doubt", "Judge", "Secret", "Ousama Game", "Battle Royale",
        "Alice in Borderland", "Darwin's Game", "Platinum End", "Big Order",
        "Talentless Nana", "Classroom of the Elite", "Kakegurui", "Usogui",
        "Life", "Oyasumi Punpun", "Homunculus", "Aku no Hana", "Inside Mari",
        "Trail of Blood", "Happiness", "Dead Tube", "Bastard", "Sweet Home",
        "Killing Stalking", "Brutal: Confessions of a Homicide Investigator",
        "MPD Psycho", "Heads", "Hideout", "Signal 100", "Jinrou Game"
    ],
    
    horror: [
        "Uzumaki", "Tomie", "Gyo", "Junji Ito Collection", "Dissolving Classroom",
        "Tokyo Ghoul", "Parasyte", "Another", "Higurashi", "Corpse Party",
        "Drifting Classroom", "I Am a Hero", "Doubt", "Judge", "Pumpkin Night",
        "Hideout", "Mieruko-chan", "The Drifting Classroom", "Fuan no Tane",
        "Fuan no Tane Plus", "School Zone", "Killing Stalking", "Bastard",
        "Sweet Home", "Distant Sky", "Dead Days", "Shotgun Boy", "Sweet Home 2",
        "Pigpen", "Shriek", "Garden", "Dead Tube", "Madk", "Brutal",
        "The Promised Neverland", "Angels of Death", "Magical Girl Site",
        "Magical Girl Apocalypse", "King's Game", "Danganronpa", "Corpse Princess",
        "Franken Fran", "Dusk Maiden of Amnesia", "Ghost Hunt", "Tasogare Otome x Amnesia"
    ],
    
    slice_of_life: [
        "March Comes in Like a Lion", "Barakamon", "Silver Spoon", "Sweetness and Lightning",
        "A Silent Voice", "Your Lie in April", "Nodame Cantabile", "Beck",
        "Honey and Clover", "Sangatsu no Lion", "Aria", "Yokohama Kaidashi Kikou",
        "Yotsuba&!", "Non Non Biyori", "K-On!", "Hidamari Sketch", "Lucky Star",
        "Nichijou", "Daily Lives of High School Boys", "Tanaka-kun is Always Listless",
        "Flying Witch", "Amanchu", "Tamayura", "Tamako Market", "Usagi Drop",
        "Poco's Udon World", "March Comes Like a Lion", "My Roomie is a Dino",
        "The Ancient Magus' Bride", "Emma", "Mushishi", "Natsume's Book of Friends",
        "Takagi-san", "Senko-san", "Miss Kobayashi's Dragon Maid", "Gabriel DropOut",
        "Umaru-chan", "New Game!", "Servant x Service", "Working!!", "Blend S",
        "Is the Order a Rabbit?", "Slow Start", "A Place Further Than the Universe",
        "Laid-Back Camp", "Super Cub", "Long Riders", "Encouragement of Climb"
    ],
    
    isekai: [
        "Re:Zero", "Overlord", "That Time I Got Reincarnated as a Slime",
        "Mushoku Tensei", "The Rising of the Shield Hero", "KonoSuba",
        "No Game No Life", "Log Horizon", "Sword Art Online", "Arifureta",
        "In Another World With My Smartphone", "Death March", "How Not to Summon a Demon Lord",
        "The Saga of Tanya the Evil", "Overlord", "Jobless Reincarnation",
        "So I'm a Spider, So What?", "Didn't I Say to Make My Abilities Average",
        "Ascendance of a Bookworm", "By the Grace of the Gods", "Cautious Hero",
        "The 8th Son? Are You Kidding Me?", "Knights & Magic", "Gate",
        "Drifters", "The Devil is a Part-Timer", "The Faraway Paladin",
        "Reincarnated as a Sword", "Skeleton Knight", "Eminence in Shadow",
        "Slime Taoshite 300-nen", "I've Been Killing Slimes for 300 Years",
        "Tsukimichi: Moonlit Fantasy", "World's Finest Assassin", "Banished from the Hero's Party",
        "Parallel World Pharmacy", "Restaurant to Another World", "Campfire Cooking",
        "Farming Life in Another World", "Tensei Shitara Ken Deshita", "Tensei Shitara Slime Datta Ken"
    ],
    
    mecha: [
        "Mobile Suit Gundam", "Gundam Wing", "Gundam SEED", "Gundam 00",
        "Neon Genesis Evangelion", "Code Geass", "Gurren Lagann", "Darling in the FranXX",
        "Full Metal Panic!", "Aldnoah.Zero", "Knights of Sidonia", "Eureka Seven",
        "Escaflowne", "Macross", "Robotech", "Mazinger Z", "Getter Robo",
        "Big O", "RahXephon", "Aquarion", "Heroic Age", "Fafner",
        "Vandread", "Gunbuster", "Diebuster", "Star Driver", "Captain Earth",
        "M3: The Dark Metal", "Buddy Complex", "Valvrave", "Kakumeiki Valvrave",
        "Cross Ange", "Kuromukuro", "ID-0", "Planet With", "SSSS.Gridman",
        "Promare", "Sakugan", "Muv-Luv Alternative", "86", "Back Arrow"
    ],
    
    sports: [
        "Haikyuu", "Kuroko's Basketball", "Slam Dunk", "Blue Lock", "Eyeshield 21",
        "Hajime no Ippo", "Ashita no Joe", "Megalo Box", "Yowamushi Pedal",
        "Initial D", "Over Drive", "Prince of Tennis", "Baby Steps", "Days",
        "Area no Kishi", "Giant Killing", "Ace of Diamond", "Major", "Cross Game",
        "Touch", "H2", "One Outs", "Big Windup", "Battery", "Run with the Wind",
        "Free!", "Tsurune", "Chihayafuru", "Ballroom e Youkoso", "Welcome to the Ballroom",
        "Ping Pong", "Hinomaru Sumo", "All Out!!", "Number24", "Try Knights",
        "Burning Kabaddi", "Hanebado", "Harukana Receive", "Girls und Panzer",
        "Uma Musume", "Keijo", "Green Green Greens", "Capeta", "Overdrive"
    ],
    
    mystery: [
        "Death Note", "Monster", "Detective Conan", "Kindaichi Case Files",
        "Erased", "The Promised Neverland", "Another", "Hyouka", "Gosick",
        "Beautiful Bones", "UN-GO", "Dantalian no Shoka", "Kamisama no Memochou",
        "Bungou Stray Dogs", "Moriarty the Patriot", "Yuukoku no Moriarty",
        "Vatican Miracle Examiner", "ID: Invaded", "Sakurako-san no Ashimoto",
        "Q.E.D.", "C.M.B.", "Spiral", "Psychic Detective Yakumo", "Ghost Hunt",
        "Dusk Maiden of Amnesia", "Tasogare Otome x Amnesia", "Monogatari Series",
        "Bakemonogatari", "Kubikiri Cycle", "Zaregoto Series", "Baccano",
        "Durarara", "Odd Taxi", "Great Pretender", "Occultic Nine"
    ],
    
    supernatural: [
        "Bleach", "Naruto", "Noragami", "Blue Exorcist", "D.Gray-man",
        "Soul Eater", "Jujutsu Kaisen", "Chainsaw Man", "Demon Slayer",
        "Mob Psycho 100", "The Disastrous Life of Saiki K", "Natsume's Book of Friends",
        "Toilet-Bound Hanako-kun", "The Ancient Magus' Bride", "Mahoutsukai no Yome",
        "Mushishi", "Mononoke", "Kekkaishi", "Nurarihyon no Mago", "Nura: Rise of the Yokai Clan",
        "xxxHolic", "Tsubasa Reservoir Chronicle", "Hell Girl", "Ghost Hunt",
        "Dusk Maiden of Amnesia", "Monogatari Series", "Beyond the Boundary",
        "Charlotte", "Angel Beats", "Clannad", "Air", "Kanon", "Little Busters",
        "Rewrite", "Summer Pockets", "Seraph of the End", "Owari no Seraph",
        "Tokyo Ravens", "Shakugan no Shana", "A Certain Magical Index",
        "A Certain Scientific Railgun", "Toaru Majutsu no Index"
    ],
    
    sci_fi: [
        "Steins;Gate", "Psycho-Pass", "Ghost in the Shell", "Akira", "Cowboy Bebop",
        "Trigun", "Space Dandy", "Planetes", "Knights of Sidonia", "Blame!",
        "Biomega", "Abara", "Neon Genesis Evangelion", "Serial Experiments Lain",
        "Ergo Proxy", "Texhnolyze", "Parasyte", "Gantz", "Inuyashiki",
        "Pluto", "20th Century Boys", "Monster", "Billy Bat", "World Trigger",
        "Gargantia", "Suisei no Gargantia", "Aldnoah.Zero", "ID-0", "Dimension W",
        "Concrete Revolutio", "Chaos;Head", "Chaos;Child", "Robotics;Notes",
        "Occultic;Nine", "Anonymous;Code", "Vivy", "Eighty-Six", "86",
        "Beatless", "Astra Lost in Space", "Kanata no Astra", "Dr. Stone"
    ],
    
    historical: [
        "Vinland Saga", "Kingdom", "Vagabond", "Rurouni Kenshin", "Blade of the Immortal",
        "Berserk", "Sengoku Basara", "Samurai Champloo", "Drifters", "Nobunaga Concerto",
        "The Heroic Legend of Arslan", "Yona of the Dawn", "Akatsuki no Yona",
        "The Story of Saiunkoku", "Fushigi Yuugi", "Twelve Kingdoms", "Juuni Kokuki",
        "Moribito", "Emma", "Otoyomegatari", "A Bride's Story", "Shoukoku no Altair",
        "Altair: A Record of Battles", "Arslan Senki", "Historie", "Jin",
        "Innocent", "Innocent Rouge", "Rose of Versailles", "Lady Oscar",
        "Requiem of the Rose King", "Baraou no Souretsu", "Golden Kamuy",
        "Angolmois", "Basilisk", "Dororo", "Hyouge Mono", "Nobunaga no Chef"
    ],
    
    drama: [
        "Your Lie in April", "A Silent Voice", "March Comes in Like a Lion",
        "Orange", "Anohana", "Clannad", "Angel Beats", "Plastic Memories",
        "SukaSuka", "Violet Evergarden", "Banana Fish", "Monster", "Rainbow",
        "Erased", "ReLife", "Welcome to the NHK", "Colorful", "5 Centimeters per Second",
        "The Garden of Words", "Children Who Chase Lost Voices", "Your Name",
        "Weathering with You", "I Want to Eat Your Pancreas", "Maquia",
        "A Whisker Away", "Josee, the Tiger and the Fish", "Ride Your Wave",
        "The Anthem of the Heart", "Fireworks", "Wolf Children", "The Boy and the Beast",
        "The Girl Who Leapt Through Time", "Summer Wars", "Belle", "Bubble",
        "Words Bubble Up Like Soda Pop", "Penguin Highway", "Night Is Short, Walk On Girl"
    ],
    
    school: [
        "My Hero Academia", "Assassination Classroom", "Classroom of the Elite",
        "Kaguya-sama: Love is War", "Toradora", "My Teen Romantic Comedy SNAFU",
        "The Melancholy of Haruhi Suzumiya", "Hyouka", "Daily Lives of High School Boys",
        "Nichijou", "School Rumble", "Yamada-kun and the Seven Witches", "Charlotte",
        "Angel Beats", "Little Busters", "Clannad", "K-On!", "Sound Euphonium",
        "Your Lie in April", "A Silent Voice", "March Comes in Like a Lion",
        "Haikyuu", "Kuroko's Basketball", "Blue Lock", "Komi Can't Communicate",
        "Horimiya", "My Dress-Up Darling", "Teasing Master Takagi-san", "Uzaki-chan",
        "Nagatoro", "Rent-A-Girlfriend", "Quintessential Quintuplets", "Nisekoi",
        "We Never Learn", "Love Lab", "Asobi Asobase", "Grand Blue",
        "Prison School", "Great Teacher Onizuka", "Gokusen", "Cromartie High School"
    ]
};

/**
 * Get all manga titles as a flat array
 */
function getAllMangaTitles() {
    const allTitles = [];
    for (const genre in POPULAR_MANGA) {
        allTitles.push(...POPULAR_MANGA[genre]);
    }
    // Remove duplicates
    return [...new Set(allTitles)];
}

/**
 * Get manga by genre
 */
function getMangaByGenre(genre) {
    return POPULAR_MANGA[genre] || [];
}

/**
 * Get all available genres
 */
function getAllGenres() {
    return Object.keys(POPULAR_MANGA);
}

/**
 * Get random manga titles
 */
function getRandomManga(count = 10) {
    const allTitles = getAllMangaTitles();
    const shuffled = allTitles.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

/**
 * Search manga titles (client-side)
 */
function searchMangaTitles(query) {
    const allTitles = getAllMangaTitles();
    const lowerQuery = query.toLowerCase();
    return allTitles.filter(title => 
        title.toLowerCase().includes(lowerQuery)
    );
}

// Export for use in other files
window.MangaDatabase = {
    getAllMangaTitles,
    getMangaByGenre,
    getAllGenres,
    getRandomManga,
    searchMangaTitles,
    POPULAR_MANGA
};
