import React from 'react';

let imgUrl = 'https://cdngeneral.rentcafe.com/dmslivecafe/3/553970/Nic%20on%20Fifth%20Apartments-POI-015%201.jpg';

const MainView = () => {
    return (
        <div style={{
            backgroundImage: `url(${imgUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '35em',
            width:'100%'
}}>
        </div>

    )
}

export default MainView;