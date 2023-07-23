import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"

const Banner = () => {
    return (
        <div className='my-14'>
            <Carousel showArrows={true} >
                <div>
                    <img className=' w-80' src="https://media.gettyimages.com/id/1235723198/photo/new-delhi-india-october-5-students-seen-at-a-help-desk-at-delhi-universitys-north-campus-on.jpg?s=612x612&w=0&k=20&c=P3wBm_W5xqDbXUNWqmQ2Tk-wm7-BSxhs-7PmMrzFPOg=" />
                </div>
                <div>
                    <img className=' w-80' src="https://media.gettyimages.com/id/1268672468/photo/people-held-signs-at-a-rally-in-copley-square-to-support-of-students-for-fair-admissions.jpg?s=612x612&w=0&k=20&c=q46HWj3t07IsE7yuC85Dt5rtCJ3vHs5gM0ZSG6Nvx0I=" />
                </div>
                <div>
                    <img className='  w-80' src="https://media.gettyimages.com/id/1228888927/photo/students-wearing-face-masks-are-seen-checking-for-their-enrollment-numbers-with-their.jpg?s=612x612&w=0&k=20&c=_sSMUxOCmXTV1gwJQ4TgaqWieLi1MA9DjB9QyMSM5fQ=" />
                </div>
                
            </Carousel>
        </div>
    );
};

export default Banner;