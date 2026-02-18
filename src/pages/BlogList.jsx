import MainHeader from "../components/MainHeader"
import Footer from "../components/Footer"
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { CATEGORIES } from "../data/categories"

export default function BlogList() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] = useState("all")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const POSTS_PER_PAGE = 6

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  /* ---------------- Active Category Sync ---------------- */
  useEffect(() => {
    if (slug && CATEGORIES[slug]) {
      setActiveCategory(slug)
    } else {
      setActiveCategory("all")
    }
  }, [slug])

  /* ---------------- Reset Page When Category Changes ---------------- */
  useEffect(() => {
    setPage(1)
  }, [slug])

  /* ---------------- Fetch Posts ---------------- */
  useEffect(() => {
    setLoading(true)

    let url =
      `https://blog.peak-insights.com/wp-json/wp/v2/posts?_embed&per_page=${POSTS_PER_PAGE}&page=${page}`

    if (slug && CATEGORIES[slug]) {
      url += `&categories=${CATEGORIES[slug].id}`
    }

    fetch(url)
      .then(res => {
        const total = res.headers.get("X-WP-TotalPages")
        if (total) setTotalPages(Number(total))
        return res.json()
      })
      .then(data => {
        setPosts(data || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))

  }, [slug, page])

  /* ---------------- Loading Spinner ---------------- */
  if (loading) {
    return (
      <>
        <MainHeader />
        <div className="flex justify-center py-24">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>
          {slug && CATEGORIES[slug]
            ? `${CATEGORIES[slug].label} | Blog`
            : "Blogs & Articles"}
        </title>

        <meta
          name="description"
          content={
            slug && CATEGORIES[slug]
              ? `Latest ${CATEGORIES[slug].label.toLowerCase()} articles from Peak Insights Advisory.`
              : "Latest insights, research, and public opinion analysis from Peak Insights Advisory."
          }
        />
      </Helmet>

      <MainHeader />

      <main className="container mx-auto mt-8 px-6 py-20">
        <h1 className="text-4xl text-center font-bold mb-12">
          Blogs & Articles
        </h1>

        {/* ================= CATEGORY NAVIGATION ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-12">
          <button
            onClick={() => navigate("/blog")}
            className={`relative w-1/2 px-2 py-2 rounded-full transition-all duration-300 transform ${
              activeCategory === "all"
                ? "bg-[#1F4FA3] text-white shadow-md scale-105"
                : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
            }`}
          >
            All
          </button>

          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => navigate(`/blog/category/${key}`)}
              className={`relative w-2/3 px-2 py-2 rounded-full transition-all duration-300 transform ${
                activeCategory === key
                  ? "bg-[#1F4FA3] text-white shadow-md scale-105"
                  : "bg-gray-100 hover:bg-gray-200 hover:scale-105"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>


        {/* ================= POSTS GRID ================= */}
        <div
          className={`grid gap-10 ${
            posts.length === 1
              ? "md:grid-cols-1 justify-items-center"
              : posts.length === 2
              ? "md:grid-cols-2 justify-items-center"
              : "md:grid-cols-3"
          }`}
        >
          {/* Empty State */}
          {posts.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              No posts found.
            </p>
          )}

          {/* Posts */}
          {posts.map(post => {
            const image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url

            return (
              <article
                key={post.id}
                className={`
                  border rounded-lg overflow-hidden bg-white shadow-lg
                  w-full ${posts.length === 1 ? "md:w-[80%]" : ""}
                  transition-all duration-500 transform
                  hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.01]
                  animate-fadeIn
                `}
              >
                {image && (
                  <img
                    src={image}
                    alt={post.title.rendered}
                    className="w-full h-56 object-cover"
                  />
                )}

                <div className="p-6">
                  <div className="mb-2">
                    {post._embedded?.["wp:term"]?.[0]?.map(cat => (
                      <Link
                        key={cat.id}
                        to={`/blog/category/${cat.slug}`}
                        className="text-xs text-primary mr-2 uppercase font-semibold"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-3 hover:text-primary transition">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </h2>

                  <div
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: post.excerpt.rendered
                    }}
                  />
                </div>
              </article>
            )
          })}
        </div>

        {/* ================= PAGINATION ================= */}
        <div className="flex justify-center gap-6 mt-16 items-center">
          <button
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="px-5 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            ← Prev
          </button>

          <span className="text-sm font-medium">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage(p => p + 1)}
            className="px-5 py-2 bg-gray-200 rounded-lg disabled:opacity-50 hover:bg-gray-300 transition"
          >
            Next →
          </button>
        </div>
      </main>

      <Footer />

      {/* ================= LOCAL ANIMATION STYLE ================= */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeInUp 0.6s ease forwards;
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </>
  )
}
