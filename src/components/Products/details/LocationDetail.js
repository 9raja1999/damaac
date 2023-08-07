import React from 'react';
import {LocationUIcon} from '../../../constants/svg/social'

const LocationDetail = () => {
    return (
        <div className='loction_section'>
            <h2>Location</h2>
            <div className='loc__map'>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14465.489575806963!2d55.365138241286466!3d24.987459131159667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f7be843815cc3%3A0xc6188f776c22ebde!2sMadinat%20Hind%204%20-%20Damac%20Hills%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1691393812685!5m2!1sen!2s"
                    width="209" height="126" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div>
                    <h3>Sheikh zayed road</h3>
                    <p>sheikh zayed road, business bay, dubai</p>
                    <button> <LocationUIcon /> Get directions</button>
                </div>
            </div>
        </div>
    );
};

export default LocationDetail;