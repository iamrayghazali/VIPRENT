import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";
import CustomButton from "@/components/ui/CustomButton";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

export default function CarPrice({ car }: { car: any })  {
    function formatPrice(value:  number | bigint) {
        return new Intl.NumberFormat("hu-HU").format(value);
    }

    return (
        <section className="mt-10">
            <div className="m-4 md:m-20 ">
                <div className="flex flex-col text-white lg:ml-4 mb-2">
                    <h2 className=" text-3xl">Prices</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 p-5">

                    {/* Price 30 days */}
                    <div className="flex flex-col  p-3 mt-10">
                            <span className="text-white text-sm font-extrabold">
                                30 days
                            </span>
                        <div className="flex flex-row items-center ">
                            <h2 className="text-2xl font-lato text-accent text-nowrap">
                                {formatPrice(car.price30days)} Ft
                            </h2>
                            <p className="text-neutral-400 text-thin text-lg ml-2">
                                + VAT
                            </p>
                        </div>
                        <TableCaption className="text-left text-neutral-400">You can add a driver to your booking. Extra charges apply.</TableCaption>
                    </div>

                    <div className="max-w-sm mt-6">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Time</TableHead>
                                    <TableHead className="text-nowrap">Distance (km)</TableHead>
                                    <TableHead className="text-right">Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium text-nowrap">3 days</TableCell>
                                        <TableCell>Unlimited</TableCell>
                                        <TableCell className="text-right text-nowrap">{formatPrice(car.price3days)} Ft</TableCell>
                                    </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-nowrap">7 days</TableCell>
                                    <TableCell>Unlimited</TableCell>
                                    <TableCell className="text-right text-nowrap">{formatPrice(car.price7days)} Ft</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium text-nowrap">30 days</TableCell>
                                    <TableCell>Unlimited</TableCell>
                                    <TableCell className="text-right text-nowrap">{formatPrice(car.price30days)} Ft</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>
                </div>

                <div className="flex flex-col text-white mt-8 lg:ml-4 mb-2 md:mb-8">
                    <h2 className=" text-3xl">Requirements</h2>

                    <Accordion type="single" collapsible className=" space-y-2 grid grid-cols-1 md:grid-cols-2 md:gap-20 p-5">
                            <AccordionItem
                                value="1"

                                className="border-b border-white/10"
                            >
                                <AccordionTrigger className="text-white hover:no-underline font-medium py-4 text-left hover:cursor-pointer text-lg">
                                    1. Deposit
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-200 overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                    <h6 className=""></h6>
                                    <p className=" pt-1 text-neutral-400">
                                        {formatPrice(car.deposit)} Ft
                                    </p>
                                    <p className="pb-4 pt-1 text-neutral-400">
                                        Deposit will be returned upon inspection of the car.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        <AccordionItem
                            value={"2"}
                            className="border-b border-white/10"
                        >
                            <AccordionTrigger className="text-white hover:no-underline font-medium py-4 text-left hover:cursor-pointer text-lg">
                                2. Drivers Licence
                            </AccordionTrigger>
                            <AccordionContent className="text-neutral-200 overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                <h6 className=""></h6>
                                <p className=" pt-1 text-neutral-400">
                                    This car requires at least a(n) {car.validLicenceInYears} year old drivers licence
                                </p>
                                <p className="pb-4 pt-1 text-neutral-400  mb-2">
                                    Drivers licence must be a valid EU drivers licence.
                                </p>
                                <CustomButton path={"/about"} type="secondary" className="w-fit">
                                    Read more
                                </CustomButton>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="flex flex-col items-center">
                        <h3 className="text-center text-neutral-200 text-2xl mt-20 mb-15">Get a unique quote</h3>

                        <CustomButton path={"/reserve"} type="primary" className="w-fit">
                            Reserve
                        </CustomButton>
                    </div>

                </div>
            </div>
        </section>
    )
}

