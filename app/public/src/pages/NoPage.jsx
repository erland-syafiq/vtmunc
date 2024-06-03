import React from 'react';

function NoPage() {
    useDocumentTitle("Page not found");
    return (
        <main className="vh-100 d-flex">
            <h1 className="d-flex">Error 404: Page not found</h1>
        </main>
    )

}

export default NoPage;