import type { MetaFunction } from "@remix-run/node";
import data from "../data/dataPosters.json"

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Sliger | Posters" },
    { name: "description", content: "a showcase of posters" },
  ];
};


export default function Index() {
  return (
    <div>
        <div className="
            flex justify-center flex-col 
            h-screen
            bg-[url('/public/img/posters/posters-scene1.jpg')] bg-center bg-cover bg-no-repeat
        ">
            <h1 className="text-center font-bold text-8xl text-white drop-shadow-md">Posters</h1>
        </div>
        <div className="text-center p-4 mx-auto my-5 w-full md:max-w-prose">
            <h1 className="text-3xl font-bold mb-4">Posters</h1>
            <p className="font-light"><span className="font-semibold">Deliverables:</span> Colaborate with lead pastor to create works of art that represent the theme of each sermon series or event.</p>
            <p className="font-light"><span className="font-semibold">Tools:</span> Adobe Illustrator, Photoshop</p>
        </div>
      <ul className="container mx-auto p-4">
			{
				data.Posters.map((poster, i) => {
					return (
						<li key={i} className=" h-dvh flex flex-col justify-center items-center p-2">
							{poster.images.map(function (img, i) {
								return (	
									<img
										key={i}
										className="max-h-full shadow"
										src={img.large}
										alt={img.alt}
									/>
								)
							})}
						</li>
					)
				})
			}
		</ul>
    </div>
  );
}