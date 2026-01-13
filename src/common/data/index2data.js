// Data file for homepage sections
// Only articles with real images (8 total)

// Section1: Scrolling ticker with article titles
// Format: { id, number, title, author, time_ago, link }
const section1 = [
  {
    id: 1,
    number: "01",
    title: "Nikki Glaser's Monologue at the 2026 Golden Globes",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/nikki-glasers-monologue-golden-globes-2026"
  },
  {
    id: 2,
    number: "02",
    title: "Tips to Avoid Stomach Trouble When You Travel",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/tips-avoid-stomach-trouble-travel"
  },
  {
    id: 3,
    number: "03",
    title: "Documentary Revisits Case Against TV's 'Frugal Gourmet'",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/documentary-frugal-gourmet"
  },
  {
    id: 4,
    number: "04",
    title: "All Earrings in Code Violet - Complete Guide",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/code-violet-earrings-guide"
  },
  {
    id: 5,
    number: "05",
    title: "Steve Kerr Rejects Reality as Warriors Admit Disadvantage",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    id: 6,
    number: "06",
    title: "Genshin Impact Luna IV Preload Guide",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/genshin-impact-luna-iv-preload"
  },
  {
    id: 7,
    number: "07",
    title: "ENHYPEN's Sunghoon Faces Dangerous Airport Chase",
    author: "Admin",
    time_ago: "12 Ene",
    link: "/post/enhypen-sunghoon-airport-chaos"
  },
  {
    id: 8,
    number: "08",
    title: "Why Sleeping on a Consistent Schedule Is Important",
    author: "Admin",
    time_ago: "11 Ene",
    link: "/post/consistent-sleep-schedule-health"
  },
]

// Section2: Main carousel slider
// Format: { id, bgImage, category, desc, author, date, seemore, link }
const section2 = [
  {
    id: 1,
    bgImage: "https://static01.nyt.com/images/2026/01/12/multimedia/12cul-globes-best-worst-bkqw/12cul-globes-best-worst-bkqw-mediumSquareAt3X.jpg",
    category: "Crush Files",
    desc: "Nikki Glaser's Monologue, Teyana Taylor's Speech and Other Moments From the 2026 Globes",
    author: "Admin",
    date: "12 Ene 2026",
    seemore: true,
    link: "/post/nikki-glasers-monologue-golden-globes-2026"
  },
  {
    id: 2,
    bgImage: "https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg",
    category: "Pop Picks",
    desc: "All Earrings in Code Violet and How to Get Them - Complete Guide",
    author: "Admin",
    date: "12 Ene 2026",
    seemore: true,
    link: "/post/code-violet-earrings-guide"
  },
  {
    id: 3,
    bgImage: "https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200",
    category: "Pop Picks",
    desc: "Steve Kerr Rejects Reality as Warriors Locker Room Admits Major Disadvantage",
    author: "Admin",
    date: "12 Ene 2026",
    seemore: true,
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    id: 4,
    bgImage: "https://staticg.sportskeeda.com/editor/2026/01/b2c5c-17682108697997-1920.jpg",
    category: "Crush Files",
    desc: "Fan Outrage Grows as ENHYPEN's Sunghoon Faces Dangerous Airport Chase",
    author: "Admin",
    date: "12 Ene 2026",
    seemore: true,
    link: "/post/enhypen-sunghoon-airport-chaos"
  },
]

// Section2: Side banner articles (with real images)
const sideBanners = [
  {
    id: 1,
    img: "https://static01.nyt.com/images/2026/01/05/travel/00trav101-stomach-trouble-illo/00trav101-stomach-trouble-illo-mediumSquareAt3X.jpg",
    category: "Aesthetic Life",
    title: "Tips to Avoid Stomach Trouble When You Travel",
    link: "/post/tips-avoid-stomach-trouble-travel"
  },
  {
    id: 2,
    img: "https://staticg.sportskeeda.com/editor/2026/01/d5b81-17682116761396-1920.jpg",
    category: "Pop Picks",
    title: "Genshin Impact Luna IV Preload Guide",
    link: "/post/genshin-impact-luna-iv-preload"
  },
  {
    id: 3,
    img: "https://static01.nyt.com/images/2026/01/13/multimedia/04WELL-SLEEP-SECRET1-pmcz/04WELL-SLEEP-SECRET1-pmcz-mediumSquareAt3X.jpg",
    category: "Aesthetic Life",
    title: "Why Sleeping on a Consistent Schedule Is Important",
    link: "/post/consistent-sleep-schedule-health"
  },
]

// Section3: Categories sidebar - links to category pages
// Updated counts to reflect actual 8 articles
const categories = [
  { name: "Crush Files", count: 2, link: "/category/crush-files" },
  { name: "Aesthetic Life", count: 2, link: "/category/aesthetic-life" },
  { name: "Pop Picks", count: 4, link: "/category/pop-picks" },
]

// Section3: Editor's picks - trending articles (with real images)
// Format: { id, title, img, category, author, date, link }
const editorPicks = [
  {
    id: 1,
    title: "Nikki Glaser's Monologue at the 2026 Golden Globes",
    img: "https://static01.nyt.com/images/2026/01/12/multimedia/12cul-globes-best-worst-bkqw/12cul-globes-best-worst-bkqw-mediumSquareAt3X.jpg",
    category: "Crush Files",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/nikki-glasers-monologue-golden-globes-2026"
  },
  {
    id: 2,
    title: "All Earrings in Code Violet - Complete Guide",
    img: "https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg",
    category: "Pop Picks",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/code-violet-earrings-guide"
  },
  {
    id: 3,
    title: "Steve Kerr Rejects Reality as Warriors Admit Disadvantage",
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200",
    category: "Pop Picks",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    id: 4,
    title: "ENHYPEN's Sunghoon Faces Dangerous Airport Chase",
    img: "https://staticg.sportskeeda.com/editor/2026/01/b2c5c-17682108697997-1920.jpg",
    category: "Crush Files",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/enhypen-sunghoon-airport-chaos"
  },
]

// Section3: Lifestyle articles (with real images)
const lifestyle = [
  {
    id: 1,
    title: "Tips to Avoid Stomach Trouble When You Travel",
    img: "https://static01.nyt.com/images/2026/01/05/travel/00trav101-stomach-trouble-illo/00trav101-stomach-trouble-illo-mediumSquareAt3X.jpg",
    category: "Aesthetic Life",
    link: "/post/tips-avoid-stomach-trouble-travel"
  },
  {
    id: 2,
    title: "Why Sleeping on a Consistent Schedule Is Important",
    img: "https://static01.nyt.com/images/2026/01/13/multimedia/04WELL-SLEEP-SECRET1-pmcz/04WELL-SLEEP-SECRET1-pmcz-mediumSquareAt3X.jpg",
    category: "Aesthetic Life",
    link: "/post/consistent-sleep-schedule-health"
  },
]

// Section4: Center post carousel (with real images)
// Format: { id, pic, category, title, author, date, link }
const centerpost = [
  {
    id: 1,
    pic: "https://static01.nyt.com/images/2026/01/14/multimedia/14FD-FRUGAL-GOURMET-01-mtvf/FD-FRUGAL-GOURMET-01-mtvf-mediumSquareAt3X.jpg",
    category: "Pop Picks",
    title: "A New Documentary Revisits Case Against TV's 'Frugal Gourmet'",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/documentary-frugal-gourmet"
  },
  {
    id: 2,
    pic: "https://staticg.sportskeeda.com/editor/2026/01/d5b81-17682116761396-1920.jpg",
    category: "Pop Picks",
    title: "Genshin Impact Luna IV Preload Guide for All Devices",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/genshin-impact-luna-iv-preload"
  },
  {
    id: 3,
    pic: "https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200",
    category: "Pop Picks",
    title: "Steve Kerr Rejects Reality as Warriors Admit Major Disadvantage",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    id: 4,
    pic: "https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg",
    category: "Pop Picks",
    title: "All Earrings in Code Violet and How to Get Them",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/code-violet-earrings-guide"
  },
]

// Section5: Leading/featured articles (with real images)
// Format: { id, pic, category, title, excerpt, author, date, link }
const leadingdata = [
  {
    id: 1,
    pic: "https://static01.nyt.com/images/2026/01/12/multimedia/12cul-globes-best-worst-bkqw/12cul-globes-best-worst-bkqw-mediumSquareAt3X.jpg",
    category: "Crush Files",
    title: "Nikki Glaser's Monologue, Teyana Taylor's Speech and Other Moments From the 2026 Globes",
    excerpt: "Nikki Glaser returned as host and killed, while Teyana Taylor delivered the speech of the night.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/nikki-glasers-monologue-golden-globes-2026"
  },
  {
    id: 2,
    pic: "https://staticg.sportskeeda.com/editor/2026/01/b2c5c-17682108697997-1920.jpg",
    category: "Crush Files",
    title: "Fan Outrage Grows as ENHYPEN's Sunghoon Faces Dangerous Airport Chase",
    excerpt: "ENHYPEN's Sunghoon encountered chaos at Incheon Airport with no security.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/enhypen-sunghoon-airport-chaos"
  },
]

// Section7: Fast food / featured grid (with real images)
// Format: { id, img, category, title, author, date, link }
const fastfood = [
  {
    id: 1,
    img: "https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg",
    category: "Pop Picks",
    title: "All Earrings in Code Violet and How to Get Them",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/code-violet-earrings-guide"
  },
  {
    id: 2,
    img: "https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200",
    category: "Pop Picks",
    title: "Steve Kerr Rejects Reality as Warriors Admit Disadvantage",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    id: 3,
    img: "https://staticg.sportskeeda.com/editor/2026/01/d5b81-17682116761396-1920.jpg",
    category: "Pop Picks",
    title: "Genshin Impact Luna IV Preload Guide",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/genshin-impact-luna-iv-preload"
  },
]

// Section8: Latest posts (main column) - all 8 articles with real images
// Format: { id, pic, category, title, excerpt, author, date, link }
const latestpost = [
  {
    id: 1,
    pic: "https://static01.nyt.com/images/2026/01/12/multimedia/12cul-globes-best-worst-bkqw/12cul-globes-best-worst-bkqw-mediumSquareAt3X.jpg",
    category: "Crush Files",
    title: "Nikki Glaser's Monologue, Teyana Taylor's Speech and Other Moments From the 2026 Globes",
    excerpt: "Nikki Glaser returned as host and killed, while Teyana Taylor delivered the speech of the night. Then there were those awful production choices.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/nikki-glasers-monologue-golden-globes-2026"
  },
  {
    id: 2,
    pic: "https://static01.nyt.com/images/2026/01/05/travel/00trav101-stomach-trouble-illo/00trav101-stomach-trouble-illo-mediumSquareAt3X.jpg",
    category: "Aesthetic Life",
    title: "Tips to Avoid Stomach Trouble When You Travel",
    excerpt: "Some people have guts of steel, while others are a little more sensitive. Here are tips for preventing stomach discomfort and motion sickness on trips.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/tips-avoid-stomach-trouble-travel"
  },
  {
    id: 3,
    pic: "https://static01.nyt.com/images/2026/01/14/multimedia/14FD-FRUGAL-GOURMET-01-mtvf/FD-FRUGAL-GOURMET-01-mtvf-mediumSquareAt3X.jpg",
    category: "Pop Picks",
    title: "A New Documentary Revisits Case Against TV's 'Frugal Gourmet'",
    excerpt: "Three decades after allegations that the chef Jeff Smith assaulted boys, a documentary series delves further into his story.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/documentary-frugal-gourmet"
  },
  {
    id: 4,
    pic: "https://staticg.sportskeeda.com/editor/2026/01/55553-17682121241697-1920.jpg",
    category: "Pop Picks",
    title: "All Earrings in Code Violet and How to Get Them",
    excerpt: "You can find several earrings in Code Violet while exploring the vast map. Here's a complete guide to finding them all.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/code-violet-earrings-guide"
  },
  {
    id: 5,
    pic: "https://image-cdn.essentiallysports.com/wp-content/uploads/Stephen-Curry-and-Steve-Kerr.jpg?width=1200",
    category: "Pop Picks",
    title: "Steve Kerr Rejects Reality as Warriors Locker Room Admits Major Disadvantage",
    excerpt: "Stephen Curry and Jimmy Butler's 30 points each weren't enough against the Hawks.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    id: 6,
    pic: "https://staticg.sportskeeda.com/editor/2026/01/d5b81-17682116761396-1920.jpg",
    category: "Pop Picks",
    title: "Genshin Impact Luna IV Preload Guide and Size for PC, Android, and iOS",
    excerpt: "The Genshin Impact Luna IV preload is available for you on your preferred device, allowing you to pre-install the game files.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/genshin-impact-luna-iv-preload"
  },
  {
    id: 7,
    pic: "https://staticg.sportskeeda.com/editor/2026/01/b2c5c-17682108697997-1920.jpg",
    category: "Crush Files",
    title: "Fan Outrage Grows as ENHYPEN's Sunghoon Faces Dangerous Airport Chase",
    excerpt: "ENHYPEN's Sunghoon arrived in Seoul from a solo engagement in Shanghai, encountering chaos at Incheon Airport with no security.",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/enhypen-sunghoon-airport-chaos"
  },
  {
    id: 8,
    pic: "https://static01.nyt.com/images/2026/01/13/multimedia/04WELL-SLEEP-SECRET1-pmcz/04WELL-SLEEP-SECRET1-pmcz-mediumSquareAt3X.jpg",
    category: "Aesthetic Life",
    title: "Why Sleeping on a Consistent Schedule Is Important For Health",
    excerpt: "Working this overlooked practice into your sleep routine could have real benefits for your health.",
    author: "Admin",
    date: "11 Ene 2026",
    link: "/post/consistent-sleep-schedule-health"
  },
]

// Section8: Sidebar popular posts
// Format: { title, author, date, link }
const listdata = [
  {
    title: "Nikki Glaser's Monologue at the 2026 Golden Globes",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/nikki-glasers-monologue-golden-globes-2026"
  },
  {
    title: "All Earrings in Code Violet - Complete Guide",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/code-violet-earrings-guide"
  },
  {
    title: "Steve Kerr Rejects Reality as Warriors Admit Disadvantage",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/steve-kerr-warriors-locker-room"
  },
  {
    title: "Why Sleeping on a Consistent Schedule Is Important For Health",
    author: "Admin",
    date: "11 Ene 2026",
    link: "/post/consistent-sleep-schedule-health"
  },
  {
    title: "Genshin Impact Luna IV Preload Guide",
    author: "Admin",
    date: "12 Ene 2026",
    link: "/post/genshin-impact-luna-iv-preload"
  },
]

export {
  section1,
  section2,
  sideBanners,
  categories,
  editorPicks,
  lifestyle,
  centerpost,
  leadingdata,
  fastfood,
  latestpost,
  listdata,
}
