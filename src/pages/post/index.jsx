import styles from "../../styles/dPost.module.scss";
import Link from "next/link";

export default function Posts({ posts }) {
    return (
      <div className={styles.posts}>
          
        <div className={styles.postsWrap}>
        {posts && posts.map((post) => 
            
        <div key={post.id}>

           <Link href={`/post/${post.id}`}>
           <h3>{post.title}</h3>
           <div className={styles.textWrap}>
           <p style={{color: "black"}}>Click to continue...</p>
            <span>#{post.tags[0]}</span>
            <span>#{post.tags[1]}</span>
           </div>
           </Link>

        </div>
        
        )}
        </div>  

        <Link href={"/"}><h2 style={{textDecoration: "underline"}}>Home</h2></Link>
      </div>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch("https://dummyjson.com/posts");
    const data = await res.json();
  
    return {
      props: {
        posts: data.posts
      },
    };
  }