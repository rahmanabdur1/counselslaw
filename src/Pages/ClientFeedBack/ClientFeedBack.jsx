import React from 'react';
import './ClientFeedBack.css'
const ClientFeedBack = () => {
    return (
        <div className='clientInfo'>
            <div className='clientInfoDetails'>
                <h1>Our Clients Feedback</h1>
                <p>The best law firm in Dhaka, Bangladesh CLP was formed by a group of committed and experienced British trained Barristers & Advocates with an aim to deliver affordable and effective legal services to the masses. The lawyers here have extensive experience in the legal arena and they have all been exposed to the elements of different practice areas which gave CLP the strength it needed in its early</p>

                <div className='clientFeedbackInfo'>
                    <p>days to grow and prosper. Here are some of our clients feedback about counsels law partners.</p>
                    <div className='clientInfoFateback'>
                        <div className='clientFeedback'>
                            <p>I went here to take advice for various issues. They advised me very well and show me clearly what I can do and what can they do for me to solve my issues. They charge very reasonable and I found them.</p>
                            <h4>Mir Shabab Ahmed Snny</h4>
                        </div>
                        <div className='clientFeedback'>
                            <p>Energetic and professional. They get works effectively done and pretty quickly too. What I Loved the most about them is that the first consultancy was for free though it took about 45 mines! I wish them all the best.</p>
                            <h4>Tania Afrin</h4>
                        </div>
                        <div className='clientFeedBack'>
                            <p>Very professional, efficient and reliable particularly in areas of corporate matters. Helped two of my acquaintances from China and Australia set up their businesses quickly in Dhaka. I recommended CLP as a best law firm in Dhaka Bangladesh.</p>
                            <h4>Avia Nahreen</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ClientFeedBack;