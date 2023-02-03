import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/dPost.module.scss";
import Link from "next/link";

export default function () {
  const router = useRouter();
  let { id } = router.query;
  console.log(router)

  const [postData, setPostData] = useState({});

  useEffect(() => {
    if(router.isReady === true)
    GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router.isReady]);

  return (
    <div className={styles.dPost}>
      <img src={postData.image} alt={postData.title} />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
      <Link style={{textDecoration: "underline"}} href={"/post"}> Go back!</Link>
    </div>
  );
}

