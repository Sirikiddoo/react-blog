import React from "react";

function formatDate(creationDate) {
    const date = new Date(creationDate);

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return date.toLocaleDateString('nl-NL', options);
}

export default formatDate;
