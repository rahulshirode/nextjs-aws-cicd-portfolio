import { activeSocials, profile } from '@/util/profile'

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: any) {
	return (
		<>
			<div className={`offCanvas__info ${isOffCanvas ? 'active' : ''}`}>
				<div className="offCanvas__close-icon menu-close" onClick={handleOffCanvas}>
					<button aria-label="Close"><i className="ri-close-line" /></button>
				</div>
				<div className="offCanvas__logo mb-5">
					<h3 className="mb-0">Get in touch</h3>
				</div>
				<div className="offCanvas__side-info mb-30">
					<div className="contact-list mb-30">
						<p className="fs-6 fw-medium text-200 mb-5">{profile.availability}</p>
						<div className="mb-3">
							<span className="text-400 fs-5">Phone Number</span>
							<p className="mb-0"><a href={profile.phoneHref}>{profile.phone}</a></p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">Email</span>
							<p className="mb-0"><a href={`mailto:${profile.email}`}>{profile.email}</a></p>
						</div>
						<div className="mb-3">
							<span className="text-400 fs-5">Address</span>
							<p className="mb-0">{profile.address}</p>
						</div>
					</div>
					{activeSocials.length ? (
						<div className="contact-list">
							<p className="text-400 fs-5 mb-2">Social</p>
							<div className="d-flex gap-3">
								{activeSocials.map((s) => (
									<a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} key={s.label}>
										<i className={`${s.icon} fs-18`} />
									</a>
								))}
							</div>
						</div>
					) : null}
				</div>
			</div>
			<div className={`offCanvas__overly ${isOffCanvas ? 'active' : ''}`} onClick={handleOffCanvas} />
		</>
	)
}
