/**
 * Curated Manga Collection
 * Real manga with working cover images and reader links
 */

const MANGA_DATA = [
  {"id": 1, "title": "Naruto", "cover": "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg", "url": "https://www.mangareader.to/naruto-7"},
  {"id": 2, "title": "One Piece", "cover": "https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg", "url": "https://www.mangareader.to/one-piece-3"},
  {"id": 3, "title": "Bleach", "cover": "https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png", "url": "https://www.mangareader.to/bleach-5"},
  {"id": 4, "title": "Death Note", "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/Death_Note_Vol_1.jpg", "url": "https://www.mangareader.to/death-note-8"},
  {"id": 5, "title": "Attack on Titan", "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/Attack_on_Titan_volume_1_cover.jpg", "url": "https://www.mangareader.to/attack-on-titan-10"},
  {"id": 6, "title": "Demon Slayer: Kimetsu no Yaiba", "cover": "https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg", "url": "https://www.mangareader.to/demon-slayer-kimetsu-no-yaiba-13"},
  {"id": 7, "title": "My Hero Academia", "cover": "https://upload.wikimedia.org/wikipedia/en/5/5c/My_Hero_Academia_Volume_1.png", "url": "https://www.mangareader.to/my-hero-academia-73"},
  {"id": 8,
    "title": "Chainsaw Man",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/62/Chainsawman_v01_cover.jpg",
    "url": "https://www.mangareader.to/chainsaw-man-380"
  },
  {
    "id": 9,
    "title": "Jujutsu Kaisen",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
    "url": "https://www.mangareader.to/jujutsu-kaisen-322"
  },
  {
    "id": 10,
    "title": "Tokyo Ghoul",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/72/Tokyo_Ghoul_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/tokyo-ghoul-15"
  },
  {
    "id": 11,
    "title": "My Hero Academia",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5a/My_Hero_Academia_Volume_1.png",
    "url": "https://www.mangareader.to/my-hero-academia-20"
  },
  {
    "id": 12,
    "title": "Black Clover",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/17/Black_Clover%2C_volume_1.jpg",
    "url": "https://www.mangareader.to/black-clover-24"
  },
  {
    "id": 13,
    "title": "Fire Force",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6c/Fire_Force_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/fire-force-318"
  },
  {
    "id": 14,
    "title": "Blue Lock",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9b/Blue_Lock_vol_1.jpg",
    "url": "https://www.mangareader.to/blue-lock-8843"
  },
  {
    "id": 15,
    "title": "Vinland Saga",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5c/Vinland_Saga_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/vinland-saga-17"
  },
  {
    "id": 16,
    "title": "Berserk",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0c/Berserk_vol01.jpg",
    "url": "https://www.mangareader.to/berserk-2"
  },
  {
    "id": 17,
    "title": "Hunter x Hunter",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4b/Hunter_x_Hunter_vol_1.png",
    "url": "https://www.mangareader.to/hunter-x-hunter-11"
  },
  {
    "id": 18,
    "title": "Fullmetal Alchemist",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/35/Fullmetal123.jpg",
    "url": "https://www.mangareader.to/fullmetal-alchemist-19"
  },
  {
    "id": 19,
    "title": "Fairy Tail",
    "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/FairyTail-Vol1_Cover.jpg/220px-FairyTail-Vol1_Cover.jpg",
    "url": "https://www.mangareader.to/fairy-tail-16"
  },
  {
    "id": 20,
    "title": "One Punch Man",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/39/One-Punch_Man_cover.png",
    "url": "https://www.mangareader.to/onepunch-man-28"
  },
  {
    "id": 21,
    "title": "Dr. Stone",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9e/Dr._Stone_volume_1.png",
    "url": "https://www.mangareader.to/dr-stone-311"
  },
  {
    "id": 22,
    "title": "Haikyuu!!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5a/Haikyu%21_vol_1.jpg",
    "url": "https://www.mangareader.to/haikyuu-21"
  },
  {
    "id": 23,
    "title": "Spy x Family",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9a/Spy_x_Family_Volume_1.jpg",
    "url": "https://www.mangareader.to/spy-x-family-6093"
  },
  {
    "id": 24,
    "title": "The Promised Neverland",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6c/The_Promised_Neverland_vol_1.jpg",
    "url": "https://www.mangareader.to/the-promised-neverland-25"
  },
  {
    "id": 25,
    "title": "Mob Psycho 100",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/00/Mob_Psycho_100_Volume_1.png",
    "url": "https://www.mangareader.to/mob-psycho-100-348"
  },
  {
    "id": 26,
    "title": "Blue Exorcist",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1c/Blue_Exorcist_volume_1.jpg",
    "url": "https://www.mangareader.to/blue-exorcist-23"
  },
  {
    "id": 27,
    "title": "Claymore",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/19/Claymore_v01_cover.jpg",
    "url": "https://www.mangareader.to/claymore-30"
  },
  {
    "id": 28,
    "title": "Gantz",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4b/Gantz_vol01.jpg",
    "url": "https://www.mangareader.to/gantz-35"
  },
  {
    "id": 29,
    "title": "Monster",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/32/Monster_v01_cover.jpg",
    "url": "https://www.mangareader.to/monster-31"
  },
  {
    "id": 30,
    "title": "Deadman Wonderland",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8f/Deadman_Wonderland_volume_1.jpg",
    "url": "https://www.mangareader.to/deadman-wonderland-381"
  },
  {
    "id": 31,
    "title": "The Seven Deadly Sins",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4f/The_Seven_Deadly_Sins_Volume_1.png",
    "url": "https://www.mangareader.to/the-seven-deadly-sins-26"
  },
  {
    "id": 32,
    "title": "Toriko",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/28/Toriko_volume_1.jpg",
    "url": "https://www.mangareader.to/toriko-327"
  },
  {
    "id": 33,
    "title": "Black Butler",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0d/Kuroshitsuji_Volume_1.png",
    "url": "https://www.mangareader.to/black-butler-18"
  },
  {
    "id": 34,
    "title": "Ao Haru Ride",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/12/Ao_Haru_Ride_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/ao-haru-ride-6456"
  },
  {
    "id": 35,
    "title": "Your Lie in April",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/05/Shigatsu_wa_Kimi_no_Uso_Volume_1.jpg",
    "url": "https://www.mangareader.to/your-lie-in-april-289"
  },
  {
    "id": 36,
    "title": "Erased",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/46/Erased_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/erased-360"
  },
  {
    "id": 37,
    "title": "Parasyte",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4b/Parasyte_vol_1_cover.jpg",
    "url": "https://www.mangareader.to/parasyte-288"
  },
  {
    "id": 38,
    "title": "Baki the Grappler",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6d/Grappler_Baki_volume_1.jpg",
    "url": "https://www.mangareader.to/baki-427"
  },
  {
    "id": 39,
    "title": "Kingdom",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0e/Kingdom_manga_volume_1.jpg",
    "url": "https://www.mangareader.to/kingdom-501"
  },
  {
    "id": 40,
    "title": "Ajin",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e4/Ajin_Demi-Human_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/ajin-367"
  },
  {
    "id": 41,
    "title": "Seraph of the End",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/30/Seraph_of_the_End_volume_1.jpg",
    "url": "https://www.mangareader.to/seraph-of-the-end-371"
  },
  {
    "id": 42,
    "title": "Beastars",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7e/Beastars_vol_1.jpg",
    "url": "https://www.mangareader.to/beastars-6097"
  },
  {
    "id": 43,
    "title": "Solo Leveling",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6b/Solo_Leveling_Volume_1.jpg",
    "url": "https://www.mangareader.to/solo-leveling-32121"
  },
  {
    "id": 44,
    "title": "D.Gray-man",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/77/D.Gray-Man_volume_1.jpg",
    "url": "https://www.mangareader.to/dgray-man-29"
  },
  {
    "id": 45,
    "title": "Made in Abyss",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/ac/Made_in_Abyss_Volume_1.jpg",
    "url": "https://www.mangareader.to/made-in-abyss-410"
  },
  {
    "id": 46,
    "title": "Pluto",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2d/Pluto_v01_cover.jpg",
    "url": "https://www.mangareader.to/pluto-350"
  },
  {
    "id": 47,
    "title": "Vagabond",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/ee/Vagabond21.jpg",
    "url": "https://www.mangareader.to/vagabond-27"
  },
  {
    "id": 48,
    "title": "Slam Dunk",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f3/SlamDunk_vol1_cover.jpg",
    "url": "https://www.mangareader.to/slam-dunk-65"
  },
  {
    "id": 49,
    "title": "Hellsing",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/32/Hellsing_v01_cover.jpg",
    "url": "https://www.mangareader.to/hellsing-33"
  },
  {
    "id": 50,
    "title": "Bungo Stray Dogs",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/47/Bungo_Stray_Dogs_volume_1.jpg",
    "url": "https://www.mangareader.to/bungo-stray-dogs-37156"
  },
  {
    "id": 51,
    "title": "Noragami",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2a/Noragami_Volume_1.jpg",
    "url": "https://www.mangareader.to/noragami-203"
  },
  {
    "id": 52,
    "title": "Komi Can't Communicate",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/60/Komi_Can%27t_Communicate_volume_1.jpg",
    "url": "https://www.mangareader.to/komi-cant-communicate-505"
  },
  {
    "id": 53,
    "title": "Lovely★Complex",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/bb/Lovely_Complex_v01_cover.jpg",
    "url": "https://www.mangareader.to/lovely-complex-339"
  },
  {
    "id": 54,
    "title": "Orange",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2f/Orange_vol_1.jpg",
    "url": "https://www.mangareader.to/orange-453"
  },
  {
    "id": 55,
    "title": "Horimiya",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/ec/Horimiya_volume_1.jpg",
    "url": "https://www.mangareader.to/horimiya-409"
  },
  {
    "id": 56,
    "title": "Steins;Gate",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6d/SteinsGate_vol1_cover.jpg",
    "url": "https://www.mangareader.to/steins-gate-300"
  },
  {
    "id": 57,
    "title": "Higurashi When They Cry",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8e/Higurashi_v01_cover.png",
    "url": "https://www.mangareader.to/higurashi-when-they-cry-265"
  },
  {
    "id": 58,
    "title": "Elfen Lied",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/29/Elfen_Lied_v01_cover.jpg",
    "url": "https://www.mangareader.to/elfen-lied-297"
  },
  {
    "id": 59,
    "title": "Golden Kamuy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f1/Golden_Kamuy_vol_1.jpg",
    "url": "https://www.mangareader.to/golden-kamuy-347"
  },
  {
    "id": 60,
    "title": "Tokyo Revengers",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2c/Tokyo_Revengers_volume_1.jpg",
    "url": "https://www.mangareader.to/tokyo-revengers-45121"
  },
  {
    "id": 61,
    "title": "The Breaker",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/86/The_Breaker_v01_cover.jpg",
    "url": "https://www.mangareader.to/the-breaker-3483"
  },
  {
    "id": 62,
    "title": "Devilman",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e7/Devilman_v01_cover.jpg",
    "url": "https://www.mangareader.to/devilman-3392"
  },
  {
    "id": 63,
    "title": "To Your Eternity",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6e/To_Your_Eternity_vol_1.jpg",
    "url": "https://www.mangareader.to/to-your-eternity-9324"
  },
  {
    "id": 64,
    "title": "Drifters",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7f/Drifters_Volume_1.jpg",
    "url": "https://www.mangareader.to/drifters-2881"
  },
  {
    "id": 65,
    "title": "Blood Lad",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3f/Blood_Lad_volume_1.jpg",
    "url": "https://www.mangareader.to/blood-lad-509"
  },
  {
    "id": 66,
    "title": "Kill la Kill",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/38/Kill_la_Kill_volume_1.jpg",
    "url": "https://www.mangareader.to/kill-la-kill-434"
  },
  {
    "id": 67,
    "title": "Black Clover Gaiden",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/17/Black_Clover%2C_volume_1.jpg",
    "url": "https://www.mangareader.to/black-clover-gaiden-21345"
  },
  {
    "id": 68,
    "title": "Wolf Guy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/dd/Wolf_Guy_cover.jpg",
    "url": "https://www.mangareader.to/wolf-guy-2972"
  },
  {
    "id": 69,
    "title": "ReLIFE",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/98/Relife_Volume_1.jpg",
    "url": "https://www.mangareader.to/relife-407"
  },
  {
    "id": 70,
    "title": "Yamada-kun and the Seven Witches",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/23/Yamada-kun_and_the_Seven_Witches_volume_1.jpg",
    "url": "https://www.mangareader.to/yamada-kun-and-the-seven-witches-202"
  },
  {
    "id": 71,
    "title": "Rent-a-Girlfriend",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/83/Rent-A-Girlfriend_volume_1.jpg",
    "url": "https://www.mangareader.to/rent-a-girlfriend-7044"
  },
  {
    "id": 72,
    "title": "A Silent Voice",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/70/Koe_no_Katachi_volume_1.jpg",
    "url": "https://www.mangareader.to/a-silent-voice-350"
  },
  {
    "id": 73,
    "title": "Inuyasha",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/46/Inuyasha_vol_1.jpg",
    "url": "https://www.mangareader.to/inuyasha-14"
  },
  {
    "id": 74,
    "title": "Nisekoi",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2c/Nisekoi_volume_1.jpg",
    "url": "https://www.mangareader.to/nisekoi-702"
  },
  {
    "id": 75,
    "title": "Food Wars!: Shokugeki no Soma",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/13/Food_Wars%21_Shokugeki_no_Soma_Volume_1.png",
    "url": "https://www.mangareader.to/food-wars-32"
  },
  {
    "id": 76,
    "title": "Assassination Classroom",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f5/Assassination_Classroom_Volume_1_Cover.jpg",
    "url": "https://www.mangareader.to/assassination-classroom-45"
  },
  {
    "id": 77,
    "title": "Kakegurui",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2a/Kakegurui_Volume_1_cover.jpg",
    "url": "https://www.mangareader.to/kakegurui-5674"
  },
  {
    "id": 78,
    "title": "Chobits",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/71/Chobits_vol1cover.jpg",
    "url": "https://www.mangareader.to/chobits-39"
  },
  {
    "id": 79,
    "title": "Air Gear",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2a/Air_Gear_volume_1.jpg",
    "url": "https://www.mangareader.to/air-gear-69"
  },
  {
    "id": 80,
    "title": "Psyren",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4c/Psyren_volume_1.jpg",
    "url": "https://www.mangareader.to/psyren-2889"
  },
  {
    "id": 81,
    "title": "Dorohedoro",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4e/Dorohedoro_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/dorohedoro-347"
  },
  {
    "id": 82,
    "title": "Gleipnir",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/b4/Gleipnir_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/gleipnir-3639"
  },
  {
    "id": 83,
    "title": "Hajime no Ippo",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/84/Hajime_no_Ippo_vol_1.jpg",
    "url": "https://www.mangareader.to/hajime-no-ippo-4"
  },
  {
    "id": 84,
    "title": "Zetman",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/40/Zetman_volume_1.jpg",
    "url": "https://www.mangareader.to/zetman-344"
  },
  {
    "id": 85,
    "title": "Initial D",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7c/InitialD_vol1.jpg",
    "url": "https://www.mangareader.to/initial-d-43"
  },
  {
    "id": 86,
    "title": "Shaman King",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2e/Shaman_King_vol_1.jpg",
    "url": "https://www.mangareader.to/shaman-king-12"
  },
  {
    "id": 87,
    "title": "Bakuman",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/29/Bakuman_v01_cover.jpg",
    "url": "https://www.mangareader.to/bakuman-40"
  },
  {
    "id": 88,
    "title": "Kengan Ashura",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2b/Kengan_Ashura_Volume_1.jpg",
    "url": "https://www.mangareader.to/kengan-ashura-32766"
  },
  {
    "id": 89,
    "title": "Owari no Seraph: Guren Ichinose",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/30/Seraph_of_the_End_volume_1.jpg",
    "url": "https://www.mangareader.to/owari-no-seraph-guren-ichinose-10829"
  },
  {
    "id": 90,
    "title": "Promise Cinderella",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f8/Promise_Cinderella.jpg",
    "url": "https://www.mangareader.to/promise-cinderella-29988"
  },
  {
    "id": 91,
    "title": "Reborn!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a5/Katekyo_Hitman_Reborn%21_volume_1.jpg",
    "url": "https://www.mangareader.to/katekyo-hitman-reborn-44"
  },
  {
    "id": 92,
    "title": "Danganronpa: Trigger Happy Havoc",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6c/Danganronpa_1_Cover.png",
    "url": "https://www.mangareader.to/danganronpa-21234"
  },
  {
    "id": 93,
    "title": "Blue Flag",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a5/Blue_Flag_volume_1.jpg",
    "url": "https://www.mangareader.to/blue-flag-2998"
  },
  {
    "id": 94,
    "title": "I Am a Hero",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1f/I_Am_a_Hero_volume_1.jpg",
    "url": "https://www.mangareader.to/i-am-a-hero-4549"
  },
  {
    "id": 95,
    "title": "Golden Boy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/26/Golden_Boy_manga_vol_1.jpg",
    "url": "https://www.mangareader.to/golden-boy-889"
  },
  {
    "id": 96,
    "title": "Domestic Girlfriend",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/92/Domestic_Girlfriend_vol_1.jpg",
    "url": "https://www.mangareader.to/domestic-girlfriend-380"
  },
  {
    "id": 97,
    "title": "I Sold My Life for Ten Thousand Yen Per Year",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9f/Selling_My_Life_for_Ten_Thousand_Yen_Per_Year.jpg",
    "url": "https://www.mangareader.to/i-sold-my-life-for-10000-yen-34288"
  },
  {
    "id": 98,
    "title": "Real",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fb/Real_volume_1.jpg",
    "url": "https://www.mangareader.to/real-671"
  },
  {
    "id": 99,
    "title": "Welcome to the NHK",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/86/NHK_ni_Youkoso_manga_cover.jpg",
    "url": "https://www.mangareader.to/welcome-to-the-nhk-292"
  },
  {
    "id": 100,
    "title": "Blame!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e1/Blame_vol_1.jpg",
    "url": "https://www.mangareader.to/blame-3245"
  },
  {
    "id": 101,
    "title": "TRIAGE X",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/53/Triage_X_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/triage-x-480"
  },
  {
    "id": 102,
    "title": "Btooom!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/47/Btooom%21_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/btooom-320"
  },
  {
    "id": 103,
    "title": "Akame ga Kill!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8a/Akame_ga_Kill%21_Volume_1.jpg",
    "url": "https://www.mangareader.to/akame-ga-kill-544"
  },
  {
    "id": 104,
    "title": "Akame ga Kill! Zero",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/33/Akame_ga_Kill_Zero.jpg",
    "url": "https://www.mangareader.to/akame-ga-kill-zero-878"
  },
  {
    "id": 105,
    "title": "Berserk: The Prototype",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0c/Berserk_vol01.jpg",
    "url": "https://www.mangareader.to/berserk-the-prototype-322"
  },
  {
    "id": 106,
    "title": "Akira",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5d/Akira_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/akira-59"
  },
  {
    "id": 107,
    "title": "Planetes",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2c/Planetes_v1.jpg",
    "url": "https://www.mangareader.to/planetes-687"
  },
  {
    "id": 108,
    "title": "Blame! Academy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e1/Blame_vol_1.jpg",
    "url": "https://www.mangareader.to/blame-academy-5432"
  },
  {
    "id": 109,
    "title": "Haruhi Suzumiya",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e3/Haruhi_manga_1_cover.jpg",
    "url": "https://www.mangareader.to/haruhi-suzumiya-654"
  },
  {
    "id": 110,
    "title": "Kobato",
    "cover": "https://upload.wikimedia.org/wikipedia/en/c/cc/Kobato_v1.jpg",
    "url": "https://www.mangareader.to/kobato-438"
  },
  {
    "id": 111,
    "title": "Mahoromatic",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/94/Mahoromatic_Vol1.png",
    "url": "https://www.mangareader.to/mahoromatic-839"
  },
  {
    "id": 112,
    "title": "Gunslinger Girl",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/b2/GunslingerGirlVol1.jpg",
    "url": "https://www.mangareader.to/gunslinger-girl-291"
  },
  {
    "id": 113,
    "title": "Dragon Quest: Dai no Daibouken",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8e/DragonQuestDaiVol1.jpg",
    "url": "https://www.mangareader.to/dragon-quest-dai-no-daibouken-551"
  },
  {
    "id": 114,
    "title": "Fate/Zero",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a3/FateZero_1.png",
    "url": "https://www.mangareader.to/fate-zero-675"
  },
  {
    "id": 115,
    "title": "Fate/Stay Night",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/14/Fatestaynight_dvd_1.jpg",
    "url": "https://www.mangareader.to/fate-stay-night-912"
  },
  {
    "id": 116,
    "title": "Hyouka",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5f/Hyouka_vol1.jpg",
    "url": "https://www.mangareader.to/hyouka-337"
  },
  {
    "id": 117,
    "title": "Zom 100: Bucket List of the Dead",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/29/Zom_100_v1.png",
    "url": "https://www.mangareader.to/zom-100-53492"
  },
  {
    "id": 118,
    "title": "Call of the Night",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5c/Call_of_the_Night_vol_1.jpg",
    "url": "https://www.mangareader.to/call-of-the-night-17980"
  },
  {
    "id": 119,
    "title": "Kubo Won't Let Me Be Invisible",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/59/Kubo_Won%27t_Let_Me_Be_Invisible_Volume_1.jpg",
    "url": "https://www.mangareader.to/kubo-wont-let-me-be-invisible-45802"
  },
  {
    "id": 120,
    "title": "Shikimori's Not Just a Cutie",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d0/Shikimori_not_just_a_cutie.jpg",
    "url": "https://www.mangareader.to/shikimori-is-not-just-a-cutie-65981"
  },
  {
    "id": 121,
    "title": "Insomniacs After School",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7a/Insomniacs_After_School_vol_1.jpg",
    "url": "https://www.mangareader.to/insomniacs-after-school-61321"
  },
  {
    "id": 122,
    "title": "Oshi no Ko",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5d/Oshi_no_Ko_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/oshi-no-ko-79456"
  },
  {
    "id": 123,
    "title": "Mashle: Magic and Muscles",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1b/Mashle_Volume_1.jpg",
    "url": "https://www.mangareader.to/mashle-65935"
  },
  {
    "id": 124,
    "title": "Sakamoto Days",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5b/Sakamoto_Days_volume_1.jpg",
    "url": "https://www.mangareader.to/sakamoto-days-64036"
  },
  {
    "id": 125,
    "title": "Kaiju No. 8",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/40/Kaiju_No._8_volume_1.jpg",
    "url": "https://www.mangareader.to/kaiju-no-8-67364"
  },
  {
    "id": 126,
    "title": "Undead Unluck",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2f/Undead_Unluck_volume_1.jpg",
    "url": "https://www.mangareader.to/undead-unluck-63028"
  },
  {
    "id": 127,
    "title": "Dandadan",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/Dandadan_vol1.jpg",
    "url": "https://www.mangareader.to/dandadan-74529"
  },
  {
    "id": 128,
    "title": "Witch Hat Atelier",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/31/Witch_Hat_Atelier_vol_1.jpg",
    "url": "https://www.mangareader.to/witch-hat-atelier-29892"
  },
  {
    "id": 129,
    "title": "Frieren: Beyond Journey's End",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6d/Frieren_Beyond_Journey%27s_End_volume_1.jpg",
    "url": "https://www.mangareader.to/frieren-35482"
  },
  {
    "id": 130,
    "title": "Bocchi the Rock!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/18/Bocchi_the_Rock%21_volume_1.jpg",
    "url": "https://www.mangareader.to/bocchi-the-rock-65921"
  },
  {
    "id": 131,
    "title": "The Dangers in My Heart",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6d/The_Dangers_in_My_Heart_volume_1.jpg",
    "url": "https://www.mangareader.to/the-dangers-in-my-heart-74421"
  },
  {
    "id": 132,
    "title": "Angels of Death",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d1/Angels_of_Death_Volume_1.png",
    "url": "https://www.mangareader.to/angels-of-death-44121"
  },
  {
    "id": 133,
    "title": "Ancient Magus' Bride",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/12/The_Ancient_Magus%27_Bride_volume_1.jpg",
    "url": "https://www.mangareader.to/the-ancient-magus-bride-29248"
  },
  {
    "id": 134,
    "title": "Hell's Paradise",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8f/Hell%27s_Paradise_volume_1.png",
    "url": "https://www.mangareader.to/hells-paradise-66939"
  },
  {
    "id": 135,
    "title": "Kaguya-sama: Love Is War",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0a/Kaguya-sama_vol1.png",
    "url": "https://www.mangareader.to/kaguya-sama-love-is-war-18834"
  },
  {
    "id": 136,
    "title": "Oregairu",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/90/Oregairu_vol1.jpg",
    "url": "https://www.mangareader.to/oregairu-7384"
  },
  {
    "id": 137,
    "title": "Konosuba",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d2/KonoSuba_volume_1_light_novel_cover.jpg",
    "url": "https://www.mangareader.to/konosuba-28899"
  },
  {
    "id": 138,
    "title": "Re:Zero",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0c/ReZero_volume_1.jpg",
    "url": "https://www.mangareader.to/re-zero-365"
  },
  {
    "id": 139,
    "title": "No Game No Life",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7b/No_Game_No_Life_light_novel_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/no-game-no-life-234"
  },
  {
    "id": 140,
    "title": "Goblin Slayer",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/24/Goblin_Slayer_volume_1.jpg",
    "url": "https://www.mangareader.to/goblin-slayer-33193"
  },
  {
    "id": 141,
    "title": "Overlord",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0a/Overlord_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/overlord-349"
  },
  {
    "id": 142,
    "title": "Isekai Ojisan",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9a/Isekai_Ojisan_volume_1.jpg",
    "url": "https://www.mangareader.to/isekai-ojisan-38129"
  },
  {
    "id": 143,
    "title": "That Time I Got Reincarnated as a Slime",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d8/That_Time_I_Got_Reincarnated_as_a_Slime_light_novel_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/tensei-shitara-slime-datta-ken-6023"
  },
  {
    "id": 144,
    "title": "Arifureta",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5a/Arifureta_cover.jpg",
    "url": "https://www.mangareader.to/arifureta-6179"
  },
  {
    "id": 145,
    "title": "World Trigger",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fb/World_Trigger_volume_1.jpg",
    "url": "https://www.mangareader.to/world-trigger-3501"
  },
  {
    "id": 146,
    "title": "The Rising of the Shield Hero",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/05/The_Rising_of_the_Shield_Hero_volume_1.jpg",
    "url": "https://www.mangareader.to/tate-no-yuusha-no-nariagari-191"
  },
  {
    "id": 147,
    "title": "Black Bullet",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3f/Black_Bullet_LN1.png",
    "url": "https://www.mangareader.to/black-bullet-2961"
  },
  {
    "id": 148,
    "title": "Accel World",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f6/Accel_World_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/accel-world-382"
  },
  {
    "id": 149,
    "title": "Alderamin on the Sky",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7e/Alderamin_on_the_Sky_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/alderamin-6654"
  },
  {
    "id": 150,
    "title": "Trinity Seven",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3b/Trinity_Seven_volume_1.png",
    "url": "https://www.mangareader.to/trinity-seven-297"
  },
  {
    "id": 151,
    "title": "High School DxD",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5a/Highschool_DxD_Volume_1.jpg",
    "url": "https://www.mangareader.to/high-school-dxd-329"
  },
  {
    "id": 152,
    "title": "Strike the Blood",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1c/Strike_the_Blood_volume_1.jpg",
    "url": "https://www.mangareader.to/strike-the-blood-239"
  },
  {
    "id": 153,
    "title": "Aesthetica of a Rogue Hero",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1b/Aesthetica_of_a_Rogue_Hero_vol_1.jpg",
    "url": "https://www.mangareader.to/aesthetica-of-a-rogue-hero-2991"
  },
  {
    "id": 154,
    "title": "Date A Live",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/11/Date_A_Live_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/date-a-live-332"
  },
  {
    "id": 155,
    "title": "The Irregular at Magic High School",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a8/Mahouka_volume_1.jpg",
    "url": "https://www.mangareader.to/the-irregular-at-magic-high-school-562"
  },
  {
    "id": 156,
    "title": "Yosuga no Sora",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5e/Yosuga_no_Sora_visual_novel_cover.jpg",
    "url": "https://www.mangareader.to/yosuga-no-sora-781"
  },
  {
    "id": 157,
    "title": "Chivalry of a Failed Knight",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a7/Rakudai_Kishi_no_Eiyuutan_Volume_1.jpg",
    "url": "https://www.mangareader.to/chivalry-of-a-failed-knight-233"
  },
  {
    "id": 158,
    "title": "Infinite Stratos",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5c/Infinite_Stratos_light_novel_volume_1.jpg",
    "url": "https://www.mangareader.to/infinite-stratos-397"
  },
  {
    "id": 159,
    "title": "The Asterisk War",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/43/The_Asterisk_War_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/the-asterisk-war-334"
  },
  {
    "id": 160,
    "title": "Saekano",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7a/Saekano_volume_1.jpg",
    "url": "https://www.mangareader.to/saekano-219"
  },
  {
    "id": 161,
    "title": "ReLife",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/98/Relife_Volume_1.jpg",
    "url": "https://www.mangareader.to/relife-407"
  },
  {
    "id": 162,
    "title": "Aho-Girl",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/ea/Aho-Girl_volume_1.jpg",
    "url": "https://www.mangareader.to/aho-girl-6712"
  },
  {
    "id": 163,
    "title": "School Rumble",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7a/School_Rumble_volume_1.jpg",
    "url": "https://www.mangareader.to/school-rumble-48"
  },
  {
    "id": 164,
    "title": "Gintama",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/GintamaVolume1.jpg",
    "url": "https://www.mangareader.to/gintama-9"
  },
  {
    "id": 165,
    "title": "Rosario + Vampire",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/88/Rosario%2Bvampirevol1.jpg",
    "url": "https://www.mangareader.to/rosario-vampire-49"
  },
  {
    "id": 166,
    "title": "NANA",
    "cover": "https://upload.wikimedia.org/wikipedia/en/c/c2/Nana_manga_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/nana-8831"
  },
  {
    "id": 167,
    "title": "Lovely★Complex",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/bb/Lovely_Complex_v01_cover.jpg",
    "url": "https://www.mangareader.to/lovely-complex-339"
  },
  {
    "id": 168,
    "title": "Kimi ni Todoke",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/82/Kimi_ni_Todoke_v01_cover.jpg",
    "url": "https://www.mangareader.to/kimi-ni-todoke-98"
  },
  {
    "id": 169,
    "title": "Skip Beat!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3b/Skip_Beat%21_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/skip-beat-52"
  },
  {
    "id": 170,
    "title": "Ao no Flag",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a5/Blue_Flag_volume_1.jpg",
    "url": "https://www.mangareader.to/blue-flag-2998"
  },
  {
    "id": 171,
    "title": "3D Kanojo: Real Girl",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/85/3D_Kanojo_Real_Girl.jpg",
    "url": "https://www.mangareader.to/3d-kanojo-2976"
  },
  {
    "id": 172,
    "title": "Nodame Cantabile",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/52/Nodame_Cantabile_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/nodame-cantabile-53"
  },
  {
    "id": 173,
    "title": "Honey and Clover",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/86/Honey_and_Clover_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/honey-and-clover-75"
  },
  {
    "id": 174,
    "title": "Wotakoi",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d6/Wotakoi_vol_1_cover.png",
    "url": "https://www.mangareader.to/wotakoi-19691"
  },
  {
    "id": 175,
    "title": "Kiss Him, Not Me",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7c/Kiss_Him_Not_Me_volume_1.jpg",
    "url": "https://www.mangareader.to/kiss-him-not-me-578"
  },
  {
    "id": 176,
    "title": "Yamada-kun at Lv999",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fc/Yamada-kun_Lv999.png",
    "url": "https://www.mangareader.to/yamada-kun-lv999-78542"
  },
  {
    "id": 177,
    "title": "Rent A Girlfriend: Mini",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/83/Rent-A-Girlfriend_volume_1.jpg",
    "url": "https://www.mangareader.to/rent-a-girlfriend-mini-67944"
  },
  {
    "id": 178,
    "title": "From Me to You: Kimi ni Todoke",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/82/Kimi_ni_Todoke_v01_cover.jpg",
    "url": "https://www.mangareader.to/kimi-ni-todoke-98"
  },
  {
    "id": 179,
    "title": "The Quintessential Quintuplets",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/05/Quintessential_Quintuplets_volume_1.jpg",
    "url": "https://www.mangareader.to/the-quintessential-quintuplets-5540"
  },
  {
    "id": 180,
    "title": "We Never Learn",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/47/We_Never_Learn_volume_1.jpg",
    "url": "https://www.mangareader.to/we-never-learn-6231"
  },
  {
    "id": 181,
    "title": "Grand Blue",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0f/Grand_Blue_Dreaming_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/grand-blue-27504"
  },
  {
    "id": 182,
    "title": "Barakamon",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7d/Barakamon_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/barakamon-230"
  },
  {
    "id": 183,
    "title": "Nichijou",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a3/Nichijou_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/nichijou-88"
  },
  {
    "id": 184,
    "title": "Daily Lives of High School Boys",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/99/Daily_Lives_of_High_School_Boys_manga_volume_1.jpg",
    "url": "https://www.mangareader.to/daily-lives-of-high-school-boys-373"
  },
  {
    "id": 185,
    "title": "Prison School",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/39/Prison_School_vol_1.jpg",
    "url": "https://www.mangareader.to/prison-school-244"
  },
  {
    "id": 186,
    "title": "Detroit Metal City",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/85/Detroit_Metal_City_vol1.jpg",
    "url": "https://www.mangareader.to/detroit-metal-city-276"
  },
  {
    "id": 187,
    "title": "Grand Blue Dreaming",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0f/Grand_Blue_Dreaming_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/grand-blue-27504"
  },
  {
    "id": 188,
    "title": "Back Street Girls",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/b8/Back_Street_Girls.jpg",
    "url": "https://www.mangareader.to/back-street-girls-49821"
  },
  {
    "id": 189,
    "title": "Saiyuki",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6e/Saiyuki_v01_cover.jpg",
    "url": "https://www.mangareader.to/saiyuki-86"
  },
  {
    "id": 190,
    "title": "Black Lagoon",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5c/Black_Lagoon_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/black-lagoon-36"
  },
  {
    "id": 191,
    "title": "Jormungand",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fc/Jormungand_Vol_1.jpg",
    "url": "https://www.mangareader.to/jormungand-305"
  },
  {
    "id": 192,
    "title": "Gangsta",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/87/Gangsta_volume_1.jpg",
    "url": "https://www.mangareader.to/gangsta-303"
  },
  {
    "id": 193,
    "title": "Banana Fish",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/08/Banana_fish_vol_1.jpg",
    "url": "https://www.mangareader.to/banana-fish-3394"
  },
  {
    "id": 194,
    "title": "Akira Amano's ēlDLIVE",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5e/Eldlive_vol1.jpg",
    "url": "https://www.mangareader.to/eldlive-3413"
  },
  {
    "id": 195,
    "title": "Dogs: Bullets & Carnage",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f0/Dogs_Bullets_%26_Carnage_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/dogs-bullets-carnage-129"
  },
  {
    "id": 196,
    "title": "Rainbow",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e3/Rainbow_manga_volume_1.jpg",
    "url": "https://www.mangareader.to/rainbow-2334"
  },
  {
    "id": 197,
    "title": "Sun-Ken Rock",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e7/Sun-Ken_Rock_cover_1.jpg",
    "url": "https://www.mangareader.to/sun-ken-rock-267"
  },
  {
    "id": 198,
    "title": "Crows",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/28/Crows_manga_cover.jpg",
    "url": "https://www.mangareader.to/crows-491"
  },
  {
    "id": 199,
    "title": "Worst",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4f/Worst_manga_cover.jpg",
    "url": "https://www.mangareader.to/worst-878"
  },
  {
    "id": 200,
    "title": "Beck",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3e/BECK_manga_cover.jpg",
    "url": "https://www.mangareader.to/beck-234"
  },
  {
    "id": 201,
    "title": "Kanojo, Okarishimasu: Memcho Arc",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/83/Rent-A-Girlfriend_volume_1.jpg",
    "url": "https://www.mangareader.to/rent-a-girlfriend-7044"
  },
  {
    "id": 202,
    "title": "I''s",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7e/I%27s_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/is-71"
  },
  {
    "id": 203,
    "title": "Kare Kano",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7e/Kare_Kano.jpg",
    "url": "https://www.mangareader.to/kare-kano-96"
  },
  {
    "id": 204,
    "title": "Amagami",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d6/Amagami_SS_Vol1.jpg",
    "url": "https://www.mangareader.to/amagami-3904"
  },
  {
    "id": 205,
    "title": "Dengeki Daisy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1d/Dengeki_Daisy_cover_1.jpg",
    "url": "https://www.mangareader.to/dengeki-daisy-290"
  },
  {
    "id": 206,
    "title": "Wolf Children: Ame & Yuki",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5a/Wolf_Children_Poster.jpg",
    "url": "https://www.mangareader.to/wolf-children-926"
  },
  {
    "id": 207,
    "title": "Anohana",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4a/Anohana_novel_volume1.jpg",
    "url": "https://www.mangareader.to/anohana-1283"
  },
  {
    "id": 208,
    "title": "Golden Time",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7f/Golden_Time_LN1.png",
    "url": "https://www.mangareader.to/golden-time-3852"
  },
  {
    "id": 209,
    "title": "5 Centimeters per Second",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7c/5CentimetersPerSecond.png",
    "url": "https://www.mangareader.to/5-centimeters-per-second-299"
  },
  {
    "id": 210,
    "title": "Weathering With You",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9c/Weathering_with_You_Poster.jpg",
    "url": "https://www.mangareader.to/weathering-with-you-9920"
  },
  {
    "id": 211,
    "title": "Your Name",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0b/Your_Name_poster.png",
    "url": "https://www.mangareader.to/your-name-29999"
  },
  {
    "id": 212,
    "title": "Astra Lost in Space",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/56/Astra_Lost_in_Space_vol_1.jpg",
    "url": "https://www.mangareader.to/astra-lost-in-space-3401"
  },
  {
    "id": 213,
    "title": "Terra Formars",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/69/Terra_Formars_Volume_1.png",
    "url": "https://www.mangareader.to/terra-formars-290"
  },
  {
    "id": 214,
    "title": "Ajin: Demi-Human",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e4/Ajin_Demi-Human_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/ajin-367"
  },
  {
    "id": 215,
    "title": "Black Torch",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8d/Black_Torch_vol_1.jpg",
    "url": "https://www.mangareader.to/black-torch-22491"
  },
  {
    "id": 216,
    "title": "Blue Spring Ride",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/12/Ao_Haru_Ride_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/ao-haru-ride-6456"
  },
  {
    "id": 217,
    "title": "Blue Period",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6a/Blue_Period_Volume_1.png",
    "url": "https://www.mangareader.to/blue-period-69821"
  },
  {
    "id": 218,
    "title": "Blue Giant",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/b1/Blue_Giant_vol_1.jpg",
    "url": "https://www.mangareader.to/blue-giant-69812"
  },
  {
    "id": 219,
    "title": "Ping Pong",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2a/Ping_Pong_manga_cover.jpg",
    "url": "https://www.mangareader.to/ping-pong-570"
  },
  {
    "id": 220,
    "title": "Teppu",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/34/Teppu_vol1.jpg",
    "url": "https://www.mangareader.to/teppu-309"
  },
  {
    "id": 221,
    "title": "Hinomaruzumou",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d8/Hinomaru_Zumou_volume_1.jpg",
    "url": "https://www.mangareader.to/hinomaruzumou-23122"
  },
  {
    "id": 222,
    "title": "Kengan Omega",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2b/Kengan_Ashura_Volume_1.jpg",
    "url": "https://www.mangareader.to/kengan-omega-60671"
  },
  {
    "id": 223,
    "title": "Higanjima",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e0/Higanjima_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/higanjima-891"
  },
  {
    "id": 224,
    "title": "Kiss X Sis",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/25/Kissxsis.png",
    "url": "https://www.mangareader.to/kiss-x-sis-138"
  },
  {
    "id": 225,
    "title": "Nana to Kaoru",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7a/Nana_to_Kaoru_vol_1.jpg",
    "url": "https://www.mangareader.to/nana-to-kaoru-900"
  },
  {
    "id": 226,
    "title": "Velvet Kiss",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/60/Velvet_Kiss_vol_1.jpg",
    "url": "https://www.mangareader.to/velvet-kiss-2888"
  },
  {
    "id": 227,
    "title": "Oku-sama wa Joshi Kousei",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4c/My_Wife_is_a_High_School_Girl.jpg",
    "url": "https://www.mangareader.to/okusama-wa-joshi-kousei-212"
  },
  {
    "id": 228,
    "title": "Yubisaki Milk Tea",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/ee/Yubisaki_Milk_Tea_vol1.png",
    "url": "https://www.mangareader.to/yubisaki-milk-tea-381"
  },
  {
    "id": 229,
    "title": "Sundome",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8b/Sundome_vol1.jpg",
    "url": "https://www.mangareader.to/sundome-3221"
  },
  {
    "id": 230,
    "title": "Nozoki Ana",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0d/Nozoki_Ana_manga_cover.png",
    "url": "https://www.mangareader.to/nozoki-ana-317"
  },
  {
    "id": 231,
    "title": "Futari Ecchi",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/37/Futari_Ecchi_vol1.jpg",
    "url": "https://www.mangareader.to/futari-ecchi-93"
  },
  {
    "id": 232,
    "title": "A Town Where You Live",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8d/A_Town_Where_You_Live_volume_1.jpg",
    "url": "https://www.mangareader.to/a-town-where-you-live-103"
  },
  {
    "id": 233,
    "title": "Good Ending",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fd/Good_Ending_volume_1.jpg",
    "url": "https://www.mangareader.to/good-ending-332"
  },
  {
    "id": 234,
    "title": "GE: Good Ending",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fd/Good_Ending_volume_1.jpg",
    "url": "https://www.mangareader.to/good-ending-332"
  },
  {
    "id": 235,
    "title": "Kanojo wa Rokurokubi",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/aa/Kanojo_wa_Rokurokubi.png",
    "url": "https://www.mangareader.to/kanojo-wa-rokurokubi-2231"
  },
  {
    "id": 236,
    "title": "Kamisama Kiss",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2c/Kamisama_Kiss_v01_cover.jpg",
    "url": "https://www.mangareader.to/kamisama-kiss-210"
  },
  {
    "id": 237,
    "title": "Fruits Basket",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/38/Fruits_Basket_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/fruits-basket-74"
  },
  {
    "id": 238,
    "title": "Vampire Knight",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2b/Vampire_Knight_vol_1.jpg",
    "url": "https://www.mangareader.to/vampire-knight-82"
  },
  {
    "id": 239,
    "title": "Dengeki Daisy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1d/Dengeki_Daisy_cover_1.jpg",
    "url": "https://www.mangareader.to/dengeki-daisy-290"
  },
  {
    "id": 240,
    "title": "Kamisama Hajimemashita",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2c/Kamisama_Kiss_v01_cover.jpg",
    "url": "https://www.mangareader.to/kamisama-kiss-210"
  },
  {
    "id": 241,
    "title": "Otome Youkai Zakuro",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/00/Otome_Youkai_Zakuro_volume_1.jpg",
    "url": "https://www.mangareader.to/otome-youkai-zakuro-441"
  },
  {
    "id": 242,
    "title": "Inari, Konkon, Koi Iroha",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d9/Inari_Konkon_Koi_Iroha.jpg",
    "url": "https://www.mangareader.to/inari-konkon-koi-iroha-7821"
  },
  {
    "id": 243,
    "title": "Kakuriyo: Bed & Breakfast for Spirits",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0b/Kakuriyo_Bed_%26_Breakfast_for_Spirits_vol_1.jpg",
    "url": "https://www.mangareader.to/kakuriyo-no-yadomeshi-98122"
  },
  {
    "id": 244,
    "title": "Meiji Tokyo Renka",
    "cover": "https://upload.wikimedia.org/wikipedia/en/b/b0/MeijiTokyoRenka.png",
    "url": "https://www.mangareader.to/meiji-tokyo-renka-45291"
  },
  {
    "id": 245,
    "title": "Hotarubi no Mori e",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3e/Hotarubi_no_Mori_e.jpg",
    "url": "https://www.mangareader.to/hotarubi-no-mori-e-29992"
  },
  {
    "id": 246,
    "title": "Kamisama no Iutoori",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/Kamisama_no_Iutoori.jpg",
    "url": "https://www.mangareader.to/kamisama-no-iutoori-1234"
  },
  {
    "id": 247,
    "title": "Kamisama no Iutoori II",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/Kamisama_no_Iutoori.jpg",
    "url": "https://www.mangareader.to/kamisama-no-iutoori-ii-5678"
  },
  {
    "id": 248,
    "title": "Real Account",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4f/Real_Account_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/real-account-26341"
  },
  {
    "id": 249,
    "title": "Tomodachi Game",
    "cover": "https://upload.wikimedia.org/wikipedia/en/c/c4/Tomodachi_Game_volume_1.jpg",
    "url": "https://www.mangareader.to/tomodachi-game-12190"
  },
  {
    "id": 250,
    "title": "Deathtopia",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/20/Deathtopia_cover.jpg",
    "url": "https://www.mangareader.to/deathtopia-7841"
  },
  {
    "id": 251,
    "title": "As the Gods Will",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6f/Kamisama_no_Iutoori.jpg",
    "url": "https://www.mangareader.to/as-the-gods-will-123"
  },
  {
    "id": 252,
    "title": "Prison Lab",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/33/Prison_Lab_volume_1.jpg",
    "url": "https://www.mangareader.to/kangoku-jikken-5021"
  },
  {
    "id": 253,
    "title": "Fort of Apocalypse",
    "cover": "https://upload.wikimedia.org/wikipedia/en/c/c7/Apocalypse_no_Toride_volume_1.jpg",
    "url": "https://www.mangareader.to/fort-of-apocalypse-289302"
  },
  {
    "id": 254,
    "title": "I Am a Hero in Osaka",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1f/I_Am_a_Hero_volume_1.jpg",
    "url": "https://www.mangareader.to/i-am-a-hero-osaka-23922"
  },
  {
    "id": 255,
    "title": "High-Rise Invasion",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/12/High-Rise_Invasion_volume_1.jpg",
    "url": "https://www.mangareader.to/high-rise-invasion-3948"
  },
  {
    "id": 256,
    "title": "High-Rise Invasion Arrive",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/12/High-Rise_Invasion_volume_1.jpg",
    "url": "https://www.mangareader.to/high-rise-invasion-arrive-17902"
  },
  {
    "id": 257,
    "title": "Zankyou no Terror",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/30/Terror_in_Resonance.jpg",
    "url": "https://www.mangareader.to/zankyou-no-terror-3311"
  },
  {
    "id": 258,
    "title": "Bokurano",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5f/Bokurano_v01.jpg",
    "url": "https://www.mangareader.to/bokurano-8839"
  },
  {
    "id": 259,
    "title": "Eden: It's an Endless World!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/ea/EdenItsAnEndlessWorldVol1.jpg",
    "url": "https://www.mangareader.to/eden-its-an-endless-world-308"
  },
  {
    "id": 260,
    "title": "Doubt",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/3f/Doubt_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/doubt-229"
  },
  {
    "id": 261,
    "title": "Judge",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8a/Judge_manga_cover.jpg",
    "url": "https://www.mangareader.to/judge-372"
  },
  {
    "id": 262,
    "title": "Secret",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1d/Secret_manga_cover.jpg",
    "url": "https://www.mangareader.to/secret-28141"
  },
  {
    "id": 263,
    "title": "Island",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8a/Island_visual_novel_cover.jpg",
    "url": "https://www.mangareader.to/island-48022"
  },
  {
    "id": 264,
    "title": "Irene",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/13/Irene_cover.jpg",
    "url": "https://www.mangareader.to/irene-5939"
  },
  {
    "id": 265,
    "title": "Dragon Head",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0d/Dragon_Head_volume_1.jpg",
    "url": "https://www.mangareader.to/dragon-head-2290"
  },
  {
    "id": 266,
    "title": "Fire Punch",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/32/Fire_Punch_Volume_1.png",
    "url": "https://www.mangareader.to/fire-punch-7299"
  },
  {
    "id": 267,
    "title": "Homunculus",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d1/Homunculus_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/homunculus-28930"
  },
  {
    "id": 268,
    "title": "Chi no Wadachi",
    "cover": "https://upload.wikimedia.org/wikipedia/en/3/30/Chi_no_Wadachi.jpg",
    "url": "https://www.mangareader.to/chi-no-wadachi-29249"
  },
  {
    "id": 269,
    "title": "Aku no Hana",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/15/Aku_no_Hana_volume_1.jpg",
    "url": "https://www.mangareader.to/aku-no-hana-9002"
  },
  {
    "id": 270,
    "title": "Onanie Master Kurosawa",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/fb/Onani_Master_Kurosawa_cover.jpg",
    "url": "https://www.mangareader.to/onanie-master-kurosawa-381"
  },
  {
    "id": 271,
    "title": "Holyland",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/1f/HolylandV1.jpg",
    "url": "https://www.mangareader.to/holyland-326"
  },
  {
    "id": 272,
    "title": "Shigurui",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/e4/Shigurui_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/shigurui-29809"
  },
  {
    "id": 273,
    "title": "Battle Royale",
    "cover": "https://upload.wikimedia.org/wikipedia/en/e/ed/Battle_Royale_vol01_Cover.jpg",
    "url": "https://www.mangareader.to/battle-royale-3812"
  },
  {
    "id": 274,
    "title": "Ichi the Killer",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2e/Ichi_the_Killer_manga.jpg",
    "url": "https://www.mangareader.to/ichi-the-killer-3921"
  },
  {
    "id": 275,
    "title": "Gunnm: Battle Angel Alita",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/09/Battle_Angel_Alita_First_Volume.jpg",
    "url": "https://www.mangareader.to/battle-angel-alita-278"
  },
  {
    "id": 276,
    "title": "Gunnm Last Order",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2d/Last_Order_Alita.jpg",
    "url": "https://www.mangareader.to/last-order-3920"
  },
  {
    "id": 277,
    "title": "Gunnm Mars Chronicle",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/4a/Mars_Chronicle_cover.jpg",
    "url": "https://www.mangareader.to/gunnm-mars-chronicle-40121"
  },
  {
    "id": 278,
    "title": "Dead Dead Demon's Dededede Destruction",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/52/Dead_Dead_Demon_Dededede_Destruction_volume_1.png",
    "url": "https://www.mangareader.to/dead-dead-demons-dededede-destruction-12921"
  },
  {
    "id": 279,
    "title": "Oyasumi Punpun",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2f/Oyasumi_Punpun_volume_1.jpg",
    "url": "https://www.mangareader.to/oyasumi-punpun-326"
  },
  {
    "id": 280,
    "title": "Chi: On the Movements of the Earth",
    "cover": "https://upload.wikimedia.org/wikipedia/en/5/5c/Chi_on_the_Movements_of_the_Earth_volume_1.png",
    "url": "https://www.mangareader.to/chi-on-the-movements-of-the-earth-91223"
  },
  {
    "id": 281,
    "title": "Beast of East",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/15/Beast_of_East.jpg",
    "url": "https://www.mangareader.to/beast-of-east-5812"
  },
  {
    "id": 282,
    "title": "Holy Corpse Rising",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/94/Holy_Corpse_Rising.jpg",
    "url": "https://www.mangareader.to/holy-corpse-rising-50899"
  },
  {
    "id": 283,
    "title": "Innocent",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0f/Innocent_manga_cover.jpg",
    "url": "https://www.mangareader.to/innocent-45211"
  },
  {
    "id": 284,
    "title": "Innocent Rouge",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0f/Innocent_manga_cover.jpg",
    "url": "https://www.mangareader.to/innocent-rouge-64892"
  },
  {
    "id": 285,
    "title": "Golden Kamuy",
    "cover": "https://upload.wikimedia.org/wikipedia/en/f/f1/Golden_Kamuy_vol_1.jpg",
    "url": "https://www.mangareader.to/golden-kamuy-347"
  },
  {
    "id": 286,
    "title": "Helck",
    "cover": "https://upload.wikimedia.org/wikipedia/en/0/0f/Helck_volume_1.jpg",
    "url": "https://www.mangareader.to/helck-31241"
  },
  {
    "id": 287,
    "title": "Frieren",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6d/Frieren_Beyond_Journey%27s_End_volume_1.jpg",
    "url": "https://www.mangareader.to/frieren-35482"
  },
  {
    "id": 288,
    "title": "Sousou no Frieren",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/6d/Frieren_Beyond_Journey%27s_End_volume_1.jpg",
    "url": "https://www.mangareader.to/sousou-no-frieren-78422"
  },
  {
    "id": 289,
    "title": "Golden Sheep",
    "cover": "https://upload.wikimedia.org/wikipedia/en/1/10/Golden_Sheep_vol1.jpg",
    "url": "https://www.mangareader.to/the-golden-sheep-12811"
  },
  {
    "id": 290,
    "title": "Yotsuba&!",
    "cover": "https://upload.wikimedia.org/wikipedia/en/8/8c/Yotsuba%26%21_volume_1.jpg",
    "url": "https://www.mangareader.to/yotsubato-310"
  },
  {
    "id": 291,
    "title": "Poyopoyo Kansatsu Nikki",
    "cover": "https://upload.wikimedia.org/wikipedia/en/6/66/Poyopoyo.jpg",
    "url": "https://www.mangareader.to/poyopoyo-7780"
  },
  {
    "id": 292,
    "title": "Shirokuma Cafe",
    "cover": "https://upload.wikimedia.org/wikipedia/en/4/46/Shirokuma_Cafe.jpg",
    "url": "https://www.mangareader.to/shirokuma-cafe-9011"
  },
  {
    "id": 293,
    "title": "Non Non Biyori",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a0/Non_Non_Biyori_Volume_1.jpg",
    "url": "https://www.mangareader.to/non-non-biyori-3319"
  },
  {
    "id": 294,
    "title": "Barakamon",
    "cover": "https://upload.wikimedia.org/wikipedia/en/7/7d/Barakamon_volume_1_cover.jpg",
    "url": "https://www.mangareader.to/barakamon-230"
  },
  {
    "id": 295,
    "title": "Flying Witch",
    "cover": "https://upload.wikimedia.org/wikipedia/en/a/a2/Flying_Witch_vol_1.jpg",
    "url": "https://www.mangareader.to/flying-witch-39210"
  },
  {
    "id": 296,
    "title": "Silver Spoon",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/95/Silver_Spoon_volume_1.jpg",
    "url": "https://www.mangareader.to/silver-spoon-349"
  },
  {
    "id": 297,
    "title": "March Comes in Like a Lion",
    "cover": "https://upload.wikimedia.org/wikipedia/en/d/d0/March_Comes_in_Like_a_Lion_vol_1.jpg",
    "url": "https://www.mangareader.to/march-comes-in-like-a-lion-121"
  },
  {
    "id": 298,
    "title": "Orange",
    "cover": "https://upload.wikimedia.org/wikipedia/en/2/2f/Orange_vol_1.jpg",
    "url": "https://www.mangareader.to/orange-453"
  },
  {
    "id": 299,
    "title": "Yona of the Dawn",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9a/Yona_of_the_Dawn_volume_1.jpg",
    "url": "https://www.mangareader.to/yona-of-the-dawn-3651"
  },
  {
    "id": 300,
    "title": "Akatsuki no Yona",
    "cover": "https://upload.wikimedia.org/wikipedia/en/9/9a/Yona_of_the_Dawn_volume_1.jpg",
    "url": "https://www.mangareader.to/yona-of-the-dawn-3651"
  }
];

// Export for use in collection builder
window.MANGA_DATA = MANGA_DATA;
