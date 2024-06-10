# 📙 VTMUNC Site Overview

## Pages Overview

### Home Page
The Home Page welcomes visitors to the VTMUNC website. It features a brief introduction to the conference, important announcements, and quick links to various sections of the site for easy navigation.

### About Us Page
The About Us Page provides detailed information about VTMUNC, its mission, vision, and history. It introduces the team behind the conference, highlighting their roles and contributions.

### Committees Page
The Committees Page offers an overview of all the committees featured in the conference. It lists each committee with a brief description, helping delegates choose which committee they are interested in.

### Committees/[:slug] Page
The Committees/[:slug] Page is dedicated to each individual committee. It provides in-depth information about the committee's focus, topics to be discussed, and the chair's details. Each committee has a unique slug in the URL to identify it.

### Register Page
The Register Page is where participants and delegates can sign up for the Virginia Tech Model United Nations Conference. This page provides a user-friendly registration form that collects necessary information from attendees, such as personal details, contact information, and preferred committees. The registration process is streamlined to ensure a quick and efficient experience, allowing participants to secure their spot at the conference and gain access to all relevant materials and updates.

## Data Types in app/data

### Secretariat
The about us page fetches data from app/data/secretariat.json. This JSON file stores an array of the objects, representing a secretariat. Each secretariat data type holds information about the key members organizing the conference. Each entry includes:
- **image**: The filename of the member's image.
- **name**: The full name of the secretariat member.
- **position**: The position held by the member.
- **bio**: A brief biography of the member.
- **email**: The member's contact email.

Example:
```json
{
    "image": "aaryan.JPG",
    "name": "Aaryan Menon",
    "position": "Secretary General",
    "bio": "Aaryan is a junior from Illinois and is studying Financial Technology & Big Data Analytics and Consulting Management Analytics. This will be Aaryan’s sixth year of MUN and he has previously served on the leadership of VTMUN. Outside of MUN, he is involved in TechFellows, Saving Hearts, and the Virginia Tech Transportation Institute. His favorite part of MUN has been meeting some of his closest friends. He is eager to finally provide an opportunity to High School students to see how far they can take their MUN skills and talents.",
    "email": "aaryanm@vt.edu"
}
```

### Committee Group
The committees page and the committees/[:slug] pages are created from the data fetched from app/data/committees.json. This JSON file stores an array of objects. each object represents a committee group. Each Committee Group data type organizes committees into groups and includes detailed information about each committee within the group. Each entry includes:
- **group_name**: The name of the committee group (e.g: Crisis).
- **committees**: An array of committees, each containing:
  - **committee_name**: The name of the committee.
  - **committee_image**: The filename of the committee's image.
  - **committee_bio**: A detailed biography of the committee, including its focus and topics.
  - **chair_image**: The relative filename of the chair's image.
  - **chair_name**: The full name of the chair.
  - **chair_position**: The position of the chair within the committee.
  - **chair_bio**: A brief biography of the chair.
  - **chair_email**: The chair's contact email.
  - **co_chair_image** (Optional): The relative filename of the co-chair's image.
  - **co_chair_name** (Optional): The full name of the co-chair.
  - **co_chair_position** (Optional): The position of the co-chair within the committee.
  - **co_chair_bio** (Optional): A brief biography of the co-chair.
  - **co_chair_email** (Optional): The co-chair's contact email.
  - **background_guide**: The filename of the committee's background guide.
  - **id**: A unique identifier for the committee. This is the also the url or slug of each committee. It has to be unique. 

Example:
```json
{
    "group_name": "General Assembly",
    "committees": [
        {
            "committee_name": "Commission on the Status of Women (CSW)",
            "committee_image": "women.jpg",
            "committee_bio": "The Commission on the Status of Women (CSW) is the primary intergovernmental body dedicated to promoting gender equality and women’s rights. The functional commission was established as part of the Economic and Social Commission (ECOSOC) in 1946 to address growing concerns about the United Nations’ ability to focus on gender equality. In March 2024, the 68th session of the commission will take place addressing how women in marginalized groups can achieve economic empowerment in the 21st century. \nFor the purposes of this committee, the first topic addresses how to economically empower women in rural areas. Rural women are often the most economically disenfranchised and overlooked groups in their country. Delegates will have to grapple with how to create policies that enhance rural women’s access to social, legal, and economic services as well as how they can utilize leadership opportunities, entrepreneurship, and community participation to bolster their economic status. The second topic focuses on migrant women, another marginalized group facing increasingly difficult economic barriers. Migrant women often go under-compensated for their work because of a lack of immigration status or uncompensated homework. The third topic will focus on providing resources to eradicate maternal mortality, an issue prevalent among women in poverty. Maternal mortality, an issue found particularly in developing countries, is a pressing concern as the alarming rates of maternal deaths during pregnancy continue to rise due to complications during pregnancy and childbirth. Delegates are tasked with the responsibility of creating methods that will ensure quality access to universal maternal healthcare with the common goal of reducing maternal mortality rates. The UN possesses the ability to bring countries together to collaborate to uplift women economically when they are either forced or make the brave decision to leave their home country. This committee gives delegates the special opportunity to discuss critical issues regarding the equity and economic empowerment of marginalized women across the globe.",
            "chair_image": "jyo.jpg",
            "chair_name": "Jyotsna Rathinam",
            "chair_position": "Head Chair",
            "chair_bio": "Hi everyone!\r\nI’m Jyotsna and I am so excited to be your head chair for the Commission on the Status of Women. I’m currently a senior at Virginia Tech double majoring in economics and international relations with minors in French and data science. I’ve been involved in MUN since my sophomore year of college and am currently my team’s GA training chair. I’ve always loved GA’s ability to have young people consider intricate solutions to real-world problems, and I feel like it’s not something that happens in many other settings. Prior to college I did a lot of debate and speech in high school with NSDA and loved it. Apart from MUN, I am also co-president and founder of VT’s chapter of Amnesty International, so I always enjoy talking about issues of equity and policy improvements! In my free time, I love reading, journaling, watching Netflix shows, doing henna, and making Spotify playlists (especially if they involve Beyoncé). I am thrilled to have been able to create a committee I feel so passionate about, and I look forward to seeing you all there!\r\n",
            "chair_email": "jyorathinam@vt.edu",
            "background_guide": "CSWFINAL.pdf",
            "id": "commission-on-the-status-of-women"
        }
    ]
}
```