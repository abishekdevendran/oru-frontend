// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Virtual,
	Autoplay,
	Keyboard,
} from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/a11y';
import { SwiperOptions } from 'swiper/types';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Carousal = ({
	slides,
	options,
	className,
}: {
	slides: any[];
	options?: Partial<SwiperOptions>;
	className?: string;
}) => {
	return (
		<Swiper
			// install Swiper modules
			modules={[
				Navigation,
				Pagination,
				Scrollbar,
				A11y,
				Virtual,
				Autoplay,
				Keyboard,
			]}
			spaceBetween={0}
			slidesPerView={1}
			grabCursor={true}
			keyboard={{
				enabled: true,
				onlyInViewport: true,
			}}
			navigation={{
				nextEl: '.swiper-nxt',
				prevEl: '.swiper-pre',
				disabledClass: 'opacity-40',
			}}
			// navigation={true}
			pagination={{
				clickable: true,
				dynamicBullets: true,
			}}
			a11y={{
				enabled: true,
				prevSlideMessage: 'Previous slide',
				nextSlideMessage: 'Next slide',
			}}
			centeredSlides={true}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			virtual
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log('slide change')}
			{...options}
			className={cn('w-full h-full relative', className)}
			// rewind={true}
			// loop={true}
		>
			{slides.map((slide, index) => (
				<SwiperSlide key={slide} virtualIndex={index}>
					{slide}
				</SwiperSlide>
			))}
			<Button
				className={`swiper-pre absolute left-0 top-1/2 z-10 rounded-full mx-4 p-0 h-12 w-12`}
				variant={'ghost'}
			>
				<ArrowLeft size={32} />
			</Button>
			<Button
				className={`swiper-nxt absolute right-0 top-1/2 z-10 rounded-full mx-4 p-0 h-12 w-12`}
				variant={'ghost'}
			>
				<ArrowRight size={32} />
			</Button>
		</Swiper>
	);
};

export default Carousal;
