import React from "react";

function formatReadTime(content) {
    const words = content.trim().split(/\s+/).length;
    const readingTime = Math.ceil((words / 100) * 0.3);

    return readingTime;
}

export default formatReadTime;