import CarCard from "@/components/ui/CarCard";
import CARS from "@/lib/cars";

export default function Fleet({activeFilters}) {
    /*  TODO: implement car selection based on active filters */

    return (
        <div className="w-fit grid grid-cols-1 lg:grid-cols-2 gap-5 justify-self-center">
            {CARS.map((item, index) => (
                <CarCard key={index} carName={item.carName} imagePath={item.imagePath} comment={item.comment}
                         price30days={item.price30days} features={item.features} tags={item.tags}
                         slug={item.slug}/>
            ))}
        </div>
    )
}