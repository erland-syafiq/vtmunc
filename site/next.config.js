
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

        return redirects;
    }
}