import Button from '@/components/Button';
import React from 'react';

const CarsPage = (props) => {
    console.log(props);
    return (
        <div>
            <p>Hello cars</p>
            <div>
                <div className='bg-blue-600'>
                    <h2>Title</h2>
                    <p>Details</p>
                </div>
                <Button></Button>
            </div>
        </div>
    );
};

export default CarsPage;