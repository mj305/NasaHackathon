import React from 'react';
import M from 'materialize-css';
import sky from '../assets/sky.jpg';

export default class Banner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        M.Parallax.init(this.parallax, {});
        this.parallaxContainer.style.height = "90vh";
        this.parallaxContainer.style.marginBottom = "60px";
        this.parallaxContainer.style.width = "100%";
    }

    render() {
        return (
        <div className="banner">
            <div className="parallax-container center valign-wrapper" ref={ (parallaxContainer) => {this.parallaxContainer = parallaxContainer} }>
                <div className="row">
                    <div className="container">
                        <div className="col s12 white-text center-align">
                            <h3>Project Title</h3>
                            <p className="left-align">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor voluptatem molestias quisquam illum quos quo laboriosam, dolorum cupiditate rem, rerum itaque quas qui sunt eius deleniti consectetur ullam fugit? Quidem.</p>
                            <hr/>
                            <div className="row">
                                <a href="https://www.twitter.com/" style={{marginRight: "8px"}} className="btn white black-text margin-btn hoverable waves-effect waves-dark">Twitter<i className="fa fa-twitter right" aria-hidden="true"></i></a>
                                <a href="https://github.com/" className="btn white black-text margin-btn hoverable waves-effect waves-dark">Github<i className="fa fa-github right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="parallax" ref={ (parallax) => {this.parallax = parallax} }>
                    <img src={sky}/>
                </div>
            </div>
        </div>
        )
    }

}