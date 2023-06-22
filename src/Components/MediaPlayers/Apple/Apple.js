import React from 'react';

const Apple = () => {
    return <div>
        {/* Apple/iTunes */}
        <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            title="apple"
            frameBorder={0} height={450}
            style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '10px' }}
            src="https://embed.music.apple.com/us/album/just-the-two-of-us-single/1672299698" />
    </div>;
};

export default Apple;
