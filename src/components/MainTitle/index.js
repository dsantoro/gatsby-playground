import React from 'react';

function MainTitle({ text }) {
    return (
        <h2 className="text-4xl font-light text-teal-400 italic mb-2 leading-tight" dangerouslySetInnerHTML={{ __html: text }}></h2>
    );
}

export default MainTitle;
