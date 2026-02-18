import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import MainHeader from "../components/MainHeader"

export default function BlogPost() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    fetch(`https://blog.peak-insights.com/wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(res => res.json())
      .then(data => {
        setPost(data[0] || null)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [slug])

  if (loading) return <p className="p-10">Loading...</p>
  if (!post) return <p className="p-10">Post not found</p>

  const image =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

  return (
    <>
      {/* 🔹 SEO FOR SINGLE POST */}
      <Helmet>
        <title>{post.yoast_head_json?.title || post.title.rendered}</title>
        <meta
          name="description"
          content={
            post.yoast_head_json?.description ||
            post.excerpt.rendered.replace(/<[^>]+>/g, "")
          }
        />
      </Helmet>

      <MainHeader />

      <main className="container mx-auto mt-8 px-6 py-20 max-w-4xl">
        {image && (
          <img
            src={image}
            alt={post.title.rendered}
            className="w-full h-80 object-cover rounded-lg mb-8"
          />
        )}

        <div className="mb-4">
            {post._embedded?.["wp:term"]?.[0]?.map(cat => (
                <a
                key={cat.id}
                href={`/blog/category/${cat.slug}`}
                className="text-sm text-primary mr-3 font-semibold uppercase"
                >
                {cat.name}
                </a>
            ))}
        </div>

        <h1 className="text-4xl font-bold mb-6">
          {post.title.rendered}
        </h1>

        <div
          className="prose max-w-none text-justify"
          dangerouslySetInnerHTML={{
            __html: post.content.rendered
          }}
        />
      </main>

      <Footer />
    </>
  )
}
