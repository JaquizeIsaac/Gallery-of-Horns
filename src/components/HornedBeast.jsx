import Image from 'react-bootstrap/Image';
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
export default function HornedBeast(props) {
    const [status, setStatus] = useState("like");
    const [favoriteCount, setFavoriteCount] = useState(0);
    function handleClick() {
        if (status === "like") {
            setFavoriteCount(favoriteCount + 1);
        }
        props.displayModal(props.title);
            
    }
    return (
        <div onClick={handleClick}>
            <Image src={props.image_url} alt="" rounded fluid></Image>
            <h3>{status}{" "}
                <span>
                    <FaHeart /> {favoriteCount}
                </span>
            </h3>
        </div>
    );
}