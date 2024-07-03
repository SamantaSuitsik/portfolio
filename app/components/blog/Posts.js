import Post from "./Post";
import styles from "@/styles/blog/posts.module.css"

export default function Posts() {
    return (
        <>  
            <div className={styles.container}>
                <div className={styles.posts}>
                    <div className={styles.post}>
                        <Post title="Me and Vim" date="03.07.2024"/>
                    </div>  
                    <div className={styles.post}>
                        <Post title="Me and Vim" date="03.07.2024"/>
                    </div>
                    <div className={styles.post}>
                        <Post title="Me and Vim" date="03.07.2024"/>
                    </div>
                    <div className={styles.post}>
                        <Post title="Me and Vim" date="03.07.2024"/>
                    </div>              

                </div>
            </div>
        </>
    );
}