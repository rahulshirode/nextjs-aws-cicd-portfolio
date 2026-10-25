import { services } from '@/util/profile'

export default function Service2() {
	return (
		<>

			<section id="services" className="section-service-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1 p-lg-5 p-1 p-md-4">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> What I do </span>
									</div>
									<h3>
										Keeping websites{" "}
										<span className="text-300">
											fast, secure<br />
											and always shipping
										</span>
									</h3>
								</div>
								<div className="container mt-5">
									<div className="row g-4">
										{services.map((s) => (
											<div className="col-lg-4 col-md-6" key={s.title}>
												<div className="card-servies-2 rounded-2 h-100 hover-up">
													<i className={s.icon} aria-hidden="true" />
													<h6 className="my-3 fw-medium">{s.title}</h6>
													<p className="fs-7 text-300 fw-regular">{s.text}</p>
												</div>
											</div>
										))}
									</div>
									<div className="text-center pt-60">
										<p className="text-300">
											Looking for someone to <span className="text-dark">run, migrate or rebuild</span> your WordPress platform? <br />
											Let&apos;s talk. <a href="#contact" className="text-primary-2">Reach out!</a>
										</p>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/services/bg.png" alt="" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
