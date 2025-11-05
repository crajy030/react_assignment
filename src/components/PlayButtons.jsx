export default function PlayButtons() {
    return (
        <>
            <div className="btn-group" role="group">
                <button id="play" className="btn btn-outline-primary">
                    <i className="bi bi-play-fill me-2"></i> Play
                </button>
                <button id="stop" className="btn btn-outline-danger">
                    <i class="bi bi-stop-fill"></i> Stop
                </button>
            </div>
        </>
    )
}