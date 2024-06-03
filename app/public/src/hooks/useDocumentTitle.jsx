import React, {useEffect} from 'react';

function useDocumentTitle(title) {
    useEffect(() => {
        const oldTitle = document.title;
        document.title = title;
        return () => document.title = oldTitle;
    }, [title]);
};

export default useDocumentTitle