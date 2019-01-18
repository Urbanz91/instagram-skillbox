import React from 'react';

const Photo = ({photo}) => {

  return (
    <div className="photo-wrap">
      <div className="photo-wrap__header">
        <div className="author-img">
          <img src={photo.user.profile_image.small}></img>
        </div>
        <div className="author"><a href={photo.user.links.self}>{photo.user.username}</a></div>
      </div>
      <hr></hr>
      <div className="photo-item">
        <img src={photo.urls.small}></img>
      </div>
      <div className="likes">
        <div className="likes__hearts">
          <a href="#">
            <img src="build/images/hearts.png"></img>
          </a>
        </div>
        <p className="likes__count">{photo.likes}</p>
      </div>
    </div>
  )
}

export default Photo;