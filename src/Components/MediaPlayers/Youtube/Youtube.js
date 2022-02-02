import React from 'react';

const Youtube = () => {
    return <div>
        {/* YouTube */}
        <iframe className="youtube" width="100%" height="100%" src="https://www.youtube.com/embed/ePFQMQUaqwk?start=230"
            title="YouTube video player" frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
    </div>;
};

export default Youtube;
