import React from 'react';

const Loading = () => {
    return (
    <div style={{
        height: '90vh',
        display: 'flex', justifyContent: 'center', 
        alignItems: 'center'
    }}>
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
        </div> 
    </div>
    );
}
 
export default Loading;