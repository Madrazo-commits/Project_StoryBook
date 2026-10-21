const authorName = 'Your Wattpad Name';

const books = [
  {
    title: 'Favorite Crime', series: 'Legacy Series', genre: 'Romantic Suspense', art: 'mystery', coverImage: '855628684_29217166627908423_3837227324586789937_n.jpg',
    synopsis: 'A woman returns to the city where her family name became a scandal and finds the one person who remembers what really happened.',
    chapterTitle: 'The Alibi We Kept',
    story: `Mara found the old photograph beneath the loose floorboard: her father, a stranger, and a girl with Mara's own unmistakable eyes. The date on the back was the night the museum jewels disappeared—the crime her family had spent years denying.\n\nAt the police station, she met Elias, the quiet archivist who had once promised to leave town with her. He studied the picture and shook his head. “Your father didn't steal anything. He was helping someone escape.”\n\nThe stranger in the photograph was Elias's mother. Together they followed the trail to a train ticket, a hidden letter, and a truth both families had mistaken for betrayal.\n\nBy sunrise, the case was closed. Mara kept the photograph. Elias kept his promise, this time without asking her to run.`
  },
  {
    title: 'Melody of the Past', series: 'Legacy Series', genre: 'Historical Romance', art: 'mystery', coverImage: '852677397_1831020245696543_1905776536869753416_n.jpg',
    synopsis: 'An old piano tune connects a present-day music student to a love story her grandmother never finished telling.',
    chapterTitle: 'The Last Measure',
    story: `The piano in Lola's attic had one stubborn key. Every afternoon, Lira pressed it and listened to the same unfinished melody. When she played the notes at the town recital, an elderly man in the back row began to cry.\n\nHe introduced himself as Andres, the boy who had written the tune with her grandmother decades ago. He had kept the final measure in a letter, afraid to send it after the war separated them.\n\nLira placed the letter on the piano and played the ending. The melody did not sound sad anymore. It sounded like a door opening.\n\nAndres smiled at the empty chair beside him. “She always knew how it ended,” he whispered. Lira understood then: some songs wait for someone else to bring them home.`
  },
  {
    title: 'Left in the Dark', series: 'Legacy Series', genre: 'Mystery', art: 'mystery', coverImage: '852273992_936199175980894_650652674185135555_n.jpg',
    synopsis: 'During a blackout, a young witness discovers that the secrets hidden in her family home are more dangerous than the darkness outside.',
    chapterTitle: 'When the Lights Went Out',
    story: `The lights died at exactly 9:17, the same minute her brother disappeared twelve years ago. Nina lit a candle and heard three knocks from the locked study.\n\nInside, the family clock was ticking backward. Behind it she found a stack of letters addressed to her—one for every birthday her mother had refused to celebrate. They explained that her brother had not run away. He had been sent to live with an aunt after witnessing their father's crime.\n\nNina called the number on the last envelope. A man's voice answered, older but familiar. “I was wondering when you'd find those.”\n\nThe power returned. The clock stopped. This time, Nina knew exactly where to go.`
  },
  {
    title: 'End of Forever', series: 'Legacy Series', genre: 'Romantic Drama', art: 'mystery', coverImage: '853866953_1144917801393992_2692066968249523513_n.jpg',
    synopsis: 'Two childhood friends reunite to sell the seaside house where they once promised never to say goodbye.',
    chapterTitle: 'One More Summer',
    story: `The house was smaller than Sam remembered, but the sea still reached the porch at high tide. He had come to sign the sale papers; Aya had come to pack the books they once read aloud to each other.\n\nThey found their childhood time capsule beneath the stairs. Inside were two notes: hers promised to become a doctor; his promised to come back. Neither promise had survived the years unchanged.\n\n“Forever was a big word for two kids,” Aya said. “Maybe it just meant we mattered.”\n\nSam looked at the unsigned papers, then at the sunrise painting the water gold. They agreed to keep the house one more summer—not because nothing had changed, but because some things were still worth choosing.`
  },
  {
    title: 'Under the Stars', series: 'Tonjuarez Series', genre: 'Romance', art: 'adventure', coverImage: '844068083_1672958487578071_7773598201061820737_n.jpg',
    synopsis: 'A stargazing club president and a skeptical newcomer find common ground on the quietest hill in town.',
    chapterTitle: 'A Map of Us',
    story: `Nico joined the astronomy club to avoid the noisy student council. Bea joined because she wanted to prove the stars were just distant lights. Their first meeting ended with a broken telescope and a shared laugh.\n\nOn the hill above town, Nico showed her how to find the North Star. Bea showed him how to read the handwritten map her grandfather had left behind. The map marked places where he had watched the sky with her grandmother.\n\nThey reached the final mark just before midnight. It was the hill where they stood.\n\n“Still think they're only lights?” Nico asked. Bea looked at him instead of the sky. “I think some things are easier to see when someone points them out.”`
  },
  {
    title: 'Trophy of the Sunsets', series: 'Tonjuarez Series', genre: 'Sports Romance', art: 'campus', coverImage: '851175118_1420807380239600_2357345135663050176_n.jpg',
    synopsis: 'A competitive beach runner and a sunset photographer learn that not every victory needs a medal.',
    chapterTitle: 'The Finish Line',
    story: `Every evening, Javi trained along the shore while Sol photographed the sunset from the finish line. He wanted a medal. She wanted one perfect picture before the old pier was demolished.\n\nThe day of the race, a sudden storm scattered the runners. Javi spotted Sol's camera bag near the water and turned back. He reached the line last, soaked and empty-handed.\n\nSol showed him the photo she'd managed to save: Javi running toward the pier, the sunset burning behind him. The race organizers gave him a special award for helping another person.\n\nHe held the trophy while Sol took one more picture. Neither of them cared that it wasn't gold.`
  },
  {
    title: 'Ray of Light in Paradise', series: 'Tonjuarez Series', genre: 'Adventure Romance', art: 'adventure', coverImage: '850432835_1869137781097808_882996924953319508_n.jpg',
    synopsis: 'Stranded on a remote island after a storm, two travel writers must cooperate to find a safe way home.',
    chapterTitle: 'The Lighthouse Path',
    story: `The storm left Dani and Luis on the wrong side of the island with one working phone and a map printed before the new trail was built. They argued until a narrow beam swept across the cliffs.\n\nFollowing it, they found an abandoned lighthouse and a caretaker who had been waiting for the ferry to return. He showed them the safe path down the hill, lit by small solar lamps the villagers had installed.\n\nDani had planned to write about paradise as an escape. Luis, who had spent the whole trip missing home, helped her see it differently: paradise was people making sure no one was left behind.\n\nThe ferry arrived at dawn. They boarded together, already planning their next story.`
  },
  {
    title: 'Raindrops of Astalier', series: 'Tonjuarez Series', genre: 'Fantasy', art: 'adventure', coverImage: '854529923_29732040376399300_4776985293733936005_n.jpg',
    synopsis: 'In a kingdom where rain carries memories, a young mapmaker must return a stolen storm before the city forgets its past.',
    chapterTitle: 'The Rain Remembered',
    story: `In Astalier, rain fell only when someone remembered. When the clouds vanished, mapmaker Elian discovered the royal weather jar had been stolen.\n\nShe followed blue drops across the rooftops to a boy named Soren, who had taken the storm to save his grandmother's fading memories. He confessed that he did not know how to return it.\n\nElian opened the jar. Rain rushed into the empty streets. People paused as memories came back: a baker's first loaf, a sailor's homecoming, a song everyone thought they had forgotten.\n\nSoren's grandmother remembered his name. Elian added a new mark to her map—a small blue raindrop beside the word home.`
  },
  {
    title: 'A Walking Canvas', series: 'Rare Disorder Series', genre: 'Contemporary Drama', art: 'art', coverImage: '837567529_1152142687343800_4186808028270424220_n.jpg',
    synopsis: 'A muralist who sees color in every emotion helps a quiet classmate turn a blank wall into a place of belonging.',
    chapterTitle: 'The Color Between Us',
    story: `Tess painted the school walls in colors other people couldn't name. She said each shade was a feeling, and the blank wall behind the gym looked, to her, like a held breath.\n\nA new student named Noel watched her work every lunch break but never spoke. One day he left a charcoal sketch beside her paint cans: a small figure standing beneath a huge sky.\n\nTogether they covered the wall with a sunrise, then invited the whole class to add one shape. Noel painted a bright yellow door.\n\nWhen Tess asked where it led, he shrugged. “Somewhere people can walk in without explaining themselves.” The next day, someone left the door open.`
  },
  {
    title: 'A Manacled Patient', series: 'Rare Disorder Series', genre: 'Medical Mystery', art: 'art', coverImage: '851924314_1501211935393335_5079012460628448722_n.jpg',
    synopsis: "A medical intern questions a patient's mysterious restraints and uncovers a mistake buried in an old hospital file.",
    chapterTitle: 'The File in Room Seven',
    story: `Intern Mina noticed that the patient in Room Seven flinched whenever the hallway clock chimed. His chart called him uncooperative, but his wrists were bruised and the restraints were too tight.\n\nShe asked the night nurse to check the old files. A forgotten note revealed that the patient had been restrained during a procedure years earlier, and the sound of the same clock had become a warning in his mind.\n\nMina requested a safer care plan and sat beside him while the clock chimed. This time she explained each sound before it came.\n\nBy morning, he was able to tell the doctors his name. Mina wrote it clearly at the top of the chart.`
  },
  {
    title: "A Warrior's Inescapable", series: 'Rare Disorder Series', genre: 'Fantasy Adventure', art: 'adventure', coverImage: '848292576_1782061573086284_3327474963467301317_n.jpg',
    synopsis: 'A warrior trapped inside an enchanted battlefield must choose between winning the war and ending its repeating curse.',
    chapterTitle: 'The Door in the Battle',
    story: `Every dawn, Captain Rhea woke on the same battlefield. Every dusk, the enemy's arrow struck the same shield. The curse reset the war before anyone could win.\n\nOn the hundredth morning, she lowered her sword. Across the field, the opposing commander did the same. They found a stone door beneath the old bridge, its inscription asking for the one thing neither army could surrender: the need to be right.\n\nRhea offered her crown. The commander offered his banner. The door opened, and the battlefield became a quiet meadow.\n\nWhen the soldiers woke, there was no enemy in front of them—only people tired of fighting.`
  },
  {
    title: 'A Monster on the Loose', series: 'Rare Disorder Series', genre: 'Supernatural Thriller', art: 'art', coverImage: '855382818_1634652638190068_2043466614442474177_n.jpg',
    synopsis: 'When strange footprints appear around town, two siblings discover the so-called monster is protecting something fragile.',
    chapterTitle: 'Footprints by the Creek',
    story: `The town blamed the monster for the missing chickens and the scratches on the school fence. Jo and her brother followed its enormous footprints to the creek, carrying a flashlight and a very small sandwich.\n\nThey found no beast—only a frightened black dog tangled in fishing line, guarding three tiny puppies beneath the bridge. The supposed monster had been the dog's muddy paws magnified by the rain.\n\nJo called the animal shelter. Her brother shared his sandwich while they waited.\n\nBy morning, the town had a new story to tell: the creature on the loose was a family looking for safety. The fence got repaired, and the dog got a name: Shadow.`
  },
  {
    title: 'His Greatest Sorrow', series: 'Wretchedness Series', genre: 'Family Drama', art: 'drama', coverImage: '855439534_2607101959787203_8127693240631017876_n.jpg',
    synopsis: 'A grieving musician finds an unfinished song that helps him reconnect with the brother he stopped speaking to.',
    chapterTitle: "The Song He Couldn't Finish",
    story: `After their mother's funeral, Tomas stopped answering his brother's calls. He blamed Nico for leaving town; Nico blamed Tomas for staying angry. Neither said what they really missed.\n\nWhile sorting their mother's things, Tomas found a voice recording. She was humming a song the boys had started as children. The final verse was missing.\n\nHe sent Nico the melody. Nico arrived that evening with a guitar and the words he'd remembered. They sang badly, then laughed, then cried without turning away.\n\nThe song was still unfinished, but the brothers were sitting at the same table again. Tomas realized sorrow could stay—and still make room for someone beside him.`
  },
  {
    title: "The Vice Mayor's Misery", series: 'Wretchedness Series', genre: 'Political Drama', art: 'drama', coverImage: '847706108_2316452015950330_8987516265482320619_n.jpg',
    synopsis: 'A vice mayor facing public criticism learns that listening to residents matters more than protecting a perfect image.',
    chapterTitle: 'The Open Mic',
    story: `Vice Mayor Celso expected a quiet community meeting. Instead, the residents brought photographs of a flooded street, a broken ramp, and a clinic with no evening hours.\n\nHis staff urged him to postpone the discussion until the cameras were gone. Celso looked at the soaked shoes of the people waiting outside and opened the doors himself.\n\nA teenager spoke first. She needed a safe route to school. Celso wrote every concern on the board and assigned a date for each answer—not a promise to fix everything overnight, but a promise to report back.\n\nThe next meeting was just as crowded. This time, the residents brought suggestions, and Celso brought the first completed repairs.`
  },
  {
    title: 'Mistreated Wife', series: 'Wretchedness Series', genre: 'Empowerment Drama', art: 'drama', coverImage: '854529923_1767371994559226_7312456867519601543_n.jpg',
    synopsis: 'After years of putting everyone else first, a wife begins rebuilding her confidence with help from a trusted friend.',
    chapterTitle: 'A Room of Her Own',
    story: `Lina had forgotten what it felt like to choose something for herself. When her old friend offered her a quiet room above the bakery, she brought one suitcase and the notebook she had hidden for years.\n\nThe pages were full of drawings: gardens, dresses, bright windows. Lina started sketching again, one small design each evening. Her first customer was a neighbor who wanted a dress for her daughter's graduation.\n\nOn the day she delivered it, Lina stood in the doorway and felt the sun on her face. Her life was not suddenly simple, but it belonged to her again.\n\nShe opened the notebook to a clean page and drew a door with no lock.`
  },
  {
    title: 'Not Your Asset', series: 'Accounting Series', genre: 'Workplace Romance', art: 'drama', coverImage: '851890880_1632132911792123_5796803235616785801_n.jpg',
    synopsis: 'A junior accountant pushes back when a company treats her ideas like property—and discovers an unexpected ally.',
    chapterTitle: 'More Than a Number',
    story: `When Bea's savings plan helped the small firm avoid layoffs, her manager presented it as his own. She had the spreadsheets to prove otherwise, but she wanted more than credit—she wanted a fair workplace.\n\nAuditor Marco listened without interrupting. Together they prepared a clear report showing who built the plan and how it helped the team. Bea presented it at the staff meeting herself.\n\nThe manager apologized, and the company changed its policy for sharing credit. Marco asked Bea to celebrate over coffee. She agreed, on one condition: no talking about balance sheets.\n\nHe smiled. “Only if you promise not to calculate the tip.”`
  },
  {
    title: 'Just Your Liability', series: 'Accounting Series', genre: 'Romantic Comedy', art: 'drama', coverImage: '851864218_1118788077790453_1108565040232062883_n.jpg',
    synopsis: "Two rival accountants are assigned to untangle a café's books and discover their biggest risk is working together.",
    chapterTitle: 'The Coffee Audit',
    story: `Miko and Rae both wanted the promotion, so their manager assigned them to audit the same neighborhood café. They disagreed about everything except the coffee, which they both claimed was terrible.\n\nThe books showed a monthly loss. The café owner showed them a box of handwritten orders that had never made it into the system. Once the missing sales were counted, the café was thriving.\n\nRae laughed when Miko spilled a latte on the corrected report. He laughed when she rescued the paper with a napkin.\n\nThey shared the last clean cup. Neither got the promotion alone; they were offered a new team to lead together.`
  },
  {
    title: 'Parting Our Equities', series: 'Accounting Series', genre: 'Breakup Drama', art: 'drama', coverImage: '846346437_2093403298203392_7349975042458313787_n.jpg',
    synopsis: 'Former partners must divide their tiny design studio fairly, while deciding what parts of their shared past to keep.',
    chapterTitle: 'The Fair Split',
    story: `When their design studio closed, former partners Eli and June had one final spreadsheet to complete. They divided the chairs, the lamps, and the plants. Then they reached the folder labeled “First Ideas.”\n\nInside were sketches from the night they met, including a little house they had designed for fun. June wanted to keep the drawings. Eli did too, but neither wanted the other to think it was an excuse to start again.\n\nThey scanned the pages and made two copies. The original stayed in the empty office, taped beside the front door for whoever came next.\n\nTheir partnership ended with signatures. Their friendship, they decided, did not need a ledger.`
  },
  {
    title: "Trials that We Can't Balance", series: 'Accounting Series', genre: 'Legal Drama', art: 'drama', coverImage: '854925898_1102928639139421_5536259331440701259_n.jpg',
    synopsis: 'A law student and an accountant uncover a bookkeeping error that could clear an innocent shop owner’s name.',
    chapterTitle: 'The Missing Receipt',
    story: `A shop owner was accused of hiding donations after a community fundraiser came up short. Law student Pio and accounting intern Sam volunteered to review the records.\n\nThey found a receipt folded into an old envelope. The payment had been entered twice as an expense, making the totals appear wrong. It was a simple mistake with a serious consequence.\n\nAt the hearing, Sam explained the numbers plainly, and Pio asked the questions that showed how the error happened. The shop owner was cleared.\n\nOutside the courthouse, they stood beneath the same rain cloud and laughed at their soaked notes. Some trials were hard to balance, but truth gave them a place to start.`
  },
  {
    title: 'Closing Entries', series: 'Accounting Series', genre: 'Hopeful Drama', art: 'drama', coverImage: '847938441_1622083406050137_7435849597041982701_n.jpg',
    synopsis: 'On the final day of a family bookstore, a young accountant finds a way to close the books without closing its doors.',
    chapterTitle: 'A New Page',
    story: `The family bookstore was closing at six. Neri had come to help her aunt finish the accounts, but every shelf held a reason to delay.\n\nThey found an old notebook filled with requests from readers: a quiet reading hour, a children's corner, a shelf for local writers. Neri added the costs to the final report. The numbers showed that a smaller shop could stay open if the community helped.\n\nAt six, the sign changed from CLOSED to “New hours coming soon.” A week later, the bookstore reopened with fewer shelves and more chairs.\n\nNeri filed the closing entries for the old business. On the next page, she wrote its new name.`
  },
  {
    title: 'Chasing the Sun', series: 'College Series', genre: 'Coming-of-Age Romance', art: 'campus', coverImage: '848773457_1461049369254827_1854683615114285898_n.jpg',
    synopsis: 'A scholarship student and a sunrise runner learn that ambition can be shared without becoming a competition.',
    chapterTitle: 'Before the First Class',
    story: `Every morning, Inez ran to the campus hill before her first lecture. She was chasing a scholarship deadline and the sunrise, though only one of them appeared on her calendar.\n\nShe kept meeting Cal, who ran slowly and carried two bottles of water. When Inez twisted her ankle, he walked beside her instead of finishing his route. They watched the sun reach the rooftops together.\n\nCal admitted he was taking a semester off to help at home. Inez told him she was afraid one mistake would cost her everything.\n\nThey made a plan: she would apply, he would return when he could, and neither would measure their worth by how fast they arrived.`
  },
  {
    title: 'Taming the Waves', series: 'College Series', genre: 'Campus Adventure', art: 'adventure', coverImage: '858091732_1897538081658721_3226128499587950531_n.jpg',
    synopsis: 'A cautious marine biology student joins an impulsive surfer to save a stretch of beach before the semester ends.',
    chapterTitle: 'The Tide Turns',
    story: `Kai knew every safe tide pool on the coast. Mira knew how to organize a campus petition. Neither knew how to keep the beach clean after the storm carried plastic across the sand.\n\nThey gathered volunteers, built a sorting station, and asked the local shop owners to help. On cleanup day, the waves were rough, so Kai moved everyone farther from the water and Mira redirected the teams.\n\nBy sunset, they had filled twenty bags and collected enough signatures to start a monthly cleanup. Mira handed Kai a clipboard. “You lead the next one.”\n\nHe grinned. “Only if you promise to come surfing after.” She promised to try.`
  },
  {
    title: 'Loving the Sky', series: 'College Series', genre: 'Inspirational Romance', art: 'campus', coverImage: '847224294_1793100965227168_8335673392946947044_n.jpg',
    synopsis: 'An aspiring pilot and a student photographer help each other face the fears that keep their dreams grounded.',
    chapterTitle: 'The View from Above',
    story: `Drew studied flight paths but had never boarded a plane. Jo carried a camera everywhere but avoided the campus tower after a childhood fall.\n\nFor their class project, they planned to photograph the city from the observation deck. Jo climbed the first flight, stopped, and admitted she was scared. Drew admitted he had memorized every safety checklist because he was scared too.\n\nThey took the elevator together. From the top, Jo captured the clouds between buildings while Drew described the routes he hoped to fly one day.\n\nNeither fear vanished. But they left with a photograph, a new plan, and the understanding that courage could simply mean taking the next small step.`
  },
  {
    title: 'In the Midst of the Crowd', series: "The Losers' Club Series", genre: 'Friendship Drama', art: 'campus', coverImage: '852691963_1726058261789497_1402916522619540708_n.jpg',
    synopsis: 'A group of overlooked classmates form a club and learn that being seen starts with seeing one another.',
    chapterTitle: 'A Table for Everyone',
    story: `The cafeteria was full, but the four students at the last table felt invisible. They started calling themselves the Losers' Club as a joke, then made a rule: anyone sitting alone could join.\n\nBy Friday, their table held a chessboard, a sketchbook, and a plate of shared fries. When a new student hovered nearby, they moved their bags and made room without asking for an explanation.\n\nAt the school fair, they entered a team project and won no prize. They did, however, fill their table with new friends.\n\n“Still losers?” one asked. The others looked around at the crowded chairs. “Only at being alone,” someone answered.`
  },
  {
    title: "Mistakes We Can't Laugh About", series: "The Losers' Club Series", genre: 'Realistic Drama', art: 'campus', coverImage: '847828056_1823510149139888_3876113386514100972_n.jpg',
    synopsis: 'After a hurtful joke spreads through school, the friends must take responsibility and rebuild trust one honest conversation at a time.',
    chapterTitle: 'The Apology That Stayed',
    story: `A joke from the group chat reached the whole class before lunch. It had embarrassed their friend Lio, and deleting it could not undo the hurt.\n\nThe Losers' Club wanted to fix everything with a funny poster. Lio said he did not want another joke. He wanted them to admit what they had done and stop sharing private messages.\n\nThey apologized without adding excuses. Then they asked the teacher to help them create a class agreement about privacy. Lio did not forgive them immediately, and they did not demand that he should.\n\nA week later he sat with them again. Trust, they learned, was not a punchline. It was something you practiced.`
  },
  {
    title: 'Words Written in Water', series: "The Losers' Club Series", genre: 'Literary Fiction', art: 'campus', coverImage: '850614276_1736715050960420_3752450347022553721_n.jpg',
    synopsis: 'A student finds messages written on a riverside wall and brings the neighborhood together to save the waterway.',
    chapterTitle: 'The River Keeps Them',
    story: `After the rain, Mina found words scratched into the muddy riverbank: “We were here. We cared.” The writing vanished as the water rose.\n\nShe photographed the message and showed the Losers' Club. They discovered that the river had once been a gathering place, before litter and a broken path drove people away. They organized a cleanup and asked older neighbors to share their memories.\n\nAt the next rain, they painted the message on a sign above the bank, where the water could not erase it. The neighborhood added its own lines beneath.\n\nMina watched the river carry the rain onward. Some words disappeared, but what they inspired stayed.`
  },
  {
    title: 'Could Have Been But Never Was', series: "The Losers' Club Series", genre: 'Bittersweet Romance', art: 'campus', coverImage: '852600430_1082387574641674_7710146715744623955_n.jpg',
    synopsis: 'Two friends revisit the almost-confession they avoided for years and find a kinder ending than the one they imagined.',
    chapterTitle: 'The Letter We Kept',
    story: `At graduation, Nica found the letter she had written to Jules in their first year and never sent. It said she liked him, but the last line asked him to pretend he had never read it.\n\nJules read it beneath the old acacia tree. He smiled, then handed her a folded note of his own. He had written one too, on the same day, and never sent it.\n\nThey sat together while the campus emptied. “Maybe we were meant to meet each other then,” Jules said, “even if we weren't meant to become a couple.”\n\nNica tucked both letters into her notebook. Their almost-story had an ending, and it was a gentle one.`
  },
  {
    title: 'Something Phenomenal', series: 'Something Series', genre: 'Magical Realism', art: 'romance', coverImage: '845529668_1089859277282659_4764676037254510078_n.jpg',
    synopsis: 'A quiet baker discovers that every loaf she makes gives someone the courage to say what they have been holding back.',
    chapterTitle: 'The Bread That Glowed',
    story: `The first loaf glowed only when someone told the truth near it. At least, that was what Mara thought after her brother confessed he was leaving town and the bread shone like a lantern.\n\nShe began leaving warm loaves on the bakery counter. A customer apologized to her sister. A shy boy asked to join the neighborhood band. The bread never forced anyone to speak; it simply made the room feel safe enough.\n\nOne night, Mara stood before the last loaf and admitted she was afraid of running the bakery alone. Her friends arrived with aprons and flour.\n\nThe bread glowed. Mara laughed. It was phenomenal what a little honesty could make possible.`
  },
  {
    title: 'Something Spectacular', series: 'Something Series', genre: 'Inspirational Fantasy', art: 'romance', coverImage: '846206847_1107640721671601_6172130600547849729_n.jpg',
    synopsis: 'A town that has forgotten how to celebrate prepares one ordinary student to put on a show no one will forget.',
    chapterTitle: 'The Smallest Stage',
    story: `The town canceled its annual festival because nobody could agree on what would make it spectacular. Lena, who had never performed on stage, offered to organize one final show.\n\nShe asked everyone to bring something small: a joke, a recipe, a song, a story. The stage filled with a grandfather's paper birds, a child's dance, and a baker's lopsided cake.\n\nWhen the lights went out, the crowd held up their phones. The whole square became a field of stars. Lena stepped forward and thanked everyone for making the show together.\n\nIt was not perfect. It was better: something the town had made for itself.`
  },
  {
    title: 'A Perfect Conquest', series: 'Standalone Story', genre: 'Romantic Drama', art: 'romance', coverImage: '852677397_1318102160346776_3557576070804334511_n.jpg',
    synopsis: 'A new beginning arrives when two people with very different plans cross paths at the edge of change.',
    chapterTitle: 'The First Step',
    story: `Mira had always believed that a perfect plan could protect her from disappointment. She had the lists, the deadlines, and a carefully drawn map of the life she meant to lead.\n\nThen she met Adrian, who had no map at all—only a quiet confidence that the next step would appear once he was brave enough to take it. They disagreed about nearly everything, but he never asked her to give up her plans. He only asked whether she had left room for anything she had not planned.\n\nThat evening, Mira crossed out one appointment and wrote a new one: meet Adrian for coffee, no schedule attached.\n\nIt was not a conquest of the world. It was the start of choosing her own way through it.`
  }
];

const grid = document.getElementById('bookGrid');
const searchInput = document.getElementById('searchInput');
const genreFilter = document.getElementById('genreFilter');
const modal = document.getElementById('bookModal');
const previousFocus = { element: null };

function wattpadSearch(title) {
  return `https://www.wattpad.com/search/${encodeURIComponent(title)}`;
}

function populateGenres() {
  [...new Set(books.map((book) => book.genre))].sort().forEach((genre) => {
    const option = document.createElement('option');
    option.value = genre;
    option.textContent = genre;
    genreFilter.append(option);
  });
}

function createCover(book) {
  const cover = document.createElement('div');
  cover.className = 'cover';

  const image = document.createElement('img');
  image.src = `images/${book.coverImage}`;
  image.alt = `${book.title} book cover`;
  cover.append(image);
  return cover;
}

function renderBooks() {
  const term = searchInput.value.toLowerCase().trim();
  const genre = genreFilter.value;
  const visibleBooks = books.filter((book) =>
    (genre === 'all' || book.genre === genre) &&
    `${book.title} ${book.series} ${book.genre} ${book.synopsis}`.toLowerCase().includes(term)
  );

  grid.replaceChildren();
  visibleBooks.forEach((book) => {
    const card = document.createElement('article');
    card.className = 'book-card';
    card.append(createCover(book));

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = book.title;

    const label = document.createElement('p');
    label.className = 'card-series';
    label.textContent = `${book.series} · ${book.genre}`;

    const button = document.createElement('button');
    button.className = 'detail-btn';
    button.type = 'button';
    button.textContent = 'Read this story';
    button.addEventListener('click', () => openBook(book, button));

    card.append(title, label, button);
    grid.append(card);
  });

  document.getElementById('bookCount').textContent =
    `${visibleBooks.length} ${visibleBooks.length === 1 ? 'story' : 'stories'}`;
  document.getElementById('emptyMessage').hidden = visibleBooks.length !== 0;
}

function openBook(book, trigger) {
  previousFocus.element = trigger;
  document.getElementById('modalSeries').textContent = book.series;
  document.getElementById('modalTitle').textContent = book.title;
  document.getElementById('modalGenre').textContent = book.genre;
  document.getElementById('modalAuthor').textContent = authorName;
  document.getElementById('modalDescription').textContent = book.synopsis;
  document.getElementById('chapterTitle').textContent = book.chapterTitle;
  document.getElementById('chapterText').textContent = book.story;

  const cover = document.getElementById('modalCover');
  cover.src = `images/${book.coverImage}`;
  cover.alt = `${book.title} book cover`;

  document.getElementById('wattpadLink').href = wattpadSearch(book.title);
  modal.hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('modalClose').focus();
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  previousFocus.element?.focus();
}

populateGenres();
renderBooks();

searchInput.addEventListener('input', renderBooks);
genreFilter.addEventListener('change', renderBooks);
document.getElementById('modalClose').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target.dataset.close === 'true') closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeModal();
});
document.getElementById('themeToggle').addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  document.getElementById('themeToggle').textContent = isDark ? '☀' : '☾';
  document.getElementById('themeToggle').setAttribute('aria-pressed', String(isDark));
});
