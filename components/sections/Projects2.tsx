'use client'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { projects } from '@/util/profile'

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: {
		delay: 6000,
		pauseOnMouseEnter: true,
	},
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
}

const ArrowIcon = () => (
	<svg xmlns="http://www.w3.org/2000/svg" width={13} height={13} viewBox="0 0 13 13" fill="none">
		<path d="M11.0037 3.91421L2.39712 12.5208L0.98291 11.1066L9.5895 2.5H2.00373V0.5H13.0037V11.5H11.0037V3.91421Z" fill="#8F8F92" />
	</svg>
)

function InfoRow({ label, value }: { label: string; value: string }) {
	return (
		<li className="text-dark mb-3 border-bottom pb-3">
			<div className="d-flex justify-content-between gap-3">
				<p className="text-dark mb-0">{label}</p>
				<p className="text-300 mb-0 text-end">{value}</p>
			</div>
		</li>
	)
}

export default function Projects2() {
	return (
		<>

			<section id="portfolio" className="section-projects-2 pt-5">
				<div className="container">
					<div className="rounded-3 border border-1 position-relative overflow-hidden">
						<div className="box-linear-animation position-relative z-1">
							<div className="p-lg-8 p-md-6 p-3 position-relative z-1">
								<div className="d-flex align-items-center">
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
										<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
									</svg>
									<span className="text-linear-4 d-flex align-items-center"> Projects </span>
								</div>
								<h3>Selected Work</h3>
								<div className="position-relative">
									<Swiper {...swiperOptions} className="swiper slider-two pb-3 position-relative">
										{projects.map((p) => (
											<SwiperSlide key={p.title}>
												<div className="p-lg-5 p-md-4 p-3 border border-1 mt-5 bg-3">
													<div className="row">
														<div className="col-lg-5">
															<div className="project-highlight">
																<span className="big text-linear-4">{p.highlight}</span>
																<span className="text-300 fs-5 mt-2">{p.highlightSub}</span>
															</div>
														</div>
														<div className="col-lg-7 ps-lg-5 mt-5 mt-lg-0">
															<h4 className="text-linear-4">{p.title}</h4>
															<p>{p.text}</p>
															<ul className="mt-4 list-unstyled">
																<li className="text-secondary-2 mb-3 border-bottom pb-3">Project Info</li>
																<InfoRow label="Client" value={p.client} />
																<InfoRow label="Timeline" value={p.time} />
																<InfoRow label="Role" value={p.role} />
																<InfoRow label="Technologies" value={p.tech} />
															</ul>
															{p.demo || p.github ? (
																<div className="d-flex flex-wrap align-items-center gap-3 mt-7">
																	{p.demo ? (
																		<a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																			<ArrowIcon /> Live site
																		</a>
																	) : null}
																	{p.github ? (
																		<a href={p.github} target="_blank" rel="noopener noreferrer" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
																			<i className="ri-github-fill" /> View on GitHub
																		</a>
																	) : null}
																</div>
															) : null}
														</div>
													</div>
												</div>
											</SwiperSlide>
										))}
									</Swiper>
									<div className="position-absolute bottom-0 end-0 gap-2 pb-7 pe-5 d-none d-md-flex z-2">
										<div className="swiper-button-prev end-0 shadow position-relative" aria-label="Previous project">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
											</svg>
										</div>
										<div className="swiper-button-next end-0 shadow position-relative" aria-label="Next project">
											<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
												<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<img className="position-absolute top-0 start-0 z-0" src="assets/imgs/home-page-2/projects/bg.png" alt="" />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
