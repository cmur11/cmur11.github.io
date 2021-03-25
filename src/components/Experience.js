import React from "react"
function Experience(){
    return(
        <div id = "experience" className = "experience">
            <div className = "d-flex justify-content-center my-5">
                <h1>Experience</h1>
            </div>
            <div className = "container experience-wrapper">
                <div className = "timeline-block timeline-block-right">
                    <div className= "marker"></div>
                        <div className= "timeline-content">
                            <h3> Junior Overlay Portfolio Manager(Spring 2016– Spring 2018)</h3>    
                            <p>
                            <br></br>   Part of a four-person team tasked with providing model driven performance for roughly 15,000 accounts and over $6 billion dollars in assets under management 
                            <br></br>   Manager models may include equities, ETFs, mutual funds, as well as various fixed income instruments 
                            <br></br>   Manage portfolio drift of both internal and externally managed accounts. 
                            <br></br>   Part of team that led in-house implementation of Vestmark, a portfolio management system now used by all financial advisors at Oppenheimer (this entailed testing daily functionalities such as trade generation, contributions, withdrawals, and writing internal procedures for such tasks) 
                            <br></br>   Identify Vestmark system shortcomings and provide desired results to improve system functionalities 
                            <br></br>   Communicate with client services to understand individual investors’ objectives and risk profiles 
                            <br></br>   Daily responsibilities include pre-trade review for existing clients, trade implementation for new accounts, investment allocation changes, and cash and security contributions and withdrawals 
                                </p>
                        </div>
                </div>
                {/* second job */}
                <div className = "timeline-block timeline-block-left">
                    <div className= "marker"></div>
                        <div className= "timeline-content">
                            <h3>Project Manager (Spring 2018– Summer 2020)</h3>    
                            <p>
                            <br></br>   Project manager tasked with onboarding clients onto the Hazeltree Collateral and Recon products 
                            <br></br>   Regularly interact with our product and development team to facilitate client driven product enhancements 
                            <br></br>   Created SOW (Statement of Workflow) outlining what Hazeltree will be delivering, expectations of client, and anticipated hours of completion/cost associated with implementation
                            <br></br>   Created project plan with detailing owner, date, and target completion date
                            <br></br>   Tracked billable hours of implementation work to ensure we are in line with projected budget and timeline
                            <br></br>   Provided weekly status updates containing outstanding items, owners of items, and expected date of completion to ensure client transparency 
                            <br></br>	Tested product functionality to validate product enhancements and ensure no regression occurred
                            <br></br>	Provided training on Hazeltree products to clients both on-site and over WebEx
                                </p>
                        </div>
               </div>
                {/* third job */}
                <div className = "timeline-block timeline-block-right">
                    <div className= "marker"></div>
                        <div className= "timeline-content">
                            <h3> Flatiron School(Winter 2020- Spring 2021)</h3>    
                            <p>
                            <br></br>● Part of a four-person team tasked with providing model driven performance for roughly 15,000 accounts and over $6 billion dollars in assets under management 
                            <br></br>● Manager models may include equities, ETFs, mutual funds, as well as various fixed income instruments 
                            <br></br>● Manage portfolio drift of both internal and externally managed accounts. 
                            <br></br>● Part of team that led in-house implementation of Vestmark, a portfolio management system now used by all financial advisors at Oppenheimer (this entailed testing daily functionalities such as trade generation, contributions, withdrawals, and writing internal procedures for such tasks) 
                            <br></br>● Identify Vestmark system shortcomings and provide desired results to improve system functionalities 
                            <br></br>● Communicate with client services to understand individual investors’ objectives and risk profiles 
                            <br></br>● Daily responsibilities include pre-trade review for existing clients, trade implementation for new accounts, investment allocation changes, and cash and security contributions and withdrawals 
                            </p>
                        </div>
                </div>
                {/* fourth job */}
                
            </div>
        </div>
    )
}

export default Experience;