import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to first blog post on load
    router.push("/blog/full-body-workout");
  }, [router]);

  return (
    <div style={{ textAlign: "center", padding: "100px 20px" }}>
      <p>Loading...</p>
    </div>
  );
}
