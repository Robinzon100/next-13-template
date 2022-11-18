import Step from "./step";



const LandingSteps = () => {
    return (
        <div className='cardcontainer'>
            <Step
                header='Discover & Apply'
                description='Browse through several high growth opportunities with top of the class startups'
                image={"/images/jpg/1.jpg"}
                icon='/webp/discover2.webp' />
        </div>
    );
};

export default LandingSteps;