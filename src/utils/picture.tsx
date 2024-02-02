import quizeStyle from "../styles/quiz.module.scss";
interface IPic {
  path: string;
}

function Picture(props: IPic) {
  return (
    <div className={quizeStyle.pictureBox}>
      <div className={quizeStyle.pictureFrame}>
      <img className={quizeStyle.image}
        src={props.path}
        alt="pic"
      />
      </div>
    </div>
  );
}
export default Picture;
