import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams } : {
    searchParams: Promise<{query?: string}>
}) {
    const query = (await searchParams).query;

    const posts = [{
        _createdAt: new Date(),
        views: 55,
        author: { _id: 1, name: "Tokhir Asadov" },
        _id:1,
        description: "This is a description",
        image: "https://www.elcom.com.vn/storage/uploads/images/4Z2zyaQRuYa81t6wuUarkozbGJJiIJSb1Ph3rfGh.jpg",
        category: "Robots",
        title: "We Robots",
    }]
  return (
    <>
        <section className="pink_container">
            <h1 className="heading">Pitch Your Startup, <br/> Connect With Entrepreneurs</h1>
            <p className="sub-heading !max-w-3xl">
                Submit Ideas, Vote on Pitches, and Get Noticed In Virtual Competitions.
            </p>
            <SearchForm query={query} />
        </section>
        
        <section className="section_container">
            <p className="text-30 font-semibold">
                {query ? `Search results for ${query}` : 'All Startups'}
            </p>
            <ul className="mt-7 card_grid">
                {posts?.length > 0 ? (
                    posts.map((post: StartupCardType) => (
                        <StartupCard post={post} key={post?.id}/>
                    ))
                ) : (
                    <p className="no-result">No startups found</p>
                )}
            </ul>
        </section>
    </>
  );
}
