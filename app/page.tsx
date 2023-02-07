import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./NewsList";


async function Homepage() {

    //fetch the news data 
    //take in certain categories for what you want to fetch
    // const news : NewsResponse =  response || await fetchNews(categories.join(","));
    const news = await fetchNews(categories.join(","));

    //set timeout for 3 seconds
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    
    // console.log("news", news)
    return (
        <div>
            <NewsList news={news}/>
        </div>
    )
}

export default Homepage;