import styles from './BlogPage_List.module.scss'

function BlogPage_List(){
    const Posts = [
        {
            title: 'Một chút gì đó',
            
        },
        {
            title: "khum"
        },
        {
            title: 'ReactJS'
        }
    ]

    return(
        <div className='Post_List'>
            {
                Posts.map(post => (
                    <h1 className={styles.BlogText}>{post.title}</h1>
                ))
            }
        </div>
    )
}

export default BlogPage_List