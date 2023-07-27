// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Carousal from '@/components/Carousals';
import { SwiperOptions } from 'swiper/types';

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

const Hero = () => {
	const slides = Array.from({ length: 20 }).map((el, index) => (
		<div
			className={`${
				colors[index % 4]
			} flex items-center justify-center w-full h-full`}
			key={index}
		>{`Slide ${index + 1}`}</div>
	));
	const swiperParams: SwiperOptions = {
		slidesPerView: 1,
		spaceBetween: 50,
	};
	return (
		<div className='w-full h-[26rem]'>
			<Carousal slides={slides} />
		</div>
	);
};

export default Hero;
