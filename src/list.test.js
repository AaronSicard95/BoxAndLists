import { fireEvent, queryByText, render } from "@testing-library/react";
import ListForm from "./listForm";
import TodoList from "./todoList";

it("check render", function(){
    render(<ListForm/>);
});

it("match snap", function(){
    const {asFragment, getByLabelText, queryByText} = render(<ListForm/>);
    expect(asFragment()).toMatchSnapshot();
    expect(queryByText("Go Shopping")).not.toBeInTheDocument();
    //course says to use name, but had to change to ID
    //to prevent error being thrown. Why?
    fireEvent.change(getByLabelText("ToDo:"), {target:{value:"Go Shopping"}})
    fireEvent.click(queryByText("Add ToDo!"));
    expect(queryByText("Go Shopping")).toBeInTheDocument();
})