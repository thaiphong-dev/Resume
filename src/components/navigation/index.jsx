import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import "./index.scss"

Navigation.propTypes = {
    listElements: PropTypes.array,

};
Navigation.defaultProps = {
    listElements: null,
};


function Navigation(props) {
    const { listElements } = props;
    return (
        <div>
            <div className='Navigation'>

                <h2 className="Navigation__name"> Tu Thai Phong </h2>

                <ul className='Navigation__list'>

                    {listElements.map(ele => (
                        <li className='Navigation__list--title'
                            key={ele.id}>
                            <Link className='Navigation__list--link' to={`/${ele.title}`}>{ele.title}</Link>
                        </li>
                    ))}

                </ul>


            </div>

        </div>
    );
}

export default Navigation;