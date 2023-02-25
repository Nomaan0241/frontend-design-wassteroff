import React from "react";
import Navbar from "./Navbar";
import "../componants/BubbleChart.css";
import Footer from "./Footer";
import Plus from "../assets/plus.svg";
import Minus from "../assets/minus.svg";
import Circle from "../assets/circle-dot.svg";
import GitCommit from "../assets/git-commit.svg";
import GitFork from "../assets/git-fork.svg";
import GitPull from "../assets/git-pull.svg";

const BubbleChart = () => {
	return (
		<div>
			<Navbar />
			<div className="main">
				<div className="side-section">
					<div>
						<div>
							{" "}
							<p className="side-section-heading">Design faster</p>{" "}
						</div>
						<div className="side-section-first-graph">
							<div className="side-section-first-graph-diagram">
								<div className="circles">
									<div className="circle1 pie">
										<div className="grey-line"></div>
										<div className="segment blue seg1"></div>
										<div className="segment pink seg2"></div>
										<div className="segment pink seg3"></div>
									</div>
									<div className="circle2">
										<div className="circular-progress-yellow">
											<div className="grey-line2"></div>
											<div className="segment yellow1"></div>
											<div className="segment yellow2"></div>
											<div className="segment yellow3"></div>
										</div>

										<div className="circular-progress-inner2">
											<div className="grey-line3">
												<div className="circular-progress-blue"></div>
											</div>
										</div>
									</div>
								</div>
								<div className="below-graph">
									<p className="earnings">Total earning</p>
									<div className="below-graph-numbers">
										<p className="below-graph-dollers">$12,875</p>
										<div className="triangle triangle-up"></div>
										<p className="below-graph-percent">2%</p>
									</div>
									<p className="below-graph-desc">
										Compared to $21,504 last year
									</p>
								</div>
							</div>{" "}
							<div className="side-section-first-graph-stats">
								<div className="graph-stats">
									<p className="graph-stats-title">Presentation</p>
									<p className="graph-stats-value">862</p>
									<div className="graph-stats-chart"></div>
								</div>
								<div className="graph-stats">
									<p className="graph-stats-title">Development</p>
									<p className="graph-stats-value">753</p>
									<div className="graph-stats-chart"></div>
								</div>
								<div className="graph-stats">
									<p className="graph-stats-title">Res & devepln</p>
									<p className="graph-stats-value">553</p>
									<div className="graph-stats-chart"></div>
								</div>
							</div>
						</div>

						<div className="side-section-main-stats">
							<div>
								<p className="main-stats-heading">Total earning</p>
								<div className="main-stats-1">
									<p className="main-stats-dollers">$12,875</p>
									<div className="triangle triangle-up"></div>
									<p className="main-stats-percent">10%</p>
								</div>
								<p className="main-states-details">
									Compared to $21,490 last year
								</p>
							</div>
							<div className="horizantal-break"></div>
							<div>
								<p className="main-stats-heading">Sales</p>
								<div className="main-stats-1">
									<p className="main-stats-dollers">$43,123</p>
									<div className="triangle triangle-up"></div>
									<p className="main-stats-percent">12%</p>
								</div>
								<p className="main-states-details">
									Compared to $21,490 last year
								</p>
							</div>
						</div>
						<div className="side-section-other-stats">
							<div className="side-section-data">
								<p className="side-section-data-name">Travel</p>
								<p className="side-section-data-value">760</p>
								<p className="side-section-data-data">2,540</p>
								<div className="triangle triangle-up triangle-no-margin"></div>
							</div>
							<div className="side-section-data">
								<p className="side-section-data-name">Presen</p>
								<p className="side-section-data-value">760</p>
								<p className="side-section-data-data">2,540</p>
								<div className="triangle triangle-down"></div>
							</div>
							<div className="side-section-data">
								<p className="side-section-data-name">Travel</p>
								<p className="side-section-data-value">760</p>
								<p className="side-section-data-data">2,540</p>
								<div className="triangle triangle-up triangle-no-margin"></div>
							</div>
						</div>
					</div>
				</div>
				<div className="main-section">
					<p className="heading-first"> TIMELINE</p>
					<div className="timeline-bar">
						<p className="timeline-buttons">1W</p>
						<p className="timeline-buttons">1M</p>
						<p className="timeline-buttons-focus">3M</p>
						<p className="timeline-buttons">1Y</p>
						<p className="timeline-buttons">ALL</p>
					</div>

					<div className="navigation">
						<div className="nav-spacing">
							<img className="nav-svg" src={Plus} alt="plus"></img>
							<img className="nav-svg" src={Minus} alt="minus"></img>
						</div>

						<div className="nav-spacing">
							<img className="nav-svg" src={Circle} alt="circle"></img>
						</div>
						<div className="nav-spacing">
							<img className="nav-svg" src={GitFork} alt="gitfork"></img>
							<img className="nav-svg" src={GitPull} alt="gitpull"></img>
							<img className="nav-svg" src={GitCommit} alt="gitcommit"></img>
						</div>
					</div>
					<div className="first-circle">
						<div className="second-circle">
							<div className="center-circle">
								<div className="cc-text">
									<p className="center-text">Investments</p>
									<p className="center-price">$76,644</p>
									<p className="center-months">3 months</p>
								</div>
							</div>
							<div className="bottom-left-circle">
								<div className="cc-text-2">
									<p className="center-text">Design</p>
									<p className="center-price">$32,982</p>
									<p className="center-months">3 months</p>
								</div>
							</div>
							<div className="bottom-right-circle"></div>
							<div className="top-left-cicle ">
								<div className="cc-text-3">
									<p className="center-text-3">Design</p>
									<p className="center-price-3">$32,982</p>
								</div>
							</div>
							<div className="top-right-circle">
								<div className="cc-text-4">
									<p className="center-text-4">Design</p>
									<p className="center-price-4">$32,982</p>
								</div>
							</div>
							<div className="top-middle-cicle">
								<div className="cc-text-5">
									<p className="center-text-5">Design</p>
									<p className="center-price-5">$32,982</p>
								</div>
							</div>

							<div className="circle-1"></div>
							<div className="circle-2"></div>
							<div className="circle-3"></div>
							<div className="circle-4"></div>
							<div className="circle-5"></div>
							<div className="circle-6"></div>
							<div className="circle-7"></div>
							<div className="circle-8"></div>
						</div>
					</div>

					<div className="circle-9"></div>
					<div className="circle-10"></div>
					<div className="circle-11"></div>
					<div className="circle-12"></div>
					<div className="circle-13"></div>
					<div className="circle-14"></div>
					<div className="circle-15"></div>
					<div className="circle-16"></div>
					<div className="circle-17"></div>

					<div className="bottm-stats-1">
						<p className="bottm-stats-heading">TREND GOODS</p>
						<p className="bottom-stats-values">204</p>
					</div>

					<div className="bottm-stats-2">
						<p className="bottm-stats-heading">SHOPING VIEWS</p>
						<p className="bottom-stats-values">65,540</p>
					</div>

					<div className="bottm-stats-3">
						<p className="bottm-stats-heading">STORE DYNAMIC</p>
						<p className="bottom-stats-values">324</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default BubbleChart;
