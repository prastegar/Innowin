import {REST_URL as url, SOCKET as socket} from "src/consts/URLS"
import {REST_REQUEST} from "src/consts/Events"
import {TOKEN} from 'src/consts/data'
import {getFile} from "../media/media";

export const getPictureProduct = (productId, handleResult) => {
    socket.emit(REST_REQUEST,
      {
        method: "get",
        url: `${url}/products/pictures/?product=${productId}`,
        result: "products/pictures/?product-get",
        token: TOKEN,
      }
    );
    socket.on("products/pictures/?product-get", (res) => {
      if (res.data.detail) {
        // TODO mohsen: handle error
        return false
      }
      res.sort(function(obj1, obj2) {
        return obj1.order - obj2.order;
      });
      res.map((picture) => {
        return getFile(picture.picture_media, handleResult);
      });
    });
};