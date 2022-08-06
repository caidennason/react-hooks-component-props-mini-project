import React from "react"
import Article from "./Article"

function ArticleList({posts}){
    console.log('hi', posts)
    const postMaker = posts.map((post) => {
        return <Article key={post.id} p={post}/>
    })
    return (
        <main>
            {postMaker}
        </main>
    )
}

export default ArticleList