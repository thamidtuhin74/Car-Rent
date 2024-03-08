import React from 'react';

const CarLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <div>
            <>Car Layout</>
            {children}
        </div>
    );
};

export default CarLayout;