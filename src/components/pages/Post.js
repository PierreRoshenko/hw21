import React from "react"



const Post = ({name, nickname, pic, text, photo})=>{
    return(
        <div className="Post">
                <div className="avatar">
                    <img src={pic}/>
                </div>
                <div className="content">
            <div className = "head">
                <div className="post_colum_1">
                <div className='name'>{name}</div>
                <div className="nickname">{nickname}</div>
                <div className='today_date'>01 Jan</div>
                <div className= "arrow"> </div>
                </div>
            </div>
                <div className="post_text">{text}</div>
            <div className="content_img">
                <img src={photo}/>
            </div>
            <div className= "post_stats">
                <div className="comment_stats">2</div>
                <div className = "shares_stats">1</div>
                <div className = "likes_stats">10</div>
                <div className="share"></div>
            </div>
            </div>
        </div>
    )
}

export default Post