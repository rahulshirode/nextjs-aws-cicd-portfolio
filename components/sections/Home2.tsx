import Link from 'next/link'
import Marquee from 'react-fast-marquee'
import { profile, techIcons } from '@/util/profile'

export default function Home2() {
	return (
		<>

			<section id="about" className="section-hero-2 position-relative pt-130 pb-3">
				<div className="container hero-2">
					<div className="border border-1 rounded-3">
						<div className="box-linear-animation position-relative z-1">
							<div className="row align-items-end py-60">
								<div className="col-lg-5 ps-lg-5 text-lg-start text-center">
									<div className="position-relative mb-lg-0 mb-5">
										<img src="assets/imgs/home-page-2/hero-1/people.png" alt={profile.name} />
										<div className="position-absolute end-0 top-100 translate-middle-y icon-decorate">
											<img src="assets/imgs/home-page-2/hero-1/icon.svg" alt="" />
										</div>
									</div>
								</div>
								<div className="col-lg-6 mx-lg-auto col-md-12">
									<div className="p-lg-0 p-md-8 p-3">
										<div className="text-secondary-2 d-flex align-items-center">
											&lt;span&gt;
											<div className="text-dark">
												<div className="typewriter">
													<h1 className="fs-6 fw-medium">Hey, I’m {profile.name}</h1>
												</div>
											</div>
											&lt;/span&gt;
										</div>
										<h1 className="fs-50 my-3">Senior <span className="text-linear-4">{'{'}Web Operations{'}'}</span> Engineer<span className="flicker">_</span></h1>
										<p className="mb-6 text-secondary-2">&lt;p&gt;<span className="text-dark">12+ years on</span> <span className="text-secondary-2">WordPress</span>, <span className="text-secondary-2">WP Engine</span>, <span className="text-secondary-2">AWS</span> and <span className="text-secondary-2">CI/CD</span><span className="text-dark">... I keep enterprise websites running, migrating and shipping for teams in the UK and USA.</span>&lt;/p&gt;</p>
										<div className="row">
											<div className="col-7">
												<Marquee className="carouselTicker carouselTicker-left position-relative z-1 mt-lg-0 mt-8">
													<ul className="carouselTicker__list ">
														{techIcons.map((t) => (
															<li className="carouselTicker__item" key={t.label}>
																<span className="brand-logo icon_60 icon-shape rounded-3" title={t.label}>
																	<i className={`${t.icon} fs-3 text-primary-2`} aria-label={t.label} />
																</span>
															</li>
														))}
													</ul>
												</Marquee>
											</div>
											<div className="col-5 d-flex align-items-end">
												<span className="fs-6 text-300 mb-2">...and more</span>
											</div>
										</div>
										<div className="d-flex flex-wrap gap-2 mt-4">
											{profile.resumeUrl ? (
												<Link href={profile.resumeUrl} className="btn me-2 text-300 ps-0" target="_blank">
													<i className="ri-download-line text-primary-2" />
													[ Download my CV ]
												</Link>
											) : null}
											<a href={`mailto:${profile.email}`} className="btn me-2 text-300 ps-0">
												<i className="ri-mail-send-line text-primary-2" />
												[ Email me ]
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="background position-absolute top-0 start-0 w-100 h-100">
					<img className="bg-w" src="assets/imgs/home-page-2/hero-1/bg.png" alt="" />
					<img className="bg-d" src="assets/imgs/home-page-2/hero-1/bg-dark.png" alt="" />
				</div>
			</section>

		</>
	)
}
