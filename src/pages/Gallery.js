import React from "react";
import TeamCard from "../components/TeamCard";
import ima from '../image1.jpeg'

function Gallery() {
    return ( 
    <div >
        <h1> Gallery </h1> 
        <TeamCard pic = {ima}
        name = "YungFayds"
        desc = "IGL"
        phrases = "Ouens Ouens Ouens, naai man"
        insta = "https://www.instagram.com/yungfayds/"
        youtube = "https://www.youtube.com/channel/UCyPwchXRz0lDGHYkZxQ3aGg"
        twitter = "https://twitter.com/Faidhadams" />
        </div>
    )
    }

export default Gallery