import React from "react";
import PropTypes from "prop-types"

function Post({id,title,deletePost}){
    return(
        <div className="Post">
            <div className="Post__delete" onClick={()=>deletePost(id)}>X</div>
        <div className="Post__title">{title}</div>
        <img className="Post__img" src={`https://picsum.photos/5000/5000?random=${id}`}/>
        </div>
    );
   

}
Post.propTypes = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    deletePost:PropTypes.func.isRequired
}
export default Post