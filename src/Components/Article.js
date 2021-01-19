import React, {Component} from 'react';


class Article extends Component {

    render() {
        return(
            <div>
                <div>
                    <img src={this.props.img} />
                </div>
                <div>
                    <h1>{this.props.titre}</h1>
                    <p>{this.props.para}</p>
                </div>
            </div>
        );
    };
};

export default Article;