import { wordpressApi } from '@/util/profile'

type Post = {
	id: number
	link: string
	date: string
	title: { rendered: string }
	excerpt: { rendered: string }
	content: { rendered: string }
	_embedded?: {
		'wp:featuredmedia'?: { source_url?: string }[]
		'wp:term'?: { name: string }[][]
	}
}

const fallbackImages = ['assets/imgs/home-page-2/blog/img-1.png', 'assets/imgs/home-page-2/blog/img-2.png', 'assets/imgs/home-page-2/blog/img-3.png']

function plain(html: string) {
	return html
		.replace(/<[^>]*>/g, '')
		.replace(/&#8217;|&rsquo;/g, '’')
		.replace(/&#8216;|&lsquo;/g, '‘')
		.replace(/&#8220;|&ldquo;/g, '“')
		.replace(/&#8221;|&rdquo;/g, '”')
		.replace(/&#8211;|&ndash;/g, '–')
		.replace(/&#8212;|&mdash;/g, '—')
		.replace(/&#8230;|&hellip;/g, '…')
		.replace(/&amp;/g, '&')
		.replace(/&nbsp;/g, ' ')
		.replace(/\s+/g, ' ')
		.trim()
}

function readTime(html: string) {
	return Math.max(1, Math.round(plain(html).split(' ').length / 200))
}

// Runs at build time (static export): pulls the 3 latest posts from the headless WordPress.
async function getPosts(): Promise<Post[]> {
	try {
		const res = await fetch(`${wordpressApi}/posts?per_page=3&_embed`, { cache: 'force-cache' })
		if (!res.ok) return []
		const data = await res.json()
		return Array.isArray(data) ? data : []
	} catch {
		return []
	}
}

export default async function Blog2() {
	const posts = await getPosts()

	return (
		<>
			<section id="blog" className="section-blog-2 position-relative pt-60 pb-60">
				<div className="container">
					<div className="text-center">
						<div className="d-flex align-items-center justify-content-center">
							<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6} viewBox="0 0 5 6" fill="none">
								<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
							</svg>
							<span className="text-linear-4 d-flex align-items-center"> Latest Posts </span>
						</div>
						<h3>From the Blog</h3>
					</div>
					{posts.length === 0 ? (
						<p className="text-center text-300 mt-5 mb-0">New posts on WordPress operations, migrations and AWS are on the way.</p>
					) : (
						<div className="row mt-8">
							{posts.map((post, i) => {
								const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || fallbackImages[i % fallbackImages.length]
								const category = post._embedded?.['wp:term']?.[0]?.[0]?.name
								const date = new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
								return (
									<div className="col-lg-4" key={post.id}>
										<div className="blog-card rounded-top-2 mb-lg-3 mb-md-5 mb-3">
											<div className="blog-card__image position-relative">
												<div className="zoom-img rounded-2 overflow-hidden">
													<img className="w-100" src={img} alt="" />
													{category ? (
														<span className="position-absolute bottom-0 start-0 m-3 text-white-keep border border-white fw-medium px-3 py-1 fs-7 bg-white rounded-2">{category}</span>
													) : null}
													<span className="blog-card__link position-absolute top-50 start-50 translate-middle icon-md icon-shape rounded-circle">
														<i className="ri-arrow-right-up-line" />
													</span>
												</div>
											</div>
											<div className="blog-card__content position-relative text-center mt-4">
												<span className="blog-card__date fs-7">{date} • {readTime(post.content.rendered)} min read</span>
												<h6 className="blog-card__title mt-2">{plain(post.title.rendered)}</h6>
												<p className="blog-card__description fs-7">{plain(post.excerpt.rendered).slice(0, 140)}</p>
												<a href={post.link} target="_blank" rel="noopener noreferrer" className="link-overlay position-absolute top-0 start-0 w-100 h-100" aria-label={plain(post.title.rendered)} />
											</div>
										</div>
									</div>
								)
							})}
						</div>
					)}
				</div>
			</section>
		</>
	)
}
