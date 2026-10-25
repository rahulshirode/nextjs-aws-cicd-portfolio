'use client'
import { useState } from 'react'
import { experience } from '@/util/profile'

export default function Experience2() {
	const [active, setActive] = useState(0)
	const job = experience[active]

	return (
		<>

			<section id="experience" className="section-experience pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Experience </span>
								</div>
								<h3>
									+12
									<span className="text-300"> years of </span>
									building
									<span className="text-300">
										{' '}and running <br />
										websites that matter
									</span>
								</h3>
								<div className="row mt-5">
									<div className="col-lg-4">
										<div className="d-flex flex-column gap-2" role="tablist" aria-label="Employers and clients">
											{experience.map((e, i) => (
												<button
													type="button"
													role="tab"
													aria-selected={i === active}
													className={`technology border border-1 rounded-3 p-3${i === active ? ' active' : ''}`}
													onClick={() => setActive(i)}
													key={e.company}
												>
													<div className="d-flex align-items-center gap-2">
														<span className="exp-initials">{e.initials}</span>
														<div className="d-flex flex-column ms-2">
															<h5 className="mb-1 fs-6">{e.company}</h5>
															<span className="text-300 fs-7">{e.period}</span>
														</div>
													</div>
												</button>
											))}
										</div>
									</div>
									<div className="col-lg-8 ps-lg-5 mt-5 mt-lg-0" role="tabpanel">
										<h6 className="text-linear-4 mb-1">{job.role}</h6>
										<p className="text-300 mb-0">{job.company} · {job.via} · {job.period}</p>
										<ul className="mt-4">
											{job.bullets.map((b) => (
												<li className="text-dark mb-3" key={b}>{b}</li>
											))}
										</ul>
										<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
											{job.tags.map((t) => (
												<span className="text-300 border border-1 px-3 py-1" key={t}>{t}</span>
											))}
										</div>
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
