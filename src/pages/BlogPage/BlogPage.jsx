import styles from './BlogPage.module.scss'
import BlogPage_List from './component/BlogPage_List'

function BlogPage(){
    return(
        <div className={styles.Blog_Layout_Container}>
            <BlogPage_List/> 
        </div>
    )
}

export default BlogPage