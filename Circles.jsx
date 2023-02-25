import './circles.css';

function Circles() {
    return (
        <div className="card">
            <div className="circles">
                <div className="circle1">
                    <div className="grey-line"></div>
                    <div className="segment blue seg1" ></div>
                    <div className="segment pink seg2" ></div>
                    <div className="segment pink seg3" ></div>
                </div>
                <div className="circle2">
                    <div className="circular-progress-yellow">
                        <div className="grey-line2"></div>
                        <div className="segment yellow1" ></div>
                        <div className="segment yellow2" ></div>
                        <div className="segment yellow3" ></div>
                    </div>

                    <div className="circular-progress-inner2">
                        <div className="grey-line3">
                            <div className="circular-progress-blue"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Circles;