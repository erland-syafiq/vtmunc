
/**
 * 
 * @param {Error} e
 * @property {string} name - name of error
 * @property {string} message - error message
 * @returns {JSX.Element} a pretty error page
 */
export default function ErrorPage(e) {
    return (
        <div className="container">
            <h1>Error: {e.name}</h1>
            <p>{e.message}</p>
        </div>
    )
}