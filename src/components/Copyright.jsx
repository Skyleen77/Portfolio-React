import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export default function Copyright() {

    const [date, setDate] = useState();

    const getYear = () => {
        const ladate = new Date();
        setDate(ladate.getFullYear());
    }

    useEffect(() => {
        getYear();
    }, [])

    return (
        <div>
            <p>Copyright © elliot-sutton.com {date}. Tous droits réservés.</p>
            <a className='text-primary' target='_blank' rel="noreferrer noopener" href={"https://www.skyleen.fr"}>By Skyleen</a>
            <br /><br />
            <Link to="/mentions" className='text-link'>Mentions légales</Link>
            <br /><br />
        </div>
    );
}
