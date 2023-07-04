import React from 'react';
import PropTypes from 'prop-types';
// import ProjectRender from './components';
// import anh from '../../images/bg.jpg'
import './index.scss'
import { Link } from 'react-router-dom';
Portfolio.propTypes = {
    projectList: PropTypes.array,

};
Portfolio.defaultProps = {
    projectList: null,
};
function Portfolio(props) {
    const { projectList } = props;

    return (
        <div className="project">
            <div className="Project__content">
                <h1>My Recent Work</h1>
                <p>Here are a few small projects I've worked on recently.</p>
            </div>
            <div className="Project__box">
                {projectList.map(PEle => (
                    <div className="layout">

                        <div className="layout__hidenlay">
                            <h1>{PEle.Pname}</h1>
                            <img src={PEle.BGImg} alt="anh" />

                        </div>
                        <div className="layout__overlay" style={{ background: PEle.BGColor }}>
                            <h2>{PEle.content}</h2>
                            <a className="layout__overlay-link" href={PEle.link} target="blanked">
                                <span className="layout__overlay-link--title" >
                                    Visit website
                </span>
                                <span className="layout__overlay-link--icon">
                                    <svg class="svg-inline--fa fa-angle-right fa-w-8" aria-hidden="true" focusable="false"
                                        data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M224.3 273l-136 136c-9.4 
                9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 
                0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                                </span>
                            </a>
                        </div>
                    </div>


                ))}

            </div>
            <div className="Project__content invitation">
                <h1>I'm still working on many new projects. So if you're interested with my abilities, I can be reach anytime via this contact link under.</h1>
                {/* <button>Contact now</button> */}


                <Link className="Project__content--link" to="/Contact">

                    <button className="Project__content--btn">

                        <p>Contact now</p><svg aria-hidden="true" focusable="false" data-prefix="fas"
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

export default Portfolio;