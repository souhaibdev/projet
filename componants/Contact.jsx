import { useState } from "react";
function Contact(){
    const [firstName, setFirstName] = useState("");
    const [comment, setComment] = useState("");
    const [commentsList, setCommentsList] = useState([]);

    function handleAddComment() {
    const newComment = { name: firstName, text: comment };
    setCommentsList([newComment, ...commentsList]);

    setFirstName("");
    setComment("");
  }
    return(
        <div>
            <div className="divComment">
                <h1 className="titreComment">How has your day been?</h1>
                <div style={{display:"flex",marginLeft:"270px"}}>
                <input type="text" placeholder="First Name" className="inputComment1" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <textarea placeholder="Comment" className="inputComment2" maxLength="200px" value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
                <button className="btnComment" onClick={handleAddComment}>Add Now</button>   
                <div className="round1">
                </div> 
                <div className="round2">
                </div> 
                </div>
            </div>
            <div className="comments-list">
                {commentsList.map((c, index) => (
            <div className="comment-item" key={index}>
                <strong>{c.name}:</strong> <span>{c.text}</span>
            </div>
            ))}
            </div>
            <div className="logo">
            <img src={process.env.PUBLIC_URL + "/logo.png"} alt="logo" className="imgContact"/>
            <h1 className="titre21">FormInova</h1>
        </div>
        <p className="pContact">FormInova - Learn.</p>
        <p className="pContact">Evolve..Succeed</p>
        <div className="socialIcons">
        <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
        <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="#"><i className="fa-brands fa-square-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-square-github"></i></a>
        </div>
        <div className="footer-section">
            <div className="footer-column">
                <h2>Formation</h2>
                <ul>
                    <li>Developpment Web</li>
                    <li>Marketing Digital</li>
                    <li>Design UX/UI</li>
                    <li>Data Science</li>
                </ul>
            </div>

            <div className="footer-column">
                <h2>Center</h2>
                <ul>
                    <li>Developpment Web</li>
                    <li>Marketing Digital</li>
                    <li>Design UX/UI</li>
                    <li>Data Science</li>
                </ul>
            </div>

            <div className="footer-column">
                <h2>Contact</h2>
                <p><i className="fa-solid fa-location-dot"></i> 123 Rue Rabat, 90000 Tanger</p>
                <p><i className="fa-solid fa-phone"></i> +212 615644283</p>
                <p><i className="fa-solid fa-envelope"></i> FormInova@gmail.com</p>
            </div>
        </div>
        <hr className="hrContact"/>
        <p className="footer">© Copyright 2026, All Rights Reserved by Formminova</p>
        </div>
    )
}
export default Contact;