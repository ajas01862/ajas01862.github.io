import './Background.css';

export default function Background() {
    return (
        <div className="background" aria-hidden="true">
            <div className="background-grid" />
            <div className="background-glow background-glow-one" />
            <div className="background-glow background-glow-two" />
            <div className="background-vignette" />
        </div>
    );
}
