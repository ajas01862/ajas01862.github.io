import './Loader.css';

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader-mark">
                <span>A</span>
            </div>

            <div className="loader-progress">
                <span />
            </div>

            <p className="loader-text">Loading portfolio</p>
        </div>
    );
}
