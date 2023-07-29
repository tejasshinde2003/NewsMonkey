import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>

        <div className="card" style={{ width: "18rem" }}>
          <img src={!imageUrl ? "https://www.hindustantimes.com/ht-img/img/2023/07/27/1600x900/Bawaal_controversy_1690440716325_1690440728631.jpeg" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-warning">Read More..</a>
          </div>
        </div>

      </div>
    )
  }
}

export default NewsItem
