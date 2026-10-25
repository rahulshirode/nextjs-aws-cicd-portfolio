import data from "@/util/blog.json"
import BlogDetailsClient from "./BlogDetailsClient"

// Required by `output: "export"`: pre-build one page per post in util/blog.json
export function generateStaticParams() {
    return data.map((post) => ({ id: String(post.id) }))
}

export default function BlogDetailsPage() {
    return <BlogDetailsClient />
}
