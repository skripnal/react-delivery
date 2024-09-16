import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="280" height="280" />
        <rect x="0" y="301" rx="10" ry="10" width="280" height="29" />
        <rect x="0" y="350" rx="10" ry="10" width="280" height="88" />
        <rect x="147" y="456" rx="25" ry="25" width="133" height="44" />
        <rect x="0" y="456" rx="10" ry="10" width="117" height="44" />
    </ContentLoader>
)

export default Skeleton
