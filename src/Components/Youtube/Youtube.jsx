import styles from "./Youtube.module.css";
import { getLatestVideos } from "../../Services/youtube";
import { useState, useEffect } from "react";

const Multimedia = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const latestVideos = await getLatestVideos();
        setVideos(latestVideos);
      } catch (error) {
        console.error("Error al obtener los videos de YouTube:", error);
      }
    };

    fetchYouTubeVideos();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.multimediaTitle}>Ultimos videos de Youtube</h1>
      <section className={styles.videoSection}>
        <article className={styles.videoContainer}>
          {videos.map((video) => (
            <div key={video.id.videoId} className={styles.videoItem}>
              <iframe
                width="280"
                height="157"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className={styles.videoBottom}>
                <h2 className={styles.videoTitle}>{video.snippet.title}</h2>
                <p className={styles.videoDescription}>
                  {video.snippet.description}
                </p>
              </div>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
};

export default Multimedia;
