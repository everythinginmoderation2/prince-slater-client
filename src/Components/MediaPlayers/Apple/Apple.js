import React from 'react';

const Apple = () => {
    return <div>
        {/* Apple/iTunes */}
        <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            title="apple"
            frameborder={0} height={450}
            style={{ width: '100%', maxWidth: '100%', overflow: 'hidden', borderRadius: '10px' }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/album/just-the-two-of-us-single/1672299698" />
    </div>;
};

export default Apple;
