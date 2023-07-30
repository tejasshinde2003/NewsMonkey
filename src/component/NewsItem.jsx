import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>

        <div className="card" style={{ width: "18rem" }}>
        <span className0="position-absolute top-0   translate-middle badge rounded-pill bg-danger"style={{left:'90%', zIndex:'1'}}> {source} </span>
          <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/07/27/1600x900/Bawaal_controversy_1690440716325_1690440728631.jpeg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-warning">Read More..</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
