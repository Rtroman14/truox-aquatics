import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
    {
        question: "I have UV/Ozone, how is this different, how would I benefit?",
        answer: (
            <div>
                Treating water being returned to a contaminated pool re-contaminates the water just
                treated. So multiple turnovers (3-4) are required to potentially achieve a 2-log
                reduction.
                <br />
                <br />
                In essence “dilution is the solution to pollution”
                <br />
                <br />
                Cryptolyte® treats the ENTIRE system (pool water, circulating system, filter etc.)
                so we can achieve Remediation, a 3-log reduction of Cryptosporidium in less than 30
                minutes.
                <br />
                <br />
                Furthermore, implementing Cryptolyte® can be done with little to no capital expense,
                and typically pays for itself by reducing the use of other chemicals and their
                associated cost.
            </div>
        ),
    },
    {
        question: "Can I continue to use UV?",
        answer: "Yes, you can continue to use UV if you like, but you will likely find your results using Cryptolyte® warrant eliminating the UV to save on bulb replacement and energy.",
    },
    {
        question: "Can I use my existing chlorine?",
        answer: "Yes. You still need to use chlorine, so you can use the chlorine of your choice.",
    },
    {
        question: "Does Cyanuric acid affect Cryptolyte®?",
        answer: "No. Testing performed for EPA registration used over 200ppm of CYA to demonstrate that CYA does not affect the efficacy of Cryptolyte®.",
    },
    {
        question: "How much does Cryptolyte® cost to use?",
        answer: (
            <div>
                The chemical pricing can be obtained by your local distributor, however the Use-Cost
                of using Cryptolyte® is typically offset by:
                <ul className="list-disc list-inside">
                    <li>Eliminating shock treatments</li>
                    <li>
                        Operating with lower free chlorine (typically 1-1.5ppm) Department of Health
                        may require more but we can help you by talking with them.
                    </li>
                    <li>
                        Eliminating other supplemental treatments like coagulants, enzymes,
                        non-chlorine shocks etc.
                    </li>
                </ul>
            </div>
        ),
    },
    {
        question: "How does Cryptolyte® affect ORP?",
        answer: "Cryptolyte® is activated by chlorine so it appears as a source of demand by the ORP sensor. However, because oxidant demand is dramatically reduced in the pool water (and system), you typically see an increased ORP while using lower free chlorine to sustain it.",
    },
    {
        question: "How do we apply Cryptolyte®?",
        answer: "Cryptolyte® is fed using a chemical metering pump. In large applications, venturi systems can be installed.",
    },
    {
        question: "How does Cryptolyte® reduce DBPs?",
        answer: "Referring to an Indoor Study conducted by Dr. Blatchley from Purdue University showed dramatic reductions in precursors (i.e., Urea) that lead to the formation of DBPs as well as dramatic reductions in DBPs themselves. See graphs on the website and download the paper.",
    },
    {
        question: "What concentration of chlorine do you keep in the pool water?",
        answer: "That can depend on your local Department of Health guidelines. However, we recommend about 1.0 to 1.5ppm as Free Chlorine. Cryptolyte® will allow you to sustain high ORP (i.e., ≥800mV) with these low levels of chlorine due to the reduction in oxidant demand (e.g., DBP precursors and DBPs).",
    },
    {
        question: "How do you control Cryptolyte®?",
        answer: "Cryptolyte® is controlled by an upgraded Cryptolyte® Control System. A sensor is used to monitor the chlorine dioxide concentration in the water. The controller feeds Cryptolyte® as needed just like the controller controls chlorine and pH in the water.",
    },
    {
        question: "Are you measuring the level of bacteria or Cryptosporidium in the water?",
        answer: "No.",
    },
    {
        question: "Then how do you know the treated water was Remediated?",
        answer: (
            <div>
                The Cryptolyte® EPA label requires the use of the Cryptolyte® controller to Control,
                Confirm, and Document Remediation. This is done by tracking the chlorine dioxide
                concentration and calculating the CT Value. CT Value is the Concentration in PPM x
                Time in Minutes. When the targeted CT value is achieved, Remediation has been
                successfully completed. Both Laboratory and Field studies were conducted to meet the
                EPA registration requirements demonstrating the reproducible results and efficacy of
                Cryptolyte® using this method. In fact, this method and the systems used to control
                it are some of the PATENTED technologies developed by Truox.
            </div>
        ),
    },
    {
        question: "How expensive is it to install and implement Cryptolyte®?",
        answer: "You will need to talk to your local distributor for pricing. However, distributors have at their disposal various programs to implement Cryptolyte® without any Capital Investment. What best suits your needs will need to be discussed with your local rep.",
    },
    {
        question: "I have an old controller, can I use Cryptolyte®?",
        answer: "You will need to upgrade to a Cryptolyte® controller that is modeled off the BECsys 5 and 7 controllers. However, our Distributors have programs available to implement Cryptolyte® controllers without the need for Capital Investment.",
    },
];

export default function FAQs() {
    return (
        <div className="py-20 sm:py-28 container">
            <Accordion type="single" collapsible>
                {questions.map((question) => (
                    <AccordionItem key={question.question} value={question.question}>
                        <AccordionTrigger>{question.question}</AccordionTrigger>
                        <AccordionContent>{question.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
