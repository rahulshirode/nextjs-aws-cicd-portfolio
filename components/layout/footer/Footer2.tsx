import { activeSocials, navLinks, profile } from '@/util/profile'

export default function Footer2() {
	return (
		<>
			<footer>
				<div className="section-footer-2 position-relative">
					<div className="container position-relative z-1 border-top border-1 pb-2 pt-4">
						<div className="text-center">
							<a href="#about" className="d-flex main-logo align-items-center justify-content-center mb-3">
								<img src="assets/imgs/home-page-2/template/favicon.svg" alt="" />
								<span className="fs-4 ms-2">{profile.brand}</span>
							</a>
							<div className="d-flex justify-content-center gap-3">
								<a href={`mailto:${profile.email}`} aria-label="Email">
									<i className="ri-mail-fill fs-18" />
								</a>
								{activeSocials.map((s) => (
									<a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} key={s.label}>
										<i className={`${s.icon} fs-18`} />
									</a>
								))}
							</div>
							<div className="navigation d-flex align-items-center justify-content-center flex-wrap gap-4 my-4">
								{navLinks.map((l) => (
									<a href={l.href} className="fs-6" key={l.href}>{l.label}</a>
								))}
							</div>
							<p className="fs-7 text-300 mb-2">© {new Date().getFullYear()} {profile.name}</p>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
