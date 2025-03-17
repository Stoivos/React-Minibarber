import { useState } from "react";

function LikeButton() {
    const [likes, setLikes] = useState(0);
    return (
        <div className="gilla_container">
            <button className="gillaKnapp" onClick={() => setLikes(likes + 1)}>
                <img
                    src="../src/assets/Images/ikoner/like.png" alt="Gilla"
                />
                ({likes})
            </button>
        </div>
    )
}

export default LikeButton;