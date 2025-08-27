import axios from "axios";
import lqip from "lqip-modern";

const getPreviewImageUrl = async (url: string): Promise<string> => {
  const { data } = await axios.get(url, {
    responseType: "arraybuffer",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36",
    },
  });
  const previewImage = await lqip(data);

  return previewImage.metadata.dataURIBase64;
};

export default getPreviewImageUrl;
