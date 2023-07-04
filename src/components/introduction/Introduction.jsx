//HTML5, CSS(SCSS), Javascript, React hook, React router, React redux

// import PropTypes from 'prop-types';
import './Instronduction.scss'
import ava from '../../images/ava3.jpg'
import { Link } from 'react-router-dom';



Introduction.propTypes = {

};


function Introduction(props) {



    return (
        <div className='Introduction'>


            <div className="Introduction__information">
                < Link to="/About" > <div className="Introduction__information--img">
                    <img src={ava} alt="avata" />
                </div></Link>
                <h5 className="Introduction__information--skill">
                    HI, I AM TU THAI PHONG
            </h5>
                <h1 className="Introduction__information--title">
                    Front-end Developer
            </h1>
                <Link className="Introduction__information--link" to="/Portfolio">

                    <button className="Introduction__information--btn">

                        <p>Explore work</p><svg aria-hidden="true" focusable="false" data-prefix="fas"
                            data-icon="long-arrow-alt-right" class="svg-inline--fa fa-long-arrow-alt-right fa-w-14"
                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-100 0 700 512"><path fill="currentColor"
                                d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 
                        32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.
                        119-40.971-4.411-40.971 16.971V216z"></path></svg>
                    </button>

                </Link>
            </div>


        </div>

    );
}

export default Introduction;