
const Newsletter = () => {
    return (
        <div id="join-section" className='-mt-32 relative z-10'>
            <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-orange rounded-lg bg-newsletter">
                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
                    <div>
                        <h3 className="text-5xl font-bold mb-3"> Your Idea</h3>
                        <h4 className="text-lg font-medium mb-7">Share Your Valuable Ideas With Us,</h4>
                        <div className="flex gap-2">
                            <input type="Email address" name="q" className="py-4 text-sm w-full text-black bg-white rounded-md pl-4" placeholder="Write here" autoComplete="off" />
                            <button className="bg-purple hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;