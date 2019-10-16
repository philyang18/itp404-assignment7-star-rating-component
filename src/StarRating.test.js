import React from 'react';
import StarRating from './StarRating';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('renders 5 stars by default', () => {
	const { getByTestId } = render (
		<StarRating
	        value={2}
       		onClick={2}
	        emptyColor="#bbb"
	        filledColor="green"
	        size="3x"
	     />
	);
	expect(getByTestId("star-rating-container").childElementCount).toBe(5);

});

it('renders a specified number of stars', () => {
  	// test the starCount prop
  	const { getByTestId } = render (
		<StarRating
			className="mt d-block"
			starCount={10}
			value={5}
			onClick={5}
		/>
	);
  	expect(getByTestId("star-rating-container").childElementCount).toBe(10);
});

it('renders empty stars with color #bbb by default', () => {
	const { getByTestId } = render (
		<StarRating
			className="mt d-block"
			starCount={10}
			value={5}
			onClick={5}
		/>
	);
	expect(getByTestId("star-6")).toHaveAttribute("color", "#bbb");
});

it('renders empty stars with the color of the emptyColor value', () => {
	const { getByTestId } = render (
		<StarRating
	        value={2}
       		onClick={2}
	        emptyColor="red"
	        filledColor="green"
	        size="3x"
	     />
	);
	expect(getByTestId("star-3")).toHaveAttribute("color", "red");
});

it('renders filled stars as yellow by default', () => {
	const { getByTestId } = render (
		<StarRating
			className="mt d-block"
			starCount={10}
			value={5}
			onClick={5}
		/>
	);
	expect(getByTestId("star-3")).toHaveAttribute("color", "yellow");
});

it('renders filled stars with the color of the filledColor value', () => {
	const { getByTestId } = render (
		<StarRating
	        value={2}
       		onClick={2}
	        emptyColor="red"
	        filledColor="blue"
	        size="3x"
	     />
	);
	expect(getByTestId("star-2")).toHaveAttribute("color", "blue");
});

it('renders a star using the 1x size by default', () => {
		const { getByTestId } = render (
		<StarRating
			className="mt d-block"
			starCount={10}
			value={5}
			onClick={5}
		/>
	);
	expect(getByTestId("star-1").classList.contains("fa-1x")).toBeTruthy();
});

it('renders a star using the size value', () => {
	const { getByTestId } = render (
		<StarRating
	        value={2}
       		onClick={2}
	        emptyColor="#bbb"
	        filledColor="green"
	        size="5x"
	     />
	);
	expect(getByTestId("star-1").classList.contains("fa-5x")).toBeTruthy();
});

it('renders 0 filled stars when value is 0', () => {
	const { getByTestId } = render (
		<StarRating
	        value={0}
       		onClick={0}
	        emptyColor="#bbb"
	        filledColor="green"
	        size="5x"
	     />
	);
	expect(getByTestId("star-1")).toHaveAttribute("color", "#bbb");
});

it('renders filled stars equal to value when value is greater than 0', () => {
	const { getByTestId } = render (
		<StarRating
	        value={1}
       		onClick={1}
	        emptyColor="#bbb"
	        filledColor="green"
	        size="5x"
	     />
	);
	expect(getByTestId("star-1")).toHaveAttribute("color", "green");
	expect(getByTestId("star-2")).toHaveAttribute("color", "#bbb");
});

it('updates when clicking on an empty star', () => {
	const onClickHandler = jest.fn();
	const { getByTestId } = render (
		<StarRating
	        value={0}
       		onClick={onClickHandler}
	        emptyColor="#bbb"
	        filledColor="green"
	        size="5x"
	     />
	);
	expect(getByTestId("star-1")).toHaveAttribute("color", "#bbb");
	fireEvent.click(getByTestId("star-1"));
	expect(onClickHandler).toHaveBeenCalledWith(1);
});

it('sets the value to 0 when clicking on a filled star', () => {
	const onClickHandler = jest.fn();
	const { getByTestId } = render (
		<StarRating
	        value={5}
       		onClick={onClickHandler}
	        emptyColor="#bbb"
	        filledColor="green"
	        size="5x"
	     />
	);
	fireEvent.click(getByTestId("star-5"));
	expect(onClickHandler).toHaveBeenCalledWith(0);
});
