import type { MetaFunction } from "@remix-run/node";
import data from "../data/dataLogos.json"

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Sliger | Logos" },
    { name: "description", content: "a showcase of logos" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
        <div className="text-center p-4 mx-auto my-5 w-full md:max-w-prose">
            <h1 className="text-3xl font-bold mb-4">Logos</h1>
            <p className="font-light"><span className="font-semibold">Deliverables:</span> Create custom logos that reflect the identity of the brand.
            Provide multiple styles for light and dark surfaces, digital and print.</p>
            <p className="font-light"><span className="font-semibold">Tools:</span> Adobe Illustrator</p>
        </div>
        <ul className="w-full mx-auto md:w-4/5">
			{
				data.Logos.map((logo, i) => {
					return (
						<li key={i} className="flex flex-col justify-center min-h-screen border-b-2">
							{logo.images.map(function (img, i) {
								return (	
								
									<img
										key={i}
										className="mx-auto w-full my-11 md:w-3/4" 
										src={img.src}
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