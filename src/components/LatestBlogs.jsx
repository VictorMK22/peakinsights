import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"

export default function LatestBlogs() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  const sectionRef = useRef(null)

  // 🔹 Fetch posts
  useEffect(() => {
    fetch(
      "https://blog.peak-insights.com/wp-json/wp/v2/posts?_embed&per_page=3&orderby=date&order=desc"
    )
      .then(res => res.json())
      .then(data => {
        setPosts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  // 🔹 Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="latest-blogs"
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-16">
          Latest Insights
        </h2>

        {/* 🔹 LOADING */}
        {loading && (
          <div className="flex justify-center py-10">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!loading && (
          <div
            className={`
              grid gap-8
              ${posts.length === 1
              ? "md:grid-cols-1 justify-items-center"
              : posts.length === 2
              ? "md:grid-cols-2 justify-items-center"
              : "md:grid-cols-3"}
            `}
          >
            {posts.map((post, index) => {
              const image =
                post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

              return (
                <article
                  key={post.id}
                  className={`
                    bg-white rounded-lg overflow-hidden shadow-lg text-justify
                    w-full ${posts.length === 1 ? "md:w-[80%]" : ""}
                    transition-all duration-500 transform
                    hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]
                    animate-fadeIn
                    ${isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"}
                  `}
                  style={{
                    transitionDelay: `${index * 200}ms`
                  }}
                >
                  {image && (
                    <img
                      src={image}
                      alt={post.title.rendered}
                      className="h-48 w-full object-cover"
                    />
                  )}

                  <div className="p-6">
                    <div className="mb-4">
                      {post._embedded?.["wp:term"]?.[0]?.map(cat => (
                        <Link
                          key={cat.id}
                          to={`/blog/category/${cat.slug}`}
                          className="text-base text-primary mr-2 uppercase font-bold"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>

                    <h3 className="font-bold mb-3">
                      {post.title.rendered}
                    </h3>

                    <div
                      className="text-base text-gray-900 mb-4"
                      dangerouslySetInnerHTML={{
                        __html: post.excerpt.rendered
                      }}
                    />

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary font-bold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        )}

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-block px-10 py-3 bg-[#1F4FA3] text-white rounded hover:bg-[#0F2A5F] transition duration-300"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  )
}
