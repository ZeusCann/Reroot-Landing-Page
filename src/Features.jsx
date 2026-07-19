import './Features.css';

const features = [
    {
        icon: '🔥',
        title: 'Streak tracker',
        description: 'Daily check-ins, milestone celebrations, and a grace-based relapse recovery flow that keeps you moving forward - never shame.',
    },
    {
        icon: '🤖',
        title: 'AI accountability coach',
        description: 'Your personal coach checks in every day, learns your triggers, and responds like a trusted mentor.',
    },
    {
        icon: '🆘',
        title: 'Urge SOS',
        description: 'A panic button for critical moments. Breathing techniques, a 15-minute timer, and live AI support to ride out the urge.',
    },
    {
        icon: '👥',
        title: 'Anonymous community',
        description: 'A safe feed of real wins, honest struggles, and encouragement from others on the same journey - always anonymous.',
    },
    {
        icon: '📓',
        title: 'Journal',
        description: 'Daily prompts, mood tracking, and a private space to reflect. Journaling is one of the most powerful recovery tools there is.',
    },
    {
        icon: '🔒',
        title: '100% Private',
        description: 'No real name required. No data sold. Privacy is a first principle here, not an afterthought.',
    }
]

function FeatureCard({ icon, title, description }) {
    return (
        <article className="feature-card">
            <span className="feature-icon">{icon}</span>
            <h3>{title}</h3>
            <p className="card-description">{description}</p>
        </article>
    );
}


function Features() {
    return (
        <section className="features">
        <p className="why">WHY REROOT?</p>
        <h2 className="head">Everything you need to break the cycle</h2>
        <p className="description">Most apps track your streak. Reroot goes deeper - with tools that actually understand why you struggle and how to win.</p>

        <div className="features-grid">
            {features.map((feature) => (
                <FeatureCard
                    key={feature.title}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                />
            ))}
        </div>
        </section>
    )
};

export default Features;