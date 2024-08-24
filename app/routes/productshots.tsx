import type { MetaFunction } from "@remix-run/node";
import data from '../data/dataProducts.json';
import listings from '../data/dataListings.json'

export const meta: MetaFunction = () => {
  return [
    { title: "Matt Sliger | Product Images" },
    { name: "description", content: "a showcase of product photos" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans my-8">
        <div className="
            flex justify-center flex-col 
            h-screen
            bg-[url('/public/img/mhc/product-images-bg.png')] bg-center bg-cover bg-no-repeat
        ">
            <h1 className="text-center font-bold text-8xl text-white drop-shadow-md">Product Images</h1>
        </div>

        <div className="container mx-auto">
            <div className="text-center p-4 mx-auto my-5 w-full md:max-w-prose">
                <h1 className="text-3xl font-bold mb-4">Listing Images</h1>
                <p className="font-light"><span className="font-semibold">Deliverables:</span> Create product photos for e-commerce. 
                The main images must have a white background for Amazon. All other images need a color background to keep Amazon from cropping them to different sizes. 
                Highlight key features and instructions about the product.
                </p>
                <p className="font-light"><span className="font-semibold">Tools:</span> Canon EOS 50mm. Adobe Lightroom / Photoshop / Illustrator</p>
            </div>
            <div className="mb-6">
                <h2 className="text-center font-bold">EasyTouch Luer Lock Syringe Barrels</h2>

                <ul className="grid grid-flow-row-dense grid-cols-1 gap-2 p-4 md:grid-cols-3">
                    {
                        listings.Luerlock.map((product, i) => {
                            return (
                                <li className="flex" key={i}>
                                    {product.images.map(function (img, i) {
                                        return (
                                            <img
                                            key={i}
                                            className="max-w-full"
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
            <div className="mb-6">
                <h2 className="text-center font-bold">EasyTouch Blulink Glucose Monitoring System</h2>
                <ul className="grid grid-flow-row-dense grid-cols-1 gap-2 p-4 md:grid-cols-3">
                    {
                        listings.Blulink.map((product, i) => {
                            return (
                                <li className="flex" key={i}>
                                    {product.images.map(function (img, i) {
                                        return (
                                            <img
                                            key={i}
                                            className="max-w-full"
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
            <div className="mb-6">
                <h2 className="text-center font-bold">EasyTouch Alcohol Prep Pads</h2>
                <ul className="grid grid-flow-row-dense grid-cols-1 gap-2 p-4 md:grid-cols-3">
                    {
                        listings.Preppads.map((product, i) => {
                            return (
                                <li className="flex" key={i}>
                                    {product.images.map(function (img, i) {
                                        return (
                                            <img
                                            key={i}
                                            className="max-w-full"
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
            <div>
                <h2 className="text-center font-bold">EasyTouch Twist Lancets</h2>
                <ul className="grid grid-flow-row-dense grid-cols-1 gap-2 p-4 md:grid-cols-3">
                    {
                        listings.Lancets.map((product, i) => {
                            return (
                                <li className="flex" key={i}>
                                    {product.images.map(function (img, i) {
                                        return (
                                            <img
                                            key={i}
                                            className="max-w-full"
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

            <div className="text-center p-4 mx-auto my-5 w-full md:max-w-prose">
                <h1 className="text-3xl font-bold mb-4">Marketing Images</h1>
                <p className="font-light"><span className="font-semibold">Deliverables:</span> Create product photos for marketing and social media posts.
                    Remove original background from photos and place the product into a home scene.</p>
                <p className="font-light"><span className="font-semibold">Tools:</span> Canon EOS 50mm. Adobe Lightroom / Photoshop / Illustrator, Blender</p>
            </div>

            <ul className="grid grid-flow-row-dense grid-cols-1 gap-2 p-4 md:grid-cols-3">
                {
                    data.Products.map((poster, i) => {
                        return (
                            <li className="flex" key={i}>
                                {poster.images.map(function (img, i) {
                                    return (
                                        <img
                                            key={i}
                                            className="max-w-full"
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
    </div>
  );
}