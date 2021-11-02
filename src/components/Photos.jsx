import React from 'react';

const Photo = ({photos, loading}) => {
    if (loading) {
        return <h1>Loading</h1>
    }
    return ( <ul className="list-group mb-2">
        {
            photos.map(photo => (
                <li className="list-group-item">
                    {photo.title}
                    <img src={photo.url} alt="photo" className="mx-2" style={{width:30}}/>
                </li>
            ))
        }
    </ul> );
}
 
export default Photo;