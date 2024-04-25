import React from 'react';

function FormattedParagraph({text, paragraphClassName}) {
    const paragraphs = text.split(/\r?\n/);
    console.log(paragraphs);

    return (
        <>
            {
                paragraphs.map((paragraph, index) => {
                    return (
                        <p key={index} className={paragraphClassName}>
                            {paragraph}
                        </p>
                    )
                })
            }
        </>
    )
}

export default FormattedParagraph;