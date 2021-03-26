
import resume from '../projectImages/resume.pdf';
function Resume(){
    return(
        <div className="resume-div">
            <div className="resume">
                <iframe src={resume} height="100%" width="100%"/>
            </div>
        </div>
    )
}

export default resume;