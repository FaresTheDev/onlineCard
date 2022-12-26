import headPhoto from '../assets/head-photo.png'
import emailIcon from '../assets/email-icon.png'
import LinkedInlIcon from '../assets/linkedin-icon.png'

function Info() {
    return (
        <div className="info-container">
           <img src= {headPhoto}/>
           
           <div className="info-details">
                <h1>Laura Smith</h1>
                <h2>Frontend Developer</h2>
                <a href="#">laurasmith.website</a>

                <div className="buttons-container">
                    <button className="email-btn">
                        <a href="#">
                        <img src= {emailIcon}/>
                        Email</a>
                    </button>
                    <button className="linkedin-btn">
                        <a href="#">
                        <img src= {LinkedInlIcon}/>
                        LinkedIn</a>
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Info;