import React from 'react'

const Detail = ({location, history}) => {
    console.log(location)
    if(!location.state){
        alert('no info')
        history.push('/')
    }
    return (
        <div>
            {location.state.title}
        </div>
    )
}

export default Detail
