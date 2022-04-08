import Router from "next/router";

export default function before() {
  console.log("こんにちは！");
  return (
    <>
      <div>こんにちは！</div>
      <button
        onClick={() =>
          Router.push({ pathname: "/after", query: { name: "kana" } })
        }
      >
        次のページへ
      </button>
    </>
  );
}
