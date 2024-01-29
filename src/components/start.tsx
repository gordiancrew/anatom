import "../styles/start.scss";
import HexagonButton from "../utils/hexagon-button";
// import LangButtons from "../utils/lang-buttons";
// import Footer from "./footer";

function Start() {
  return (
    <div className="startWrapper">
      {/* {localStorage.currentName ? (
        <div className="autorName">{`${t("signinup.autorised")} "${
          localStorage.currentName
        }"`}</div>
      ) : null} */}
      {/* <LangButtons changeLng={changeLng} /> */}
      {/* {localStorage.currentName ? (
        <HexagonButton content={t("signinup.yourprofile")} link="/profile" />
      ) : null}
      {localStorage.currentName ? (
        <div onClick={logout} style={{ display: "contents" }}>
          <HexagonButton content={t("signinup.logout")} link="/home" />
        </div>
      ) : null}
      {!localStorage.currentName ? (
        <HexagonButton content={t("signinup.login")} link="/" />
      ) : null} */}
      <HexagonButton content={"Играть"} link="/question" />
      {/* <HexagonButton content={t("signinup.rules")} link="/rules" /> */}
      {/* <Footer /> */}
    </div>
  );
}
export default Start;
