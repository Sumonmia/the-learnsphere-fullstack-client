

const Faq = () => {
    return (
        <div className="bg-gray-300  mt-20 p-5 rounded-md space-y-4">
            <h1 className="text-center text-2xl lg:text-4xl">FAQ</h1>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-medium">Do You Provide Hard Copies of the Courses?</div>
                <div className="collapse-content">
                    <p>No! We will give access to online copies</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Do You Sell Video Courses?</div>
                <div className="collapse-content">
                    <p>Yes! We offer video courses.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">Is there any Online Support Available?</div>
                <div className="collapse-content">
                    <p>Yes. We have lot of support mentors for online support from Saturday to Sunday.<br/> (From 10 AM to 11 PM)</p>
                </div>
            </div>
        </div>
    )
}

export default Faq
