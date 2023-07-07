import axios from "axios";

const API_KEY = "AIzaSyCXcWUwGBCn_PTQt0DKeRHClIkoCzrfUJQ";
const CHANNEL_ID = "UCsSulJ2VxU31WL7Psj-A97A";

export const getLatestVideos = async () => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=4`
    );

    return response.data.items;
  } catch (error) {
    console.error(error);
  }
};
