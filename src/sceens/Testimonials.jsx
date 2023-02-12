import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Tesimonials = () => {
    const testimonialsStyles = `mx-auto mr-10 relative max-w-[400px] h-[350px] justify-end p-16 mt-50
                                before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2`;

    return (
        <section id="testimonials" className="pt-32 pb-16">
            {/* HEADINGS */}
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    TESTIMONIALS
                </p>
                <LineGradient />
                <p className="mt-10">
                    Here's What People are Saying About My Work.
                </p>
            </motion.div>

            {/* TESIMONIALS */}
            <div className="md:flex md:justify-between gap-8">
                <motion.div
                    className={`bg-blue ${testimonialsStyles} before:content-person1`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">"</p>
                    <p className="text-center text-0.5xl mt-5">
                        Thank you Qinming, I was delighted to work with you for a year. You have successfully shown your seriousness, 
                        motivation and ability to learn new skills. We will miss your good mood and positive spirit, 
                        I wish you a good continuation!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Tesimonials;