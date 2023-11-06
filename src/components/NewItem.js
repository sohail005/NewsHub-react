import React, { Component } from 'react'

export class NewItem extends Component {





    render() {
        let { title, description, url, newsUrl, author, date, source } = this.props;
        console.log(newsUrl);
        return (
            <div className='my-3'>
                <div className="card">
                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-info" style={{left:'80%',zIndex:1}}>
                        {source.name}
                    </span>
                    <img src={url} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p class="card-text"><small class="text-body-secondary">By {author == null ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem