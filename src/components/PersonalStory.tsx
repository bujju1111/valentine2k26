
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalStory = () => {
    return (
        <div className="min-h-screen bg-rose-950 text-gold-100 p-8 font-inter overflow-x-hidden">
            <Link to="/" className="inline-flex items-center text-rose-300 hover:text-gold-300 mb-8 transition-colors">
                <ArrowLeft className="mr-2" /> Back
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto space-y-12"
            >
                <header className="text-center mb-16">
                    <h1 className="font-playfair text-5xl md:text-7xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-gold-300 via-rose-300 to-gold-300 mb-4 drop-shadow-sm">
                        A Love Story
                    </h1>
                    <div className="h-1 w-32 bg-gold-600 mx-auto rounded-full"></div>
                </header>

                {/* Timeline Item 1 */}
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 items-center bg-rose-900/30 p-8 rounded-3xl border border-rose-800/50 backdrop-blur-sm"
                >
                    <div className="w-full space-y-4 text-center">
                        <div className="flex items-center justify-center text-gold-400 font-playfair text-xl">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>School Time</span>
                        </div>
                        <h3 className="text-3xl font-playfair text-white">First seen</h3>
                        <p className="text-rose-200 leading-relaxed">
                            {/* WRITE YOUR FIRST STORY PARAGRAPH HERE */}
                            anniki oru lusu final exam ku ukanthu padichutu iruchu, apo oru pannikutty yum padika vanthu ukanthuruchu, atha intha lusu thoorathula irunthu sight adichuthu apo the antha aththa ponnu crush aachu
                        </p>
                    </div>
                </motion.section>

                {/* Timeline Item 2 */}
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 items-center bg-rose-900/30 p-8 rounded-3xl border border-rose-800/50 backdrop-blur-sm"
                >
                    <div className="w-full space-y-4 text-center">
                        <div className="flex items-center justify-center text-gold-400 font-playfair text-xl">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Evening Time</span>
                        </div>
                        <h3 className="text-3xl font-playfair text-white">Sighting</h3>
                        <p className="text-rose-200 leading-relaxed">
                            {/* WRITE YOUR FIRST STORY PARAGRAPH HERE */}
                            every evening lusu and pannikutty gang oda tha irukum bus kaaga wait panitu apo antha pannikutty 10th padikuthu and lusu 12th padikuthu apo special class ilaatha apo laam lusu bus la sight adichutea pogum.
                        </p>
                    </div>
                </motion.section>

                {/* Timeline Item 3 */}
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 items-center bg-rose-900/30 p-8 rounded-3xl border border-rose-800/50 backdrop-blur-sm"
                >
                    <div className="w-full space-y-4 text-center">
                        <div className="flex items-center justify-center text-gold-400 font-playfair text-xl">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Lock-Down Time</span>
                        </div>
                        <h3 className="text-3xl font-playfair text-white">Connection started</h3>
                        <p className="text-rose-200 leading-relaxed">
                            {/* WRITE YOUR FIRST STORY PARAGRAPH HERE */}
                            lock down la thaa first time lusu pannikutty ku msg pana aaramchuthu apro epdiyo konjam nala pesa aaramchuthu, konja naal online class nu kadala potutu iruchu
                        </p>
                    </div>
                </motion.section>

                {/* Timeline Item 4 */}
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 items-center bg-rose-900/30 p-8 rounded-3xl border border-rose-800/50 backdrop-blur-sm"
                >
                    <div className="w-full space-y-4 text-center">
                        <div className="flex items-center justify-center text-gold-400 font-playfair text-xl">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Music Class</span>
                        </div>
                        <h3 className="text-3xl font-playfair text-white">Sighting 2.0</h3>
                        <p className="text-rose-200 leading-relaxed">
                            {/* WRITE YOUR FIRST STORY PARAGRAPH HERE */}
                            antha lusu pannikutty yah paaka music class searnthuchu but bad luck girls and boys thani thaniyaa potutaanga🤦‍♂️.
                        </p>
                    </div>
                </motion.section>

                {/* Timeline Item 5 */}
                <motion.section
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-8 items-center bg-rose-900/30 p-8 rounded-3xl border border-rose-800/50 backdrop-blur-sm"
                >
                    <div className="w-full space-y-4 text-center">
                        <div className="flex items-center justify-center text-gold-400 font-playfair text-xl">
                            <Calendar className="w-5 h-5 mr-2" />
                            <span>Finally Proposed</span>
                        </div>
                        <h3 className="text-3xl font-playfair text-white">Kurukka vantha kaaka</h3>
                        <p className="text-rose-200 leading-relaxed">
                            {/* WRITE YOUR FIRST STORY PARAGRAPH HERE */}
                            antha lusu ku thairiyam ila but oru naal oru kaaka ta solla antha kaaka potu vitruchu. kaaka potu vittatha pannikutty nambala ana lusu night thoongavea illa apro kaalila oru valiya propose panitaa...
                        </p>
                        <p className="text-rose-200 leading-relaxed">antha pannikutty yum ok soliruchu. apo irunthu ipa varikum...</p>
                    </div>
                </motion.section>
                <p className="text-rose-200 leading-relaxed text-center">I Love You Papayee</p>
                <p className="text-rose-200 leading-relaxed text-center">I Love You Bujji</p>
                <p className="text-rose-200 leading-relaxed text-center">I Love You Mylu</p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center py-12"
                >
                    <p className="font-playfair text-2xl text-gold-200 italic">
                        365 Times...
                    </p>
                </motion.div>

            </motion.div>
        </div>
    );
};

export default PersonalStory;
