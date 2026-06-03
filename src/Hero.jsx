import './Hero.css';

function Hero() {
    return (
        <section className="hero">

            <div className="hero-badge">
                <div className="hero-badge-dot"></div>
                Built for real freedom.
            </div>
            <h1 className="hero-title">
                Break Free. 
                <br />
                Stay <span>Freed</span>.
            </h1>
            <p className="hero-subtext">
               A science-backed, faith-friendly app that helps anyone break free from <br/>pornography — with streaks, an AI coach, and a community that gets it. 
            </p>
        </section>
    )
}

export default Hero;