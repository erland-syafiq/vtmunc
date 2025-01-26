const committeeGroups = require("./app/data/committees_2.json");

function getOldSlugFromName(name) {
    const normalized = name.replace(/[:(),<>]/g, "");
    const nonSpaceName = normalized.replace(/ /g, "-");
    const url = encodeURIComponent(nonSpaceName);
    return url;
}

module.exports = {
    async redirects() {
        let redirects =  [
            {
                source: "/Home/About",
                destination: "/about",
                permanent: true
            },
            {
                source: "/Applicants/Create",
                destination: "/register",
                permanent: true
            }
        ];

        let committees = [];

        for (const group of committeeGroups) {
            for (const committee of group.committees) {
                committees.push(committee);
            }
        }

        const committeeRedirects = committees.map((committee) => {
            return {
                source: `/Committees/${getOldSlugFromName(committee.committee_name)}`,
                destination: `/committees/${committee.id}`,
                permanent: true
            };
        });
        
        redirects = redirects.concat(committeeRedirects);
        return redirects;
    }
}