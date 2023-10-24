
const FAQ = () => {

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-3 lg:px-2">
            <div className="text-center">
                <h2 className="text-4xl py-5 mt-16 font-bold">Frequently Asked <span className="text-[#d926a9]">Question</span></h2>
                <p>Streaming services often address questions regarding subscription plans, <br /> content availability, device compatibility, and account management.</p>
            </div>
            <div className="md:flex items-center gap-6">
                <div className="flex-1 space-y-1">
                    {/* collapse-1 */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between a TV series and a miniseries?
                        </div>
                        <div className="collapse-content">
                            <p>A TV series is an ongoing show with multiple seasons, episodes, and story arcs. It can continue for several years. In contrast, a miniseries is a limited-run series with a predetermined number of episodes, often telling a complete story within those episodes. Once the story is over, the miniseries typically does not continue.</p>
                        </div>
                    </div>
                    {/* collapse-2 */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How do streaming services impact the traditional film and TV industry?
                        </div>
                        <div className="collapse-content">
                            <p>Streaming services have disrupted the traditional entertainment industry by offering on-demand content, which has led to a decline in traditional cable and network TV viewership. Streaming platforms create their own original content, contributing to increased competition and innovation. This shift has also changed how consumers access and consume media.</p>
                        </div>
                    </div>
                    {/* collapse-3 */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What is the role of a film producer, and how does it differ from a director?
                        </div>
                        <div className="collapse-content">
                            <p>A film producer is responsible for the business and logistical aspects of making a film. This includes securing financing, hiring key personnel, overseeing the budget, and managing the overall production. In contrast, a director is primarily responsible for the creative aspects, such as guiding the actors, making artistic decisions, and ensuring the vision of the film is realized. While they collaborate closely, their roles differ in focus and responsibilities.</p>
                        </div>
                    </div>
                    {/* collapse-4 */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How does product placement work in movies and TV shows?
                        </div>
                        <div className="collapse-content">
                            <p>Product placement is a marketing technique where branded products or services are integrated into the storyline of a movie or TV show. This can include items like soft drinks, cars, or technology. Companies pay for their products to be prominently featured. It can be a subtle inclusion or a more overt part of the narrative, and it serves as a form of advertising that can be less intrusive than traditional commercials.</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full md:w-[550px] h-full md:h-[500px]  md:ml-auto" src="https://i.ibb.co/Hd5yJHj/faq.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default FAQ;