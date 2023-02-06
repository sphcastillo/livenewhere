import { gql } from "graphql-request";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {

    // GraphQL query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
    ) {
        myQuery(
            access_key: $access_key
            categories: $categories
            countries: "us"
            sort: "published_desc"
            keywords: $keywords
        ){
            data {
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
        }
    }
    `;

    // Fetch function with Next.js 13 caching...
    // caching = storing data
    const response = await fetch('https://piraporadobomjesus.stepzen.net/api/full-butterfly/__graphql', {
        method: 'POST',
        cache: isDynamic ? 'no-cache' : 'default',
        // always up to date with the latest news every 20 seconds
        // stops you from exhausting the API
        next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEY,
                categories: category,
                keywords: keywords
            }
        })
    }
    );

    console.log("LOADING NEW DATA FROM API for category >>>",
        category,
        keywords
    )

    const newsResponse =  await response.json();
    
    // Sort function by images vs no images present

    // Return response

}

export default fetchNews;