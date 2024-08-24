import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Matt Sliger | Portfolio" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-8 flex flex-col items-center justify-center min-h-screen">
      <div className="aboutMe max-w-prose">
					<p>I am an experienced graphic designer with a passion for helping others express their visual identity and ideas.
            I love to learn. 
          </p>
			</div>
    </div>
  );
}
