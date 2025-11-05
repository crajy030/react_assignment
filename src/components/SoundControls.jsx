export default function SoundControls() {
    return (
        <>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Drums: ON
                </label>
            </div>
            <div className="form-check mb-3">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Drums: OFF
                </label>
            </div>

            {/* Set cpm button */}
            <div className="input-group mb-3"> 
            
                <span className="input-group-text" id="cpm_label">set CPM</span>           

                <input type="text" className="form-control" id="cpm_text_input" placeholder="110" aria-label="110" aria-describedby="cpm_label" />

            </div>

            {/* Volume controls */}
            <label for="volume_range" className="form-label"><b>Volume</b></label>
            <div className="d-flex flex-column mb-3">
                <div className="d-flex justify-content-between mb-1 px-1">
                    <i className="bi bi-volume-off-fill fs-5" aria-hidden="true"></i>
                    <i className="bi bi-volume-up-fill fs-5" aria-hidden="true"></i>
                </div>
            <input type="range" className="form-range" min="0" max="1" step="0.01" id="volume_range" />
            </div>


            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item’s accordion body.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content.</div>
                    </div>
                </div>
            </div>
        </>
    )
}