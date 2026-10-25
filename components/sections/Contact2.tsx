'use client'
import { FormEvent } from 'react'
import { activeSocials, profile } from '@/util/profile'

// No backend needed: the form opens the visitor's email app with the message filled in.
function handleSubmit(e: FormEvent<HTMLFormElement>) {
	e.preventDefault()
	const f = new FormData(e.currentTarget)
	const get = (k: string) => String(f.get(k) || '').trim()
	const subject = get('subject') || `Portfolio enquiry from ${get('name') || 'a visitor'}`
	const body = [get('message'), '', `— ${get('name')}`, get('email'), get('phone')].filter((l, i) => l || i < 2).join('\n')
	window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

function ContactItem({ icon, label, value, href }: { icon: string; label: string; value: string; href: string }) {
	return (
		<div className="d-flex align-items-center mb-3 position-relative d-inline-flex">
			<div className="d-inline-block">
				<div className="icon-flip flex-nowrap icon-shape icon-xxl border border-1 rounded-3 bg-3">
					<i className={`${icon} text-primary-2 fs-26`} />
				</div>
			</div>
			<div className="ps-3 h-100">
				<span className="text-400 fs-6">{label}</span>
				<h6 className="mb-0">{value}</h6>
			</div>
			<a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="position-absolute top-0 start-0 w-100 h-100" aria-label={label} />
		</div>
	)
}

export default function Contact2() {
	return (
		<>

			<section id="contact" className="section-contact-2 position-relative pb-60 overflow-hidden">
				<div className="container position-relative z-1">
					<div className="row align-items-center">
						<div className="col-lg-7 pb-5 pb-lg-0">
							<div className="position-relative">
								<div className="position-relative z-2">
									<h3 className="text-primary-2 mb-2">Let’s connect</h3>
									<p className="text-300 mb-4">{profile.availability}</p>
									<form onSubmit={handleSubmit}>
										<div className="row g-3">
											<div className="col-md-6 ">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="name" name="name" placeholder="Your name" aria-label="Your name" required />
											</div>
											<div className="col-md-6">
												<input type="tel" className="form-control bg-3 border border-1 rounded-3" id="phone" name="phone" placeholder="Phone" aria-label="Phone" />
											</div>
											<div className="col-md-6">
												<input type="email" className="form-control bg-3 border border-1 rounded-3" id="email" name="email" placeholder="Email" aria-label="Email" required />
											</div>
											<div className="col-md-6">
												<input type="text" className="form-control bg-3 border border-1 rounded-3" id="subject" name="subject" placeholder="Subject" aria-label="Subject" />
											</div>
											<div className="col-12">
												<textarea className="form-control bg-3 border border-1 rounded-3" id="message" name="message" placeholder="Message" aria-label="Message" required />
											</div>
											<div className="col-12">
												<button type="submit" className="btn btn-primary-2 rounded-2">
													Send Message
													<i className="ri-arrow-right-up-line" />
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="z-0 bg-primary-dark rectangle-bg z-1 rounded-3" />
							</div>
						</div>
						<div className="col-lg-5 d-flex flex-column ps-lg-8">
							<ContactItem icon="ri-phone-fill" label="Phone Number" value={profile.phone} href={profile.phoneHref} />
							<ContactItem icon="ri-mail-fill" label="Email" value={profile.email} href={`mailto:${profile.email}`} />
							{activeSocials.map((s) => (
								<ContactItem key={s.label} icon={s.icon} label={s.label} value={s.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} href={s.url} />
							))}
							<ContactItem icon="ri-map-2-fill" label="Address" value={profile.address} href={profile.mapsUrl} />
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
