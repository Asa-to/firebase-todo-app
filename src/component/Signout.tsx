import React, { FC, useContext } from 'react';
import { Card } from 'react-bootstrap';

import { FirebaseContext } from './../contexts';

const Singout: FC = () => {
    const { auth } = useContext(FirebaseContext);
    const handleClick = () => {auth?.signOut();}

    const cardStyle: React.CSSProperties = {
        display: 'block',
        width: '220px',
        height: '40px',
        lineHeight: '100%',
        padding: '7px 16px',
        margin: '10px auto',
        boxShadow: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12)',
        borderRadius: '2px',
    }

    const textStyle: React.CSSProperties = {
        color: '#757575',
        fontSize: '14px',
        fontWeight: 'revert',
    }

    return (
        <Card style={cardStyle} onClick={() => handleClick()}>
            <span style={textStyle}>Sign out from Google</span>
        </Card>
    )
}

export default Singout;