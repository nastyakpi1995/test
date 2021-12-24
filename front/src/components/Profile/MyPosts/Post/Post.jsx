import s from './Post.module.css';

const Post = ({message, likeCount, key}) => (
    <div className={s.item} key={key}>
        {message}
        <div>
            <img className={s.img} src={'https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png'} />
            <span>like</span>
            <span>dislike</span>
            <button>like {likeCount}</button>
        </div>

    </div>
)
export default Post;