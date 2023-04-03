import ImageUploader from "./components/ImageUploader";
import LoadingScreen from "./components/LoadingScreen";
import SuccessfulUpload from "./components/SuccessfulUpload";
import useLoading from "./hooks/useLoading";
import { useState } from "react";
import imageUploadServices from "./services/imageUpload";
import "./assets/css/style.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState('');
  const [isLoading, setIsLoading] = useLoading();

  const makeUrl = (id, ext) => {
    return `${window.location.href}image/${id}.${ext}`;
  }

  const fileExt = (fileName) => fileName.split('.').pop();

  const reset = () => {
    setFile(null);
    setFileUrl('');
    setIsLoading(false);
  }

  const componentToShow = () => {
    if(file) {
      return <SuccessfulUpload 
                imgSrc={URL.createObjectURL(file)} 
                imgUrl={fileUrl}
                reset={reset}
             />
    } else if(isLoading) {
      return <LoadingScreen />
    } else {
      return <ImageUploader handleUpload={ uploadFile } />
    }
  }

  const uploadFile = async function(receivedFile) {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', receivedFile);
    const { id } = await imageUploadServices.uploadImage(formData);
    setIsLoading(false);
    setFile(receivedFile);
    setFileUrl(makeUrl(id, fileExt(receivedFile.name)));
  } 

  return (
    <main>
      { componentToShow() }
    </main>
  );
}

export default App;
