import { fireEvent, queryByText, render } from "@testing-library/react";
import BoxForm from "./boxForm";
import BoxList from "./boxList";

it("check render", function(){
    render(<BoxForm/>);
});

it("match snap", function(){
    const {asFragment, getByLabelText, queryByText} = render(<BoxForm/>);
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("X")).not.toBeInTheDocument();
    fireEvent.click(queryByText("Add!"));
    expect(queryByText("X")).toBeInTheDocument();
})