import react, { useRef, useState } from "react";
import heic2any from "heic2any";
import { Wrap } from "./Styles";

function ImageUpload() {
  const imgRef = useRef();
  const [base64, setBase64] = useState("");

  const upload = async () => {
    const reader = new FileReader();

    const file = imgRef.current.files[0];
    const fileName = file.name.split(".")[1].toLowerCase(); //확장자명 체크를 위해 소문자 변환 HEIC, heic

    if (fileName === "heic") {
      await heic2any({ blob: file, toType: "image/jpeg" })
        .then(function (resultBlob) {
          const newfile = new File(
            [resultBlob],
            file.name.split(".")[0] + ".jpg",
            {
              type: "image/jpeg",
              lastModified: new Date().getTime(),
            }
          );
          reader.readAsDataURL(newfile);
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
      <div>
        <img src={base64} width={"200px"} height={"300px"} />
      </div>
      <div>
        <input
          style={{ display: "none" }}
          accept="image/*, image/heic"
          id="uploadImg"
          name="img_url"
          type="file"
          content_type="multipart/form-data"
          ref={imgRef}
          onClick={upload}
        />
        <span>취소</span>
        <label htmlFor={"uploadImg"}>업로드</label>
      </div>
    </Wrap>
  );
}

export default ImageUpload;
