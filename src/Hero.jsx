import { useState } from 'react';
import './Hero.css';

function Hero() {
    const [email, setEmail] = useState('')
    const [hasError, setHasError] = useState(false)

    const handleJoinWaitlist = () => {
        if (!email.trim()) {
            setHasError(true)

            setTimeout(() => {
                setHasError(false)
            }, 1200)

            return
        }
        console.log("Email:", email)
    }
    return (
        <section className="hero">

            <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                Built for real freedom
            </div>
            <h1 className="hero-title">
                Break Free. 
                <br />
                Stay <span>Freed</span>.
            </h1>
            <p className="hero-subtext">
               A science-backed, faith-friendly app that helps anyone break free from <br/>pornography — with streaks, an AI coach, and a community that gets it. 
            </p>

            <div className="hero-form">
            <input type="email"className={`hero-input ${hasError ? 'hero-input-error' : ''}`} 
            placeholder="Enter your email..." 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} />
            <button type="button"className="join-waitlist-btn" onClick={handleJoinWaitlist}>Join the waitlist</button>
            </div>
            <p className="hero-note">Free to join. No spam. Ever.</p>
        </section>
    )
}

export default Hero;