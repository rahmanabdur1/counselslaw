import React from 'react';
import './About.css'
import about from '../../assets/about.jpg'
const philosophyData = {
    values: [
        {
            principle: "THE LAW COMES FIRST",
            description: "Our first and foremost focus is to ensure that all our advice is in compliance with the law and our clients do not fail to comply with any legal requirement while we are providing legal services."
        },
        {
            principle: "HONEST COMMUNICATION",
            description: "We prioritize maintaining transparency with the client regarding all affairs so that clients are never distressed due to our lack of communication."
        },
        {
            principle: "COMMITTED TO EXCELLENCE",
            description: "In CLP, we commit ourselves fully to our clients. We are totally client-focused, and clients matter the most to us. We give major importance to how we deal with our clients."
        },
        {
            principle: "CLIENT FOCUSED APPROACH",
            description: "Regardless of the client’s background, we take a non-judgmental approach to help the client because it is the rights of the clients that matter the most when they walk through our door."
        },
        {
            principle: "BOUND BY OUR CODES",
            description: "We have taken an oath to protect the interests of those who are the most vulnerable and to ensure justice for those who are deprived of it."
        },
        {
            principle: "TIME IS EVERYTHING",
            description: "We do not take delays favorably. Our aim is to deliver results in the shortest possible time, which has earned us respect from our esteemed clientele."
        }
    ]
};
const About = () => {
    return (
        <div>
            <div className='aboutBg'>
                <img src={about} alt='about img' />
            </div>
            <div className='ourAbout'>
                <div className='aboutLwPrt'>
                    <h1>About Counsels Law Partners</h1>
                    <p>Counsels Law Partners (CLP) is a full service international law firm with its head office in Dhaka, Bangladesh. Further, it also has branches in Chittagong and Sylhet. It is one of the best reviewed law chambers in Bangladesh. The CLP team is a blend of UK trained Barristers, Advocates & Legal Consultants who has attained decade worth of experience and knowledge in several matters including (but not limited to) corporate matters, litigation, arbitration, land law matters, real estate matters, family law issues, labour law, writ, banking matters, business setup, admiralty, shipping, any kind of legal services as may be required. The CLP team provides all kinds legal assistance to serve the needs of its diverse client base. The firm is strategically located at Gulshan-1 Circle which is considered to be a diplomatic area as well as the new commercial hub of Dhaka, Bangladesh hosting major Banks,  Corporate Headquarters, Securities Companies, Insurance Companies, Airliners, Hotels etc. and is only 15 minutes away from the Hazrat Shahjalal International Airport and also close to the Banani Railway Station.</p>
                </div>
                <div className='ourStory'>
                    <h1>Our Story</h1>
                    <p>Barrister Md. Hafizur Rahaman Khan, the founder of CLP, has formed CLP with an elite group of highly qualified Barristers, Advocates, and Legal Consultants. Since its inception, CLP got recognition for its high quality and standard of legal services. Satisfying the needs of clients and maintaining confidentiality regarding all affairs of its clients has been the top most priority for CLP since its formative days.</p>
                    <p>CLP has been serving its clients on various areas of law including Company law, Corporate and Commercial, Admiralty, Taxation, Property, Family, Employment, Immigration, Arbitration, Litigation in both Judge Court and the Supreme Court of Bangladesh etc. Through perseverance and determination, CLP has reached its pinnacle of success, as it now serves many of its multinational and High Profile Clients. In addition, Based on its client review, CLP got recognition as one of the best full service Law Firm in Bangladesh.</p>
                </div>
                <div className='ourAchievement'></div>
                <div className='ourPhilosophy'>
                    <h1>Our Philosophy</h1>
                    <div className='ourPhilosophyCard'>
                        {philosophyData.values.map((item, index) => (
                            <div key={index}>
                                <h2>{item.principle}</h2>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;