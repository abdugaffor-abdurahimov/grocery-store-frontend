import React, { ReactElement } from "react";
import Carousel from "react-multi-carousel";

interface Props {
	data: IDataCaracelData[];
}

export default function MultiCaraucel({ data }: Props): ReactElement {
	return (
		<Carousel
			additionalTransfrom={0}
			arrows
			autoPlaySpeed={3000}
			centerMode={false}
			className=""
			containerClass="container-with-dots"
			dotListClass=""
			draggable
			focusOnSelect={false}
			infinite
			itemClass=""
			keyBoardControl
			minimumTouchDrag={80}
			renderButtonGroupOutside={false}
			renderDotsOutside={false}
			responsive={{
				desktop: {
					breakpoint: {
						max: 3000,
						min: 1024,
					},
					items: 1,
					partialVisibilityGutter: 40,
				},
				mobile: {
					breakpoint: {
						max: 464,
						min: 0,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
				tablet: {
					breakpoint: {
						max: 1024,
						min: 464,
					},
					items: 1,
					partialVisibilityGutter: 30,
				},
			}}
			showDots={false}
			sliderClass=""
			slidesToSlide={1}
			swipeable
		>
			{data.map((item) => (
				<div>
					<img src={item.image} alt="simple-img" style={{ width: "100%" }} />
					<p>{item.legend}</p>
				</div>
			))}
		</Carousel>
	);
}
