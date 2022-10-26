import React from 'react';

const Faq = () => {
    return (
        <div className='p-2 lg:p-5'>
            <p className='text-4xl py-4 font-bold'> Frequently Asked Question </p>
            <div className="flex flex-col w-full py-4 lg:flex-row">
                <div className="grid flex-grow  card bg-base-300 rounded-box place-items-center p-2 lg:w-14">
                    <h1 className='font-bold'>Who should take an Online Course?</h1>
                    <p>Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can
                        Advance your skill-set or begin a career change.
                        Take the next step in your formal education.
                        Ease the transition before entering a full-time academic program.
                        Enjoy learning a new topic.
                        Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.</p>
                </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow p-2 lg:w-14 card bg-base-300 rounded-box place-items-center">
                    <h1 className='font-bold'>I am a high school student, can I join?</h1>
                    <p>Courses are open to all students 18 years or older. If you are under 18 years old, please contact us (learnPrograming@gmail.com) to discuss further.</p>
                </div>
            </div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow p-2 lg:w-14 card bg-base-300 rounded-box place-items-center">
                    <h1 className='font-bold'>Can I take more than one course at a time?</h1>
                    <p>If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.</p>
                    </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow p-2 lg:w-14 card bg-base-300 rounded-box place-items-center">
                    <h1 className='font-bold'>What should I do if I need to start the course late?</h1>
                    <p>It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.</p>
                </div>
            </div>
            <div className="flex flex-col py-4 w-full lg:flex-row">
                <div className="grid flex-grow p-2 lg:w-14 card bg-base-300 rounded-box place-items-center">
                    <h1 className='font-bold'>How long is my course?</h1>
                    <p>We currently offer 4-week, 6-week, and 8-week courses. Check the course dates listed online prior to registration.
                        For a 4-week or 6-week course, you can expect to spend 5-7 hours a week reviewing and completing the course material.
                        For an 8-week course, you can expect to spend 8-10 hours a week reviewing and completing the course material.
                        You will also have read-only access to your course in Canvas for 90 days after its conclusion to review the course materials at your leisure.</p>
                    </div> 
                <div className="divider lg:divider-horizontal"></div> 
                <div className="grid flex-grow p-2 lg:w-14 card bg-base-300 rounded-box place-items-center">
                    <h1 className='font-bold'>Is there an orientation for online students?</h1>
                    <p>Two weeks before your course starts you will be invited to join the SIA Online Community where our guides will introduce you to the technology and dynamics of online teaching and learning. It also gives you a chance to introduce yourself and network with fellow students.
Should you have any questions or need help troubleshooting a piece of technology, our Online Team is only an email away and is ready to assist.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;