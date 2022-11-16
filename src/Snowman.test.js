import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman.js";
import TEST_IMAGES from "./_testCommon.js";


//Smoke Test
it('it renders without crashing', function() {
  render(
    <Snowman images={TEST_IMAGES} words={['test']} maxWrong={2}/>
  );
});

it('Tests image is still there after you lose', function() {
  const { container, debug } = render(
    <Snowman images={TEST_IMAGES} words={['test']} maxWrong={2}/>
  );


  const aButton = container.querySelector("button[value='a']");
  const bButton = container.querySelector("button[value='b']");
  const cButton = container.querySelector("button[value='c']");
  fireEvent.click(aButton);
  fireEvent.click(bButton);
  fireEvent.click(cButton);
  debug(container);

  expect(
    container.querySelector("img[src='test3.com']")).toBeInTheDocument();

});