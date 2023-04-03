import axios from "axios";

const uploadImage = async (image) => {
    try {
        const result = await axios.post('http://localhost:8080/image', image);
        return result.data;
    } catch(error) {
        console.log(error);
    }
}

const exports  = {
    uploadImage
}

export default exports;