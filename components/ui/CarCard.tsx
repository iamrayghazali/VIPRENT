import {Card} from "@/components/ui/card";
import Image from "next/image";
import { FaGear } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import CustomButton from "@/components/ui/CustomButton";
import CarTag from "@/components/ui/CarTag";
import { StaticImageData } from "next/image";

type Features = {
    transmission: string;
    releaseDate: string;
    horsepower: number;
};

type CarCardProps = {
    carName: string;
    imagePath: StaticImageData;
    comment: string;
    price30days: number;
    features: Features;
    tags: string[];
    slug: string;
    isDiscounted: boolean;
    discountedPrice30days: number;
};

export default function CarCard({ carName, imagePath, comment, price30days, features, tags, slug, isDiscounted, discountedPrice30days}: CarCardProps) {

    function formatPrice(value:  number | bigint) {
        return new Intl.NumberFormat("hu-HU").format(value);
    }

    return (
        <>
            <Card className="relative w-full max-w-sm min-w-xs bg-tertiary border-1 border-accent-dark flex flex-col hover:border-white">
                {isDiscounted && (
                    <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-md shadow">
                        DISCOUNT
                    </div>
                )}
                <Image src={imagePath} className="rounded-t-xl object-fill" alt="Car Image" />
                <div className="flex flex-col p-2 flex-1">
                    {/* Content */}
                    <div className="mt-2 flex flex-col flex-1">
                        <span className="ml-3 text-accent text-sm font-extrabold">
                          {comment}
                        </span>
                        <h2 className="ml-3 text-xl lg:text-2xl font-lato font-extrabold text-white text-nowrap">
                            {carName}
                        </h2>


                                <ul className="flex flex-row flex-wrap text-neutral-400 gap-x-3 gap-y-2 px-2 mt-2">
                                    {tags.map((tag, index) => (
                                        <CarTag key={index} text={tag} />
                                    ))}
                                </ul>

                                <div className="border-t border-neutral-800 mb-4 mt-4"/>


                        <div className="grid grid-cols-3 justify-normal">
                            <div className="flex flex-col items-center justify-center">
                                <FaGear className="text-xl text-neutral-400 mb-2"/>
                                <p className="text-neutral-400 text-sm">
                                    {features.transmission}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <FaRegClock className="text-xl text-neutral-400 mb-2"/>
                                <p className="text-neutral-400  text-sm">
                                    {features.releaseDate}
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <BsFillLightningChargeFill className="text-xl text-neutral-400 mb-2"/>
                                <p className="text-neutral-400 text-sm">
                                    {features.horsepower}
                                </p>
                            </div>
                        </div>

                        <div className="border-t border-neutral-800 mt-4"/>

                        <div className="flex flex-col justify-center p-3 mt-auto">
                            <span className="text-white text-sm font-extrabold">
                                30 days
                            </span>
                            {isDiscounted && discountedPrice30days ? (
                                <>
                                    <h2 className="text-lg font-lato text-neutral-200 text-nowrap line-through italic decoration-1">
                                        {formatPrice(price30days)} Ft
                                    </h2>
                                    <div className="flex flex-row items-center ">
                                                <h2 className="text-2xl font-lato text-accent text-nowrap">
                                            {formatPrice(discountedPrice30days)} Ft
                                        </h2>
                                        <p className="text-neutral-400 text-thin text-lg ml-2">
                                            + VAT
                                        </p>
                                    </div>
                                </>
                            ) : (
                                <div className="flex flex-row items-center ">
                                    <h2 className="text-2xl font-lato text-accent text-nowrap">
                                        {formatPrice(price30days)} Ft
                                    </h2>
                                    <p className="text-neutral-400 text-thin text-lg ml-2">
                                        + VAT
                                    </p>
                                </div>
                                )}
                        </div>

                        <div className="flex items-center justify-center mt-auto gap-5">
                            <CustomButton type="primary" path="/reserve" children="Reserve" />
                            <CustomButton type="secondary" path={`/cars/${slug}`} children="Car details" />
                        </div>

                    </div>
                </div>
            </Card>
        </>
    )
}