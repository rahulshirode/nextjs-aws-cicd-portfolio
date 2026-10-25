import Marquee from 'react-fast-marquee'
import { milestones, platforms, profile } from '@/util/profile'

const half = Math.ceil(platforms.length / 2)

function Dot({ size = 5 }: { size?: number }) {
	return (
		<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={size} height={size + 1} viewBox="0 0 5 6" fill="none">
			<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
		</svg>
	)
}

function PlatformRow({ items }: { items: string[] }) {
	return (
		<ul className="carouselTicker__list m-0">
			{items.map((p) => (
				<li className="carouselTicker__item" key={p}>
					<span className="d-inline-block border border-1 rounded-2 px-3 py-1 text-300 fs-6 text-nowrap">{p}</span>
				</li>
			))}
		</ul>
	)
}

export default function Coporation2() {
	return (
		<>

			<section className="section-coporation">
				<div className="container pt-5">
					<div className="row">
						<div className="col-lg-8">
							<div className="rounded-3 border border-1 position-relative overflow-hidden">
								<div className="box-linear-animation">
									<div className="p-lg-8 p-md-6 p-3">
										<div className="d-flex align-items-center">
											<Dot />
											<span className="text-linear-4 d-flex align-items-center"> Cooperation </span>
										</div>
										<h3 className="fw-medium">
											Trusted by teams <span className="text-300">in the <br /></span> UK, USA <span className="text-300">and India_</span>
										</h3>
										<div className="my-5 border border-1 rounded-2 p-3">
											<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
												<PlatformRow items={platforms.slice(0, half)} />
											</Marquee>
											<Marquee className="carouselTicker carouselTicker-right position-relative z-1 mt-2" direction="right">
												<PlatformRow items={platforms.slice(half)} />
											</Marquee>
										</div>
										<div className="d-flex flex-column flex-md-row align-items-center gap-3">
											<div>
												<div className="circle-1 position-relative z-0">
													<div className="circle-2 position-absolute top-50 start-50 translate-middle z-1">
														<div className="position-absolute top-50 start-50 translate-middle z-2">
															<img className="w-100 h-100 rounded-circle" src="assets/imgs/coporation/avatar.png" alt={profile.name} />
														</div>
													</div>
												</div>
											</div>
											<div className="d-flex flex-column gap-2">
												<a href={profile.phoneHref}>
													<i className="ri-phone-fill" />
													<span className="text-300"> [phone] <span className="text-secondary-2">{profile.phone}</span></span>
												</a>
												<a href={`mailto:${profile.email}`}>
													<i className="ri-mail-fill" />
													<span className="text-300"> [email] <span className="text-secondary-2">{profile.email}</span></span>
												</a>
												<span>
													<i className="ri-map-pin-line" />
													<span className="text-300"> [based in] <span className="text-secondary-2">Pune, India</span></span>
												</span>
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
						</div>
						<div className="col-lg-4 pt-lg-0 pt-5">
							<div className="bg-3 rounded-3 border border-1 p-md-6 p-3 position-relative h-100 overflow-hidden">
								<div className="d-flex align-items-center">
									<Dot />
									<span className="text-linear-4 d-flex align-items-center"> Milestones </span>
								</div>
								<div className="h-100 position-relative">
									<ul className="ps-3 d-flex flex-column justify-content-around h-100 position-relative">
										{milestones.map((m) => (
											<li className="position-relative z-1" key={m.text}>
												<div className="d-flex align-items-baseline gap-2">
													<p className="text-300 text-nowrap">{m.date}:</p>
													<span className="text-dark">{m.text}</span>
												</div>
											</li>
										))}
									</ul>
									<div className="line-left position-absolute border-start z-0" />
								</div>
								<div className="bg-overlay position-absolute bottom-0 start-0 z-1" />
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
