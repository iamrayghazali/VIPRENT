import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
    {
        id: "requirements",
        q: "What documentation do I need to pick up my rental?",
        a: "You’ll need a valid driver’s license, a credit card in the primary driver's name for the security deposit, and a form of ID (like a passport). International renters may need an International Driving Permit if their license isn't in English.",
    },
    {
        id: "deposit",
        q: "How does the security deposit work?",
        a: "A temporary hold is placed on your credit card at pick-up. This isn't a charge, but it ensures funds are available. We release the hold immediately upon the safe return of the vehicle, though your bank may take 3-5 business days to reflect the update.",
    },
    {
        id: "insurance",
        q: "Is insurance included in the daily rate?",
        a: "Our standard rates include basic third-party liability. However, we highly recommend our Premium Cover to reduce your excess to zero, giving you total peace of mind against accidental damage or theft.",
    },
    {
        id: "fuel",
        q: "What is your policy on fuel and mileage?",
        a: "We operate on a 'Full-to-Full' policy—you receive the car with a full tank and return it the same way to avoid refueling fees. All rentals include unlimited mileage so you can explore without counting the kilometers.",
    },
    {
        id: "late-return",
        q: "What happens if I'm late returning the car?",
        a: "We offer a 29-minute grace period. Beyond that, a partial or full day's charge may apply. If you know you're running late, just call us; we're usually flexible if the vehicle isn't booked immediately after you.",
    },
];

export default function FAQ() {
    return (
        <section className="w-full pt-50">
            <div className="max-w-2xl mx-auto px-4">
                <h2 className="text-2xl font-bold text-accent text-center mb-8">
                    Frequently Asked Questions
                </h2>

                <Accordion type="single" collapsible className="w-full space-y-2">
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b border-white/10"
                        >
                            <AccordionTrigger className="text-white hover:no-underline font-medium py-4 text-left hover:cursor-pointer">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-white/70 overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                                <div className="pb-4 pt-1">
                                    {item.a}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}