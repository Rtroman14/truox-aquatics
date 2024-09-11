import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: "CryptoLyte | Dashboard",
    description: "Kill 99.9% of Cryptosporidium under 30 minutes with CryptoLyte",
};

const TestingMethodsPage = () => {
    return (
        <div className="grid min-h-screen grid-cols-1">
            <div className="flex flex-col items-center p-8">
                <Card className="min-w-[500px]">
                    <CardHeader>
                        <CardTitle>Testing for Breathe EZ Activator - Indoor Pool</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4 space-y-8">
                        <div className="space-y-6">
                            <h3 className="font-bold">What you will need:</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>
                                    <span className="bg-yellow-200">Taylor Test Kit K-1518</span>{" "}
                                    (FAC/CAC/Monopersulfate)
                                </li>
                                <li>
                                    <span className="bg-yellow-200">Taylor R-0813</span> (Glycine
                                    Reagent)
                                </li>
                                <li>Bleach (fresh Clorox will work or pool bleach)</li>
                                <li>
                                    Measuring cup or similar container (~250ml or 1-cup) Doesn't
                                    need to be exact.
                                </li>
                                <li>Eye dropper or syringe (1ml)</li>
                            </ul>

                            <br />

                            <ol className="list-disc ml-6 space-y-2">
                                <li>Collect a sample of pool water approx. 250 ml or 1-cup.</li>
                                <li>
                                    Add 0.1ml of Bleach (6.5-10% Active NaOCl) Approximately
                                    50-60ppm as Cl₂.
                                </li>
                                <li>Mix for 30 seconds.</li>
                                <li>
                                    Allow the sample to react for 3 minutes to oxidize all the
                                    residual Activator.
                                </li>
                                <li>
                                    Fill the Taylor DPD Test Kit Vial with sample to the 25ml mark.
                                </li>
                                <li>
                                    Add 1ml Glycine (Taylor R-0813) to the sample and swirl for 30
                                    seconds
                                </li>
                                <li>Test for FREE CHLORINE with the DPD test.</li>
                            </ol>

                            <h3 className="font-bold">Test Method & Results Explained</h3>
                            <p>
                                The Breathe EZ Activator is oxidized by the bleach. Glycine (Taylor
                                R-0813) removes residual Free Chlorine. Remaining oxidant is the
                                activated Breathe EZ Activator which will react with DPD. Results
                                are Breathe EZ Activator reported as Cl<sub>2</sub>. Maintain 5 –
                                20ppm Activator as Cl<sub>2</sub>.
                            </p>

                            <h3 className="font-bold">Dosing the Pool with Breathe EZ Activator</h3>
                            <p>
                                1 gallon of Breathe EZ Activator to 100,000 gallon of pool water
                                provides approximately 1.4ppm as Activator measured as Cl
                                <sub>2</sub>.
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <Card className="min-w-[500px]  mt-8">
                    <CardHeader>
                        <CardTitle>Testing for Residual CryptoLyte</CardTitle>
                    </CardHeader>
                    <CardContent className="ml-4 space-y-8">
                        <div className="space-y-6">
                            <h3 className="font-bold">What you will need:</h3>
                            <p>Taylor Test Kit K-1518</p>

                            <h3 className="font-bold">Test Procedure:</h3>
                            <ul className="list-disc ml-6 space-y-2">
                                <li>Collect 10ml of pool water in Test Kit vial.</li>
                                <li>Add 1ml Deox Reagent (Taylor R-0867) and swirl to mix.</li>
                                <li>Allow 3+ minutes to react.</li>
                                <li>
                                    Add a heaping scoop of DPD powder (R-0870) and swirl to mix.
                                </li>
                                <li>
                                    Add 5 drops of KI solution (Taylor R-0003) and swirl to mix.
                                </li>
                                <li>Sample will turn red.</li>
                                <li className="bg-yellow-200">
                                    <strong>NOTE</strong> – when adding titrating solution, the
                                    sample will quickly become faded-pink but will retain color.
                                    Continue adding titrant quickly while counting drops until the
                                    sample is completely clear, then add 2-3 additional drops. The
                                    sample should remain clear for at least 2-3 seconds – then note
                                    the drop count.
                                </li>
                                <li className="bg-yellow-200">
                                    It may take a few practice runs to feel comfortable, and don't
                                    worry if your drop count varies by a few drops, just get close.
                                </li>
                                <li>
                                    Add Titrating Reagent (R-0871) at ~2 drops per second while
                                    swirling counting the drops until the sample is{" "}
                                    <span className="underline">
                                        completely clear then add 2-3 additional drops
                                    </span>
                                    . The sample should remain clear for several seconds. Record the
                                    drops.
                                </li>
                            </ul>

                            <p className="font-bold text-center">
                                Cryptolyte (ppm as Active ClO<sub>2</sub>) = (Drops x 0.5) + 2.6
                            </p>

                            <h3 className="font-bold">Test Method & Results Explained</h3>
                            <p>
                                Deox reagent will remove the majority of interference associated
                                with Free Residuals leaving only the weaker/slower reacting
                                Crypolyte residual. The DPD and KI reagents will produce a red color
                                if Cryptolyte is present. When you begin titrating the sample will
                                quickly fade to lite-pink and remain lite/faded pink as you add
                                titrant. Continue adding titrant until the sample appears clear then
                                add 2-3 additional drops so it remains clear for several seconds at
                                which point you have exhausted the majority of Cryptolyte. The
                                lite-pink may reappear but you do not need to remove every last
                                molecule.
                            </p>

                            <p className="bg-blue-100 font-bold">
                                NSF 60 Drinking Water listing allows 4ppm as Active (22ppm as
                                Cryptolyte)
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default TestingMethodsPage;
