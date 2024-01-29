import quizeStyle from "../styles/quiz.module.scss"

function Picture(){
    return(<div className={quizeStyle.pictureBox}>

        <div className={quizeStyle.pictureFrame}></div>
    </div>)
}
export default Picture;