import React from 'react';
import PropTypes from 'prop-types';
import avata from '../../images/ava2.jpg'
import sign from '../../images/chuki2.jpg'

import './index.scss'

About.propTypes = {
    linkElements: PropTypes.array,
};
About.defaultProps = {
    linkElements: null,
}

function About(props) {
    const { linkElements } = props;
    return (
        <div className='About'>
            <div className="About__img">
                <img src={avata} alt="anh dai dien" />
            </div>
            <div className="About__content">
                <h1>TU THAI PHONG</h1>
                <p>I'm Front-end Developer in Ho Chi Minh City.
                    </p>
                <p>
                    I have expertise in HTML 5, CSS(SCSS), Javascript, React Hook, Router, Redux.
                    </p>
                <p>I have serious passion for UI effects,
                animations and creating intuitive, dynamic user experiences.</p>


                <img src={sign} alt="chu ki" />
                <p >Tu Thai Phong</p>


                <ul className="About__content-list">
                    {linkElements.map(linkElement => (
                        <li className="About__content-list--title"
                            key={linkElement.id}>
                            <a className="About__content-list--link"
                                href={linkElement.link}>{linkElement.title}</a>

                        </li>
                    ))}
                </ul>

            </div>

        </div>
    );
}

export default About;