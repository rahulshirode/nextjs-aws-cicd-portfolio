import Marquee from 'react-fast-marquee'
import { skills, techIcons } from '@/util/profile'

const half = Math.ceil(techIcons.length / 2)

function IconRow({ items }: { items: typeof techIcons }) {
	return (
		<ul className="carouselTicker__list m-0">
			{items.map((t) => (
				<li className="carouselTicker__item mt-6" key={t.label}>
					<span className="brand-logo icon_80 icon-shape rounded-3">
						<i className={`${t.icon} fs-2 text-primary-2`} aria-label={t.label} />
					</span>
					<span className="tool-tip">{t.label}</span>
				</li>
			))}
		</ul>
	)
}

export default function Skills2() {
	return (
		<>

			<section id="skills" className="section-skills-2 pt-5">
				<div className="container">
					<div className="rounded-3 bg-3 border border-1 position-relative overflow-hidden">
						<div className="position-relative z-1 py-60">
							<div className="position-relative z-1">
								<div className="text-center">
									<div className="d-flex align-items-center justify-content-center">
										<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
											<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
										</svg>
										<span className="text-linear-4 d-flex align-items-center"> Skills </span>
									</div>
									<h3>My Toolkit</h3>
								</div>
								<div className="container mt-8">
									<div className="row">
										<div className="col-lg-6">
											<div className="row">
												<div className="col-lg-10 col-md-9 mx-auto overflow-hidden">
													<Marquee className="carouselTicker carouselTicker-right position-relative z-1" direction="right">
														<IconRow items={techIcons.slice(0, half)} />
													</Marquee>
												</div>
												<div className="col-lg-8 col-md-7 col-10 mx-auto overflow-hidden">
													<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
														<IconRow items={techIcons.slice(half)} />
													</Marquee>
												</div>
											</div>
										</div>
										<div className="col-lg-6 border-start-md mt-lg-0 mt-5">
											<div className="row">
												<div className="col-md-10 mx-auto">
													<div className="h-100 position-relative">
														<ul className="ps-3 d-flex flex-column justify-content-between h-100 position-relative">
															{skills.map((s) => (
																<li className="mb-3" key={s.label}>
																	<div className="d-flex flex-column flex-md-row gap-2">
																		<p className="text-dark text-nowrap mb-0">{s.label}:</p>
																		<span className="text-300">{s.text}</span>
																	</div>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="position-absolute d-none d-md-block decorate">
							<div className="rotateme">
								<div className="circle-1-1" />
								<div className="circle-1-2 position-absolute top-50 start-50 translate-middle">
									<svg className="mb-5 position-absolute bottom-0 start-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
								<div className="circle-1-3 position-absolute top-50 start-50 translate-middle ">
									<svg className="mb-3 position-absolute bottom-0 end-0" xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
										<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
