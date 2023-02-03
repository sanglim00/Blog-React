import { useRef, useState } from "react";
import heic2any from "heic2any";
import { ImgWrap, Wrap } from "./Styles";

function ImageUpload() {
  const imgRef = useRef(null);
  const [base64, setBase64] = useState("");

  const handleButtonClick = () => {
    imgRef.current.click();
  };

  const handleChange = async () => {
    const reader = new FileReader();

    let file = imgRef.current.files[0];
    const fileName = file.name.split(".")[1].toLowerCase(); //확장자명 체크를 위해 소문자 변환 HEIC, heic

    if (fileName === "heic") {
      await heic2any({ blob: file, toType: "image/jpeg" })
        .then(function (resultBlob) {
          file = new File([resultBlob], file.name.split(".")[0] + ".jpg", {
            type: "image/jpeg",
            lastModified: new Date().getTime(),
          });
          reader.readAsDataURL(file);
        })
        .catch(function (x) {
          console.log(x);
        });
    } else reader.readAsDataURL(file);

    reader.onloadend = async () => {
      setBase64(reader.result);
    };
  };

  return (
    <Wrap>
      <ImgWrap>
        <img src={base64} />
        <button onClick={handleButtonClick}>파일 업로드</button>
        <input type="file" ref={imgRef} onChange={handleChange} />
      </ImgWrap>
    </Wrap>
  );
}

export default ImageUpload;
