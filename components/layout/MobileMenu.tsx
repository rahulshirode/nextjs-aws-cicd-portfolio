'use client'
import Link from 'next/link'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { activeSocials, navLinks, profile } from '@/util/profile'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex main-logo align-items-center d-inline-flex" href="/">
							<img src="assets/imgs/home-page-2/template/favicon.svg" alt="" />
							<span className="fs-4 ms-2 text-dark">{profile.brand}</span>
						</Link>
						<div className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} onClick={handleMobileMenu}>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<PerfectScrollbar className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										{navLinks.map((l, i) => (
											<li className="nav-item" key={l.href}>
												<a className={`nav-link${i === 0 ? ' active' : ''}`} href={l.href} onClick={handleMobileMenu}>{l.label}</a>
											</li>
										))}
									</ul>
								</nav>
								<div className="d-flex gap-3 mt-4">
									<a href={`mailto:${profile.email}`} aria-label="Email"><i className="ri-mail-fill fs-18" /></a>
									{activeSocials.map((s) => (
										<a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} key={s.label}>
											<i className={`${s.icon} fs-18`} />
										</a>
									))}
								</div>
							</div>
						</PerfectScrollbar>
					</div>
				</div>
			</div>
		</>
	)
}
