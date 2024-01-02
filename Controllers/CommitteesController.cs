using Humanizer;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using VTMUNC.ViewModels;

namespace VTMUNC.Controllers
{
    public class CommitteesController : Controller
    {

        private readonly CommitteesList _committees;

        public CommitteesController()
        {
            _committees = new CommitteesList();

            // General Assembly
            _committees.AddCommitteeGroup("General Assembly", new Committee[]
            {
                
                new Committee(
                    "Commission on the Status of Women (CSW)",
                    "women.jpg",
                    "The Commission on the Status of Women (CSW) is the primary intergovernmental body dedicated to promoting gender equality and women’s rights. The functional commission was established as part of the Economic and Social Commission (ECOSOC) in 1946 to address growing concerns about the United Nations’ ability to focus on gender equality. In March 2024, the 68th session of the commission will take place addressing how women in marginalized groups can achieve economic empowerment in the 21st century. For the purposes of this committee, the first topic addresses how to economically empower women in rural areas. Rural women are often the most economically disenfranchised and overlooked groups in their country. Delegates will have to grapple with how to create policies that enhance rural women’s access to social, legal, and economic services as well as how they can utilize leadership opportunities, entrepreneurship, and community participation to bolster their economic status. The second topic focuses on migrant women, another marginalized group facing increasingly difficult economic barriers. Migrant women often go under-compensated for their work because of a lack of immigration status or uncompensated homework. The third topic will focus on providing resources to eradicate maternal mortality, an issue prevalent among women in poverty. Maternal mortality, an issue found particularly in developing countries, is a pressing concern as the alarming rates of maternal deaths during pregnancy continue to rise due to complications during pregnancy and childbirth. Delegates are tasked with the responsibility of creating methods that will ensure quality access to universal maternal healthcare with the common goal of reducing maternal mortality rates. The UN possesses the ability to bring countries together to collaborate to uplift women economically when they are either forced or make the brave decision to leave their home country. This committee gives delegates the special opportunity to discuss critical issues regarding the equity and economic empowerment of marginalized women across the globe. ",
                    "jyo.jpg",
                    "Jyotsna Rathinam",
                    "Head Chair",
                    "Hi everyone!\r\nI’m Jyotsna and I am so excited to be your head chair for the Commission on the Status of Women. I’m currently a senior at Virginia Tech double majoring in economics and international relations with minors in French and data science. I’ve been involved in MUN since my sophomore year of college and am currently my team’s GA training chair. I’ve always loved GA’s ability to have young people consider intricate solutions to real-world problems, and I feel like it’s not something that happens in many other settings. Prior to college I did a lot of debate and speech in high school with NSDA and loved it. Apart from MUN, I am also co-president and founder of VT’s chapter of Amnesty International, so I always enjoy talking about issues of equity and policy improvements! In my free time, I love reading, journaling, watching Netflix shows, doing henna, and making Spotify playlists (especially if they involve Beyoncé). I am thrilled to have been able to create a committee I feel so passionate about, and I look forward to seeing you all there!\r\n",
                    "jyorathinam@vt.edu",
                    "Committees.pdf"
                    ),
                 new Committee(
                    "World Health Organization (WHO)", //com name
                    "who.png", //com pic
                    "The World Health Organization (WHO), a specialized agency of the United Nations, was\r\nestablished in 1948 in order to further international public health efforts. As the World Health Organization expanded over time, it has become an entity that is able to guide, make recommendations, pursue research, establish health campaigns, and more to promote the better health of our global society, with primary focuses on achieving universal health coverage, preparing and responding to health emergencies, and addressing overall health and well-being. In this committee, delegates must face various issues and provide resolutions to the growing problems within our society that serve as a blockade to our better health.The first issue that seeks for response from our delegations is combatting rabies, especially in areas of poverty. Rabies, although possessing an effective vaccine, is a fatal disease that can be spread to people and pets if an infected animal bites or scratches them. In most countries around the world, especially developing countries, the death rate by rabies reaches to almost 59,000 and without proper systems in place, that rate may increase without immediate medical help or support. Secondly, delegates will be asked to demonstrate diplomacy and an effort to control organ trafficking. Organ trafficking, a longstanding heinous act that occurs worldwide, is extremely targeted towards higher-risk people (homeless, lower-income individuals, etc.). Therefore, a solution to stop traffickers and prevent the profit-oriented, inhumane industry. Lastly, delegates are then tasked with the global crisis against antimicrobial resistance. Antimicrobial resistance, also known as antibiotic resistance or AMR, occurs when an increase in antimicrobial resistance is driven by a combination of germs exposed to antibiotics and the spread of those germs and their resistance mechanisms. This increases the risk of medical operations such as chemotherapy, organ transplants, and diabetes management. However, the effects of this issue have extended to veterinary, agricultural, and tourism industries as well, making it a crisis for countries across the globe. Altogether, WHO will encompass in-depth discussions in terms of approaching these very complex issues that will further promote justice around the world, because of how it tackles the injustices and major issues regarding health. \r\n\r\n", //com bio
                    "abe.jpg", //chair pic
                    "Abe Al-Dalli", //chaur name
                    "Head Chair", //chair pos
                    "Hi everyone!\r\nMy name is Abe Al-Dalli and I am a freshman at Virginia Tech. I am currently majoring in Biology with the intent to pursue medicine and obtain an M.D. in internal medicine, and I am also minoring in economics. In my free time I enjoy playing sports such as soccer, golf, tennis, basketball, and football, hanging out with friends and family, cooking/baking, and weight lifting. I have been involved in MUN for over 6 years throughout middle school and high school, where I have participated in many high school and college conferences, and also led my high school team for about two years. Throughout committee I’m excited to see diplomatic and substantive debate regarding the three topics in this committee. I can’t wait to see you all soon!\r\n", //chairbio
                    "abe23@vt.edu", //chair email                    
                    "Committees.pdf" //background
                    ),
                 new Committee(
                    "United Nations Development Programme (UNDP)",
                    "development.png",
                    @"The United Nations Development Programme (UNDP) was originally created in 1966, following the combination of two existing committees, the United Nations Expanded Programme of Technical Assistance, created in 1949, and the United Nations Special Fund, established in 1958.The UNDP is a committee which works in roughly 170 countries to eradicate poverty as well as reduce inequality in the existing infrastructure of these countries. The UNDP helps countries create and implement developmental policies, leadership skills, institutional capabilities and more. The UNDP focuses on three specific areas: sustainable development, democratic governance and peace building and finally climate and disaster resilience. 
                    \n                    
                    As a body of the United Nations, the first topic questions how to improve the economic stability in the Middle East, as there are glaring discrepancies in wealth across several states and within regions of those states. The second topic will promote discussion within the committee to debate methods to construct a balance in income across all genders. Within the Middle East, there is a large gap between the annual income earned by women when compared to the income earned by men. The committee aims to examine and create solutions to alleviate poverty for marginalized communities by creating and promoting access to a plethora of resources such as education and legal services. The final topic discusses potential methods for upholding these solutions and services created within the Middle East. Delegates will discuss methods to maintain and sustain solutions to prevent implemented systems from failing. In addition, delegates will confer about principles which will heighten access to the resources for these systems across the entire region to enhance social, gender-based, and economic growth in the Middle East. 
                    \n
                    This committee will allow delegates the opportunity to discuss and create methods of developmental growth and opportunity in the Middle East, as well as promote equal, accessible opportunities for anyone who needs them. ",
                    "sumaiyah.jpg",
                    "Sumaiyah Ali",
                    "Head Chair",
                    "Hello! My name is Sumaiyah and I am a Virginia Tech Alumni. I graduated in 2023 with a degree in National Security and Foreign Affairs as well as a minor in Spanish. I was involved with VT MUN for two years and am so excited to stay involved as an alumni! ",
                    "sumaiyaha19@vt.edu ",
                    "Committees.pdf"
                    ),
                 new Committee(
                    "Disarmament and International Security Committee (DISEC)", //com name
                    "disec.png", //com pic
                    "The Disarmament and International Security Committee, otherwise known as DISEC, was established in 1993 as the first committee of the General Assembly of the United Nations. Delegates in DISEC discuss global concerns, disarmament, security, and dangers to world peace in order to highlight the efforts being made to safeguard the international security regime. Within this UN body, the questions that delegates must resolve have to do with the Tigrayan conflict. Although the Tigray war officially started in 2020, tensions have been brewing for decades. The armed conflict between Tigray’s People Liberation Front (TPLF) and the Ethiopian forces has officially been called a war from November 2020 and November 2022. During this time, multiple human rights organizations, including amnesty international, human rights watch, and Genocide Watch have called out the Ethiopian government for violations and accusations of genocide. What started off as a war between those two parties has turned into a war on the Tigrayan people as a whole. Despite the current cease-fire, the situation still remains dire for Tigrayan people due to displacement, sexual violence, and allegations of ethnic cleansing. Currently, areas of the Tigray region have been sealed off, with banking services heavily restricted. There is still a lack of access to food, aid and other essential needs. Across the globe, there has been severe condemnation of the human rights abuses from several countries, with Secretary of State Antony Blinken calling for Ethiopian and Amhara troops to retreat from the region. Although there has been international pressure to de-escalate the violence, there has been no formal UNSC action, resulting in criticisms from the international community. As time continues to pass by, it is imperative for member states to act and prevent further atrocities from occuring in the region.\r\n", //com bio
                    "leah.jpg", //chair pic
                    "Leah Solomon", //chaur name
                    "Head Chair", //chair pos
                    "Hello everyone! My name is Leah Solomon and I am the chair for DISEC! I am a public health major with a minor in adaptive brain and behavior. I’ve been a part of Model UN on and off since my 8th grade. Ethnically, I am from Tigray, Ethiopia (which is why I’m super passionate about the topic) but I currently reside in Ashburn, VA. Some hobbies of mine include playing tennis and going to concerts or any live event. I am super excited to work with you all! Please email me if you have any questions.", //chairbio
                    "leahs@vt.edu", //chair email                    
                    "Committees.pdf" //background
                    )

            });

            // Specialized
            _committees.AddCommitteeGroup("Specialized", new Committee[]
            {
                new Committee(
                    "Ancient Mythology Meets Modern America: Camp Half-Blood",
                    "mythology.jpg",
                    "Three years after the Second Giant War, Camp Half-Blood must train a new generation of demigods to defend themselves in a world where killer monsters and other mythological spirits and creatures are all too present. With the hero of Olympus, Percy Jackson, having mysteriously disappeared without a trace, the Greek demigods of Camp Half-Blood and their friends have become worried about his whereabouts. However, it seems that the gods don’t leave any time for concern, because Rachel Elizabeth Dare, the oracle of Delphi has arrived with a new prophecy from Mount Olympus for the demigods of Camp Halfblood to fulfill. Chiron, the acting camp director, has taken great lengths to keep the prophecy secret from anyone not directly called on by the prophecy (Something about the prophecy hitting too close to home? ) and has now gathered a group of campers to partake in this quest. What is the prophecy hiding? Is the safety of the world at stake again? Will more campers have to put their lives on the line to satisfy the disagreements of the deities? And perhaps most importantly, what happened to Percy Jackson?\r\n\r\nBalancing the political problems of Ancient Greece and the environment that is modern day New York, delegates will take on the roles of Greek demigods at Camp Half-Blood, and they shall be put to trials to balance the responsibilities of their Godly parenthood, their own goals, and perhaps most importantly, the fate of the future. \r\n",
                    "vihaan.jpg",
                    "Vihaan Ambre",
                    "Head Chair",
                    "Welcome y’all! As one of VT’s resident crisis delegates, I am very excited to be working with Sudhan to bring this committee to life at the inaugural VTMUNC. I am a big fan of trying something new, and I hope we can bring y’all a MUN experience unlike any other!",
                    "vambre9864@vt.edu ",
                    "suddhan.jpg",
                    "Sudhan Vijayakumar ",
                    "Crisis Director",
                    "Nothing more needs to be said other than that I’m a huge Percy Jackson fan. I’ve read every book and wanted to take this chance to run a fun committee for the first ever VTMUNC! This is my eighth year of MUN, so I hope that I can use my experience to bring you all a great time!",
                    "sudhan@vt.edu ",
                    "Committees.pdf"
                    ),
                new Committee(
                    "Small Islands, Big Problems: Alliance of Small Island States (AOSIS)", //committee name
                    "aosis.jpg", //committe pic
                    "The Alliance of Small Island States is a regional body committee at Virginia Tech Model United Nations Conference (VTMUNC I) where delegates will represent one of 39 member states, all of which are small islands underrepresented in international relations. In this committee, delegates will examine some of the world’s biggest problems through the lens of some of the world’s smallest voices: those who are disproportionately affected. \r\n\r\nThrough issues such as the sustainability of tourism and the importances of the Exclusive Economic Zones of small islands, delegates will consider issues from a new perspective that is often overlooked by the international community. AOSIS will build debate and diplomacy skills while challenging delegates to think about important issues from a non-Western point of view. \r\n", //exec summary
                    "anneli.jpg", //chair a pic
                    "Anneli Sample", //char a name
                    "Head Chair", //chair a position
                    "My name is Anneli Sample and I am the chair for AOSIS! I am a freshman at Virginia Tech and majoring in International Relations. I have been doing MUN for four years and I am so excited to be part of the inaugural VTMUNC. Please email me if you have any questions! \r\n", //char a bio
                    "anneli@vt.edu", //chair a email
                    "Committees.pdf" //background guide
                    ),
                new Committee(
                    "Suez Showdown: The Suez Crisis of 1956", //com name
                    "suez.jpg", //com pic
                    "In the midst of a global struggle for power between superpowers, a sudden invasion of Egypt takes place, threatening the delicate balance of world peace. As France, Israel, and the United Kingdom convene on the Suez Canal, the still-young United Nations General Assembly must find a quick and peaceful resolution following the Security Council's failure to do so. As lines are drawn in the sand, factions within the UN form, and fighting continues; a solution is desperately needed. As states' positions within the international system radically change, delegates must act with creativity, diplomacy, and urgency to prevent further escalation.\r\n", //com bio
                    "noah.jpg", //chair pic
                    "Noah Charness", //chaur name
                    "Head Chair ", //chair pos
                    "Hello! My name is Noah Charness, I am a junior studying engineering here at Virginia Tech. I am super excited to bring you this committee, where we will talk about one of the most integral crises to shape the current context for international relations. \r\n", //chairbio
                    "noahc25@vt.edu ", //chair email                    
                    "Committees.pdf" //background
                    ),
                new Committee(
                    "Anthrax Attack: An Anonymous Series of Biological Warfare", //com name
                    "anthrax.jpg", //com pic
                    @"In the panic-stricken United States following the attacks of 9/11, a new issue arises causing mass hysteria throughout the nation. Anonymous letters laced with anthrax are sent to news stations in Florida and New York as well as to a congressional office building in Washington D.C. Anthrax is the spore of Bacillus anthracis which when inhaled, can cause a variety of symptoms, even leading to death. These letters have already taken the lives of 5 people. Members of the CDC as well as the Department of Defence must come together to prevent further chaos and investigate the roots of this attack.
                    \n
                    \n
                    Note: This committee will discuss mature topics that some delegates may find unsettling. As such, this committee is intended for more mature audiences and experienced delegates. If you have any questions or concerns, please feel free to email the Under Secretary General of Specialized at pedersenmk@vt.edu. ", //com bio
                    "tanishqa.png", //chair pic
                    "Tanishqa Gautam", //chaur name
                    "Head Chair", //chair pos
                    "Hello delegates! My name is Tanishqa Gautam. I am an Engineering freshman at Virginia Tech! I have been doing MUN for 3 years and I am thrilled to be a part of VTMUNC’s first conference. I can’t wait to meet all the delegates and see how the debate will unfold at the conference!\r\n", //chairbio
                    "tanishqa@vt.edu", //chair email                    
                    "Committees.pdf" //background
                )


        });

            // Crisis Committees
            _committees.AddCommitteeGroup("Crisis Committees", new Committee[]
            {
                new Committee(
                   "Raise a Glass to Freedom: Revolution in the American Colonies",
                   "revolution.jpg",
                   "The date is July 4,1776, and the American Colonies have just written and passed the Declaration of Independence at the meeting of the Second Continental Congress. The Revolutionary war is in its earliest stages, and battles have broken out already in the past year at Lexington and Concord and Bunker Hill. The Continental Army has been established for only a year, and the army still appears somewhat disorganized and battles have not reached an entirely large scale yet. Though the Revolutionary War was fought primarily by the opposing American Continental and British Armies, there are other parties that have stakes in this war. The American Colonies cannot be successful without aid from their potential French allies. As the war begins to unfold, will the British squash the revolution of the self-proclaimed independent American Colonists? Can the American patriots defend their brand new republic? How will other actors, such as European powers, loyalist colonists, indigenous people, impact and intervention in the conflict? It is up to this crisis committee to determine the course of the American Revolution, and decide on the future of the establishment of the independent United States of America.",
                   "liz.jpg",
                   "Liz Mennitt",
                   "Head Chair",
                   "Hey Guys! My name is Liz and I am a Senior at VT majoring in Political Science and minoring in Integrated Security. I am also dual enrolled in the Political Science Master’s program. I’ve been in MUN for 2 years and also participated in MUN in high school. ",
                   "lizmennitt@vt.edu",
                   "Committees.pdf"
                    ),
                new Committee(
                    "Just Another Week in Paradise: 1893 Hawai’ian Coup d’etat",
                    "paradise.jpg",
                    "The Kingdom of Hawaii, at once one of the most powerful nations in the Pacific, was at a precipice. On the sunny Monday morning of January 16, 1893; the USS Boston arrived in Oahu harbor and the agents of the Reform Party of Hawaii, primarily descendants of Americans and Europeans, began a 48-hour coup d’etat that would result in the end of the Hawaiian kingdom and a new American era for the islands. Though seemingly rapid and seamless in its execution, the Hawaiian coup was far from inevitable, and if things had played out just a little differently, the trajectory of the entire Pacific may have changed. Delegates will take up positions of both the Hawaiian government and the reform party, as well as powerful Pacific empires including Japan, the United Kingdom, and France; as the sun rises on just another week in paradise. ",
                    "willl.jpg",
                    "Will Letvin",
                    "Head Chair",
                    "I am a second year studying urban planning and design. With a passion for history, the arts, and the\r\ncerebral elements of life, I’ve spent most of my life traveling, and have an affinity for places with\r\npersonality.",
                    "wletvin03@vt.edu",
                    "Committees.pdf"
                    ),
                new Committee(
                    "Restoring Balance: The Legend of Korra",
                    "korra.jpg",
                    @"Korra and Asami have returned from their mini vacation in the spirit world to find the human realm in complete disarray. Everyone had expected Kuvira’s army to dissipate after she was arrested, but instead, they have gathered themselves in the outskirts of the Earth Kingdom and are preparing to elect a new leader. Because of this, the expansion of Republic City has come to a halt as everyone fears the Earth Empire coming back. Meanwhile, travelers from around the world have come to visit the spirit portal in the heart of Republic City, and spirits are distressed by the number of humans invading their space without an Air Nomad guide. There is word that they may pose a revolution of their own, keeping humans away from their territory. 
                    \n
                    Historically, this ragtag group of heroes has struggled to come to agreement on solutions, and many times will create additional problems before solving the original ones. Today, tensions are high, war is a serious possibility, and the people of this world are waiting for its leaders to take charge and help them. Delegates, can you all work together to figure out how to bring peace and harmony back to the physical world? ",
                    "natilyn.jpg",
                    "Natilyn Mann",
                    "Head Chair",
                    "Hello! I am a senior studying Animal and Poultry Sciences and have been involved with Model UN for 3 years. I am so excited to lead you all through an exciting committee focused on working together, solving problems, and not creating too much chaos. ",
                    "natimann@vt.edu",
                    "Committees.pdf"
                    ),
                new Committee(
                    "One Count and Ten Thousand Systems: A Star Wars: the Clone Wars Committee",
                    "starwars.png",
                    @"The Clone Wars have inflicted unprecedented destruction and chaos in the galaxy. The unwieldy galaxy-spanning Galactic Republic, governed from the Core worlds, has failed to provide effective governance in the outer rim despite heavy taxation. The Confederacy of Independent Systems, also called the Separatist Alliance, seeks to establish a decentralized government promoting free and fair trade, effective local governance, and individual rights. As the Separatist Alliance formed, powerful corporations offered their services to the CIS, supplying a droid army and starships to battle against the Republic’s hastily assembled Clone Army and Jedi generals.   
                    \n
                    After a year and a half of conflict, both sides have suffered devastating losses following an early Republic onslaught into the outer rim. Key military production has been shut down after the second battle of Geonosis, and with vital supply lines severed at Christophsis and Ryloth, the movement to establish a new independent government is in peril. Furthermore, reports from the frontlines of brutal atrocities have sparked internal dissent and called into question the manner in which the war is being conducted. The populace is divided on whether or not the current administration can win the war, much less doing so in a dignified way that represents the ideals the Confederacy was originally founded. So much so that a new faction in the Parliament has been formed calling for a swift, negotiated end to the war effort. It is up to a newly established joint session convening critical leaders of the Separatist Council, Parliament, and independent stakeholders to determine the fate of the Separatist Alliance and the galaxy itself. ",
                    "willk.jpg",
                    "William Kirshbom",
                    "Crisis Director",
                    "I am looking forward to bringing my seven years of MUN experience since middle school to the table alongside the rest of our team to deliver a thought provoking exploration of a science fiction universe that has been close to my heart since elementary school.  ",
                    "wikirsh01@vt.edu",
                    "evan.jpg",
                    "Evan Marshall ",
                    "Committee Chair",
                    "Just a student aspiring to be a civil engineer and make functioning public transportation in this country. I joined Model UN last year because of my interest in geopolitics and to improve my skills in public speaking. Here’s to an exciting Clone Wars Committee!",
                    "marshaet26@vt.edu",
                    "Committees.pdf"
                    ),
                
                new Committee(
                    "The Wizarding War: Harry Potter Committee",
                    "potter.jpg",
                    "Set in the 1970s within British territory, the Order of the Phoenix has emerged as a secret society of wizards opposing the rise of the Dark Lord Voldemort and his Deatheaters. Founded by Albus Dumbledore, the organization has fought diligently against anti-muggle rhetoric and the violent ideology of Voldemort’s followers. Composed of well-known Aurors, professors, and public figures committed to the fight against the violent Death Eaters, the Order must fight to defeat the opposite side while staying alive and true to themselves. Meanwhile, the Death Eaters work to overthrow the current government and install their leader Voldemort as Minister of Magic. Now, in October of 1980, the Order is recovering from recent attacks and it has been announced that Regulus Black, the heir to the House of Black, is presumed dead. Rumors are circulating on the nature of his death and the secrets he might’ve held. Meanwhile, the Death Eater’s influence has been expanding across the UK. Will the Order succeed in upholding the current governmental system and defeat Voldemort, or will the Death Eaters come out victorious and establish Voldemort’s dark reign over the British wizarding world? This all depends on the way the committee utilizes their unique positions and powers; The war will come to an end with either side prevailing.",
                    "holly.jpg",
                    "Holly Johnson",
                    "Crisis Director",
                    "Hey y'all! I am a junior majoring in psychology with a minor in political science. I joined Model United Nations my freshman year at Virginia Tech. Like many of you, I was first introduced to the magical world of Harry Potter at a young age. It quickly became a formative part of my childhood. I’m so excited for this committee to delve into the first wizarding war and rewrite history. ",
                    "Holly432@vt.edu",
                    "sarahs.jpg",
                    "Sarah Sass",
                    "Head Chair",
                    "Hi guys! I’m a sophomore majoring in chemical engineering with minors in chemistry and green engineering. I’ve done MUN for awhile, starting in high school like y’all, and am on the board for VTMUN! I have loved Harry Potter since I read it as a kid, and am super excited to focus on this earlier era of the universe. ",
                    "sarahs04@vt.edu",
                    "Committees.pdf"
                    ),
                new Committee(
                    "Trouble in Barbieland",
                    "barbie.jpg",
                    "Barbieland, as its namesake implies, is home to Barbies and Kens that coexist with their beautiful Dream Houses, beaches, and ubiquitous glamor. Stereotypical Barbie, after going through a journey of self-discovery, decided to go into the human realm to learn more about what they have to offer and see how far she can push herself. On Earth, she decides to go by Margot and attempts to start fresh, without the expectations of her former life in Barbieland. Although the transition was very difficult at first, Margot was determined to make women feel empowered and make a difference in society. After spending five years in the “real world” with brief stints as an astrophysicist, Congresswoman, UNICEF ambassador, and marine biologist, she gets an alarming message from Weird Barbie that Barbieland is in some kind of trouble. The message was vague yet urgent and requested Margot to return to Barbie Land as soon as she could. After reading this message, Margot feels anxious that Barbie Land is in trouble but knows that she is willing to do whatever it takes to help the place she calls home. As she prepares to come home, we urge all of you to prepare for the looming crisis ahead. Will it be kenough to save Barbie land?",
                    "madi.jpg",
                    "Madigan Voss",
                    "Head Chair",
                    "Hi everyone! My name is Madi Voss and I am a sophomore here at Virginia Tech. I have only been doing MUN for about a year and a half but I absolutely love it. As an International Relations major I have some super cool yet admittedly insane goals. If it was up to me I would 100% be the “leader of the universe.” However, I have accepted my mortal fate and will hopefully be working for an NGO or the Government in the near future. To be honest, I think a lot of other job paths are cooler but I’ve come into acceptance. While chairing this committee I really hope to use my position of leadership to inspire the delegates and help them bloom. To me the most important things in the world are acceptance and understanding, so come as you are to Barbieland, all are welcome..even Kens. On the topic of Barbie, my favorite part of the movie is totally when the Kens take over Barbieland, specifically when Barbie tells Ken she'll be his “short term, long distance girlfriend.” Oh boy I could relate with that one. I am so very excited to meet you all and I am already so proud. Sublime!",
                    "madiv26@vt.edu",
                    "Committees.pdf"
                    )});

            _committees.AddCommitteeGroup("Ad Hoc", new Committee[]
           {
                new Committee(
                    "President's Ad-Hoc",
                    "adhoc.png",
                    @"The Ad-hoc Committee of the Presidents is the most challenging committee at VTMUNC I, as everything will remain confidential until the conference! Delegates will get all information including background guides & positions in the first committee session. ",
                    "james.jpg",
                    "James Mullet",
                    "Head Chair",
                    "Hey everyone! My name is James Mullet, and I am so excited to be your chair for the first VTMUNC Ad Hoc committee. I was last year's VTMUN President and graduated last spring with a Double Major in Biochemistry and Biological Sciences. I have participated in MUN throughout my time at Virginia Tech, and I am so happy to be coming back to chair this committee! Personally, I work as a Research Technician at MIT, but I always love to discuss complex politically and culturally relevant issues. I am a big tea and coffee enthusiast who loves to hike, walk, and do my daily sudoku puzzles! I am so excited to bring a competitive and engaging committee this year that is interesting for everyone and make VTMUNC I Ad hoc a fantastic experience!",
                    "jmullet@mit.edu",
                    "alyssa.jpg", //chair pic
                    "Alyssa Bohnstengel", //chaur name
                    "Crisis Director", //chair pos
                    "Hi everyone! My name is Alyssa Bohnstengel and I am beyond excited to be your crisis director! I am a senior majoring in political science with three minors in creative writing, European studies, and global engagement! I have been doing MUN for seven years and have been in Model UN at Virginia Tech for three! I am currently the External President of VTMUN & also serve as the director of finance for VTMUNC. Aside from MUN, I love reading (I have an instagram account dedicated to books that has nine-hundred followers,) dog-sitting (even though they use my roommates room as a bathroom,) spending time with my friends, and doing puzzles (I think it might be an addiction.) I am also a proud NYT game enthusiast! I am looking forward to meeting everyone and bringing our ad-hoc idea to life!", //chairbio
                    "alyssab19@vt.edu", //chair email
                    "Committees.pdf"
                    ),
           });

            //template
            new Committee(
                "", //com name
                "", //com pic
                "", //com bio
                "", //chair pic
                "", //chaur name
                "", //chair pos
                "", //chairbio
                "", //chair email
                "", //chair pic
                "", //chaur name
                "", //chair pos
                "", //chairbio
                "", //chair email
                "" //background
                );
   }

    // GET: Committees
    public ActionResult Index()
    {
        return View(_committees);
    }

    // GET: Committees/<url-name>
    [HttpGet("Committees/{urlName}")]
    public ActionResult Details(string urlName)
    {
        if (urlName == null)
        {
            return NotFound();
        }

        var applicant = _committees.Find(urlName);
        if (applicant == null)
        {
            return NotFound();
        }
        return View(applicant);
    }
}
}
