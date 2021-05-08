import React from "react";
import { Carousel } from "react-responsive-carousel";

interface Props {
	data: IData[];
}

interface IData {
	image: string;
	legend: string;
}

const ResponciveCaraucel = ({ data }: Props) => {
	return (
		<Carousel>
			{data.map(({ image, legend }, index) => (
				<div key={index}>
					<img src={image} alt={legend} />
					<p className="legend">{legend}</p>
				</div>
			))}
		</Carousel>
	);
};

export default ResponciveCaraucel;
