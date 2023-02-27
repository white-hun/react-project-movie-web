import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <div>{loading ? <h1>loading...</h1> : <h1>Detail</h1>}</div>;
}
