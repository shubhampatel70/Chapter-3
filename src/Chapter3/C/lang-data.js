import React, { useContext } from "react";
// import Context from "./Context";
import { LgnContext } from "./Context";

const Langdata = () => {
  console.log(LgnContext);
  const [lang,setLang] = useContext(LgnContext);
  return (
    <>
        <h1 style={{ color: "crimson" }}>Task-c</h1>
      <div>
        <select onClick={(e) => setLang(e.target.value)}>
          <option value="english">English</option>
          <option value="gujarati">Gujarati</option>
          <option value="hindi">Hindi</option>
        </select>
        <div>
          {lang === "english" ? (
            <>
             
              <div>
                Hello, My name is Krishna. I like to play with animals and eat butter.
              </div>
            </>
          ) : lang === "gujarati" ? (
            <div>નમસ્કાર, મારું નામ કૃષ્ણ છે. મને પ્રાણીઓ સાથે રમવું અને માખણ ખાવું ગમે છે</div>
          ) : (
            <div>नमस्ते, मेरा नाम कृष्णा है। मुझे जानवरों के साथ खेलना और मक्खन खाना पसंद है।</div>
          )}
        </div>
      </div>
    </>
  );
};
export default Langdata;
